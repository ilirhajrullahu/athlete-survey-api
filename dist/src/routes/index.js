"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.answerRoutes = exports.surveyRoutes = exports.questionRoutes = exports.messageRoutes = exports.athleteRoutes = void 0;
var athlete_routes_1 = __importDefault(require("./athlete.routes"));
exports.athleteRoutes = athlete_routes_1["default"];
var message_routes_1 = __importDefault(require("./message.routes"));
exports.messageRoutes = message_routes_1["default"];
var question_routes_1 = __importDefault(require("./question.routes"));
exports.questionRoutes = question_routes_1["default"];
var survey_routes_1 = __importDefault(require("./survey.routes"));
exports.surveyRoutes = survey_routes_1["default"];
var answer_routes_1 = __importDefault(require("./answer.routes"));
exports.answerRoutes = answer_routes_1["default"];
//# sourceMappingURL=index.js.map