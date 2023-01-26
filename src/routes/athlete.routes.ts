import { Router } from "express";
import { athleteController } from "../controllers/athlete.controller";

const routes = Router();

routes.get("/", athleteController.getAllAthletes)
routes.get("/:id", athleteController.getAthleteById)
routes.post("/", athleteController.createAthlete)
routes.post("/logIn", athleteController.logInAthlete)

export default routes;