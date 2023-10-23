const { Activity, Country } = require("../db"); 

const getActivity = async (req, res) => {
    try {
        const allActivities = await Activity.findAll({
            include: [
                {
                    model: Country,
                    through: { attributes: [] }
                }
            ]
        });

        if (!allActivities.length) {
            return res.json("No hay ninguna actividad creada");
        }

        res.status(200).json(allActivities);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = { getActivity };
