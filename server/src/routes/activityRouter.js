const { Router } = require("express");

const { postActivity } = require("../controllers/postActivity");
const { getActivity } = require("../controllers/getActivity");
const { deleteActivity } = require("../controllers/delteActivity");

const activityRouter = Router();

activityRouter.post("/", postActivity);
activityRouter.get("/", getActivity);
activityRouter.delete("/", deleteActivity);

module.exports = activityRouter;