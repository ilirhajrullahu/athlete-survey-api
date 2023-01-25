import { Router } from "express";
import { messageController } from "../controllers/message.controller";

const routes = Router();

routes.get("/", messageController.getAllMessages)
routes.get("/:id", messageController.getMessageById)
routes.post("/", messageController.createMessage)
routes.get("/getLatestMessageOfAdminSentFromUser/:id", messageController.getLatestMessageOfAdminSentFromUser)
routes.get("/getLatestMessageOfUserSentFromAdmin/:id", messageController.getLatestMessageOfUserSentFromAdmin)
export default routes;