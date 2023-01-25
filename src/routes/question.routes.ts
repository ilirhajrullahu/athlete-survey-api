import { Router } from "express";
import { questionController } from "../controllers/question.controller";

const routes = Router();

routes.get("/", questionController.getAllQuestions)
routes.get("/:id", questionController.getQuestionById)
routes.get("/getAthleteUnansweredQuestions/:id", questionController.getUnansweredQuestionsOfAthlete)
routes.post("/", questionController.createQuestion)


export default routes;