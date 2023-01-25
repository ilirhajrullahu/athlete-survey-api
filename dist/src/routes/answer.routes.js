"use strict";
exports.__esModule = true;
var express_1 = require("express");
var answer_controller_1 = require("../controllers/answer.controller");
var routes = (0, express_1.Router)();
routes.get("/", answer_controller_1.answerController.getAllAnswers);
routes.get("/:id", answer_controller_1.answerController.getAnswerById);
routes.post("/", answer_controller_1.answerController.createAnswer);
routes.put("/answerUnansweredQuestion", answer_controller_1.answerController.answerAnUnansweredQuestion);
exports["default"] = routes;
//# sourceMappingURL=answer.routes.js.map