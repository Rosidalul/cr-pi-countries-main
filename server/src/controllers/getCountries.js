const axios = require('axios'); //hago un require de axios
const { Country, Activity } = require('../db'); 

const getCountries = async (req, res) => {
    try {
        const { data } = await axios.get("http://localhost:5000/countries");

        const mappingCountries = data.map(async (countryData) => {
            await Country.findOrCreate({
                where: {
                    ID: countryData?.cca3,
                    Nombre: countryData?.name?.common,
                    Bandera_Imagen: countryData?.flags?.png,
                    Continente: countryData?.continents[0],
                    Capital: countryData.capital ? countryData.capital[0] : "Has no Capital",
                    Subregion: countryData?.subregion ? countryData?.subregion : "Has no Subregion",
                    Area: countryData?.area,
                    Poblacion: countryData?.population,
                }
            });
        });

        const allCountries = await Country.findAll({
            include: [
                {
                    model: Activity,
                    through: { attributes: [] },
                    attributes: ['Nombre', 'Dificultad', 'Duracion', 'Temporada']
                }
            ]
        });

        return res.status(200).json(allCountries);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = { getCountries };
