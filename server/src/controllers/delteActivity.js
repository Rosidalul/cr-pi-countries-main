const { Activity } = require("../db"); 

const deleteActivity = async (req, res) => {
    try {
        const { activity } = req.body;

        await Activity.destroy({ where: { id: activity.id } });

        res.status(200).json("Deleted Successfully");
    } catch (error) {
        res.status(404).json("Error deleting");
    }
};

module.exports = { deleteActivity };
