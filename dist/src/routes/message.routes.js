"use strict";
exports.__esModule = true;
var express_1 = require("express");
var message_controller_1 = require("../controllers/message.controller");
var routes = (0, express_1.Router)();
routes.get("/", message_controller_1.messageController.getAllMessages);
routes.get("/:id", message_controller_1.messageController.getMessageById);
routes.post("/", message_controller_1.messageController.createMessage);
routes.get("/getLatestMessageOfAdminSentFromUser/:id", message_controller_1.messageController.getLatestMessageOfAdminSentFromUser);
routes.get("/getLatestMessageOfUserSentFromAdmin/:id", message_controller_1.messageController.getLatestMessageOfUserSentFromAdmin);
exports["default"] = routes;
//# sourceMappingURL=message.routes.js.map