const { Country, Activity } = require("../db"); 

const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params; // Destructura el id de la propiedad "params";

        const finded = await Country.findByPk(idPais, {
            include: [
                {
                    model: Activity,
                    through: { attributes: [] },
                    attributes: ['Nombre', 'Dificultad', 'Duracion', 'Temporada']
                }
            ]
        }); // Y lo busco en la base de datos y guardo el resultado en una constante;

        if (!finded) {
            return res.status(404).json({ message: 'País no encontrado' });
        }

        return res.status(200).json(finded);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = { getCountryById };
