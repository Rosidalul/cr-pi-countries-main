const { Country, Activity } = require("../db"); 

const getByName = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) return res.json("Name is required");

        let nameToLower = name.toLowerCase();

        const allCountries = await Country.findAll({
            include: [
                {
                    model: Activity,
                    through: { attributes: [] },
                    attributes: ['Nombre', 'Dificultad', 'Duracion', 'Temporada']
                }
            ]
        });

        const filteredCountries = allCountries.filter((country) => {
            if (country.Nombre.toLowerCase().includes(nameToLower)) {
                return country;
            }
        });

        if (filteredCountries.length) {
            res.status(200).json(filteredCountries);
        } else {
            res.status(200).json("No country found");
        }

    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = { getByName };
