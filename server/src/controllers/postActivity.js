const { Activity, Country } = require("../db"); 

const postActivity = async (req, res) => {
    try {
        const { countries, name, difficulty, duracion, season } = req.body;

        if (!name || !difficulty || !season) {
            throw new Error("insufficient information");
        }

        let newActivity = await Activity.create({
            Nombre: name,
            Dificultad: difficulty,
            Duracion: duracion ? duracion : "00:00",
            Temporada: season
        });

        await newActivity.addCountries(countries);

        // Para obtener la actividad con la relación a los países asociados
        const activityCountry = await Activity.findByPk(newActivity.id, {
            include: [
                {
                    model: Country,
                    through: { attributes: [] }
                    // attributes: ['ID', 'Nombre']
                }
            ]
        });

        return res.status(200).json(activityCountry);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = { postActivity };
