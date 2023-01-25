"use strict";
exports.__esModule = true;
var express_1 = require("express");
var survey_controller_1 = require("../controllers/survey.controller");
var routes = (0, express_1.Router)();
routes.get("/", survey_controller_1.surveyController.getAllSurveys);
routes.get("/:id", survey_controller_1.surveyController.getSurveyById);
routes.post("/", survey_controller_1.surveyController.createSurvey);
exports["default"] = routes;
//# sourceMappingURL=survey.controller.js.map