"use strict";
exports.__esModule = true;
var express_1 = require("express");
var survey_controller_1 = require("../controllers/survey.controller");
var routes = (0, express_1.Router)();
routes.get("/", survey_controller_1.surveyController.getAllSurveys);
routes.get("/:id", survey_controller_1.surveyController.getSurveyById);
routes.post("/createEmptySurvey/", survey_controller_1.surveyController.createEmptySurvey);
routes.post("/addQuestionsToSurvey/", survey_controller_1.surveyController.addQuestionsToSurvey);
exports["default"] = routes;
//# sourceMappingURL=survey.routes.js.map