import { Router } from "express";
import { surveyController } from "../controllers/survey.controller";

const routes = Router();

routes.get("/", surveyController.getAllSurveys)
routes.get("/:id", surveyController.getSurveyById)
routes.post("/createEmptySurvey/", surveyController.createEmptySurvey)
routes.post("/addQuestionsToSurvey/", surveyController.addQuestionsToSurvey)
export default routes;