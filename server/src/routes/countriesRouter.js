const { Router } = require("express");

const { getCountries } = require("../controllers/getCountries");
const { getCountryById } = require("../controllers/getCountriesById");
const { getByName } = require("../controllers/getByName");

const contriesRouter = Router();

contriesRouter.get("/", getCountries);
contriesRouter.get("/name", getByName);
contriesRouter.get("/:idPais", getCountryById);

module.exports = contriesRouter;