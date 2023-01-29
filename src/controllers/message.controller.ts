import { Request, Response } from "express";
import prisma from "../services/prisma";

export const messageController = {
    async getAllMessages(req: Request, res: Response) {
        try {
            const messages = await prisma.athlete_Message.findMany();
            return res.json(messages);
        } catch (error) {
            res.status(400).send(error);
        }

    },
    async createMessage(req: Request, res: Response) {
        const messageData = req.body;
        try {
            const message = await prisma.athlete_Message.create({
                data: {
                    message_text: messageData.message_text,
                    message_sender: messageData.sender,
                    message_receiver: messageData.receiver,
                    survey_fk:messageData.survey_fk
                }
            })
            return res.json({ message: message });
        } catch (error) {
            res.status(400).send(error);
        }

    },
    async getMessageById(req: Request, res: Response) {
        const paramId = parseInt(req.params.id);
        try {
            const uniqueMessage = await prisma.athlete.findUnique({
                where: {

                }
            })
            return res.json({ uniqueMessage: uniqueMessage });
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getLatestMessageOfAdminSentFromUser(req: Request, res: Response) {
        const senderId = parseInt(req.params.id);

        try {
            const latestMessage = await prisma.athlete_Message.findFirst({
                where: {
                    message_sender: senderId,
                    message_receiver: 1
                },
                orderBy: {
                    message_date: "desc"
                }
            })
            return res.json({ latestMessage: latestMessage });
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getLatestMessageOfUserSentFromAdmin(req: Request, res: Response) {
        const senderId = parseInt(req.params.id);
        try {
            const latestMessage = await prisma.athlete_Message.findFirst({
                where: {
                    message_receiver: senderId,
                    message_sender: 1
                },
                orderBy: {
                    message_date: "desc"
                }
            })
            return res.json({ latestMessage: latestMessage });
        } catch (error) {
            res.status(400).send(error);
        }
    }
}