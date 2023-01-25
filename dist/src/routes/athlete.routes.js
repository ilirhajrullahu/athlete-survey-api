"use strict";
exports.__esModule = true;
var express_1 = require("express");
var athlete_controller_1 = require("../controllers/athlete.controller");
var routes = (0, express_1.Router)();
routes.get("/", athlete_controller_1.athleteController.getAllAthletes);
routes.get("/:id", athlete_controller_1.athleteController.getAthleteById);
routes.post("/", athlete_controller_1.athleteController.createAthlete);
routes.get("/logIn", athlete_controller_1.athleteController.logInAthlete);
exports["default"] = routes;
//# sourceMappingURL=athlete.routes.js.map