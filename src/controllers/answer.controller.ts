import { Request, Response } from "express";
import prisma from "../services/prisma";

export const answerController = {
    async getAllAnswers(req: Request, res: Response) {
        try {
            const answers = await prisma.answer.findMany();
            return res.json(answers);
        } catch (error) {
            res.status(400).send(error);
        }

    },
    async createAnswer(req: Request, res: Response) {
        const answerData = req.body;
        try {
            const answer = await prisma.answer.create({
                data: {
                    answer_number: answerData.answer_number,
                    question_fk: answerData.question,
                    athlete_fk: answerData.athlete
                }
            })
            return res.json({ answer: answer });
        } catch (error) {
            res.status(400).send(error);
        }

    },
    async getAnswerById(req: Request, res: Response) {
        const paramId = parseInt(req.params.id);
        try {
            const uniqueAnswer = await prisma.answer.findUnique({
                where: {
                    answer_id: paramId
                }
            })
            return res.json({ uniqueAnswer: uniqueAnswer });
        } catch (error) {
            res.status(400).send(error);
        }

    },
    async answerAnUnansweredQuestion(req: Request, res: Response) {
        const answerData = req.body;
        try {
            const answer = await prisma.answer.update({
                where: {
                    answer_id: answerData.answer_id
                },
                data: {
                    answer_number: answerData.answer_number
                }
            })
            return res.json({ answer: answer });
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }

    }
}