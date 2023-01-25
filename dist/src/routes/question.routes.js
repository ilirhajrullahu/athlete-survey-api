"use strict";
exports.__esModule = true;
var express_1 = require("express");
var question_controller_1 = require("../controllers/question.controller");
var routes = (0, express_1.Router)();
routes.get("/", question_controller_1.questionController.getAllQuestions);
routes.get("/:id", question_controller_1.questionController.getQuestionById);
routes.get("/getAthleteUnansweredQuestions/:id", question_controller_1.questionController.getUnansweredQuestionsOfAthlete);
routes.post("/", question_controller_1.questionController.createQuestion);
exports["default"] = routes;
//# sourceMappingURL=question.routes.js.map