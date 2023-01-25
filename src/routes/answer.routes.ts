import { Router } from "express";
import { answerController } from "../controllers/answer.controller";

const routes = Router();

routes.get("/", answerController.getAllAnswers)
routes.get("/:id", answerController.getAnswerById)
routes.post("/", answerController.createAnswer)
routes.put("/answerUnansweredQuestion",answerController.answerAnUnansweredQuestion)
export default routes;