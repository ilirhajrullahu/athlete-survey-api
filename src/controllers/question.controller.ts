import { Prisma, Question } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../services/prisma";

export const questionController = {
    async getAllQuestions(req: Request, res: Response) {
        try {
            const questions = await prisma.question.findMany({
                include:{
                    answer:true,
                    athlete:true
                }
            });
            return res.json(questions);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async createQuestion(req: Request, res: Response) {
        const questionData = req.body;
        console.log(questionData)
        try {
            const question = await prisma.question.create({
                data: {
                    question_text: questionData.question_text,
                    athlete_fk: questionData.athlete_fk,
                    survey_fk: questionData.survey_fk
                }
            })
            return res.json({ question: question });
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }

    },
    async getQuestionById(req: Request, res: Response) {
        const paramId = parseInt(req.params.id);
        try {
            const uniqueQuestion = await prisma.question.findUnique({
                where: {
                    question_id: paramId
                }
            })
            return res.json({ uniqueQuestion: uniqueQuestion });
        } catch (error) {
            res.status(400).send(error);
        }

    },
    async getUnansweredQuestionsOfAthlete(req: Request, res: Response) {
        const athlete_id = parseInt(req.params.id)
        console.log(athlete_id)
        let returnArr;
        try {
            const returnA = await prisma.question.findMany({
                where: {
                    answer: {
                        athlete_fk: athlete_id,
                        answer_number: 0
                    }
                },
                include: {
                    answer: true
                }
            })
            returnArr = returnA
            if (returnA.length == 0) {
                const returnB = await prisma.question.findMany({
                    where: {
                        answer: {
                            athlete_fk: athlete_id,
                            NOT: {
                                answer_number: 0
                            }
                        }
                    },
                    include: {
                        answer: true
                    }
                })
                returnArr = returnB
            }
            return res.json({ questions: returnArr });
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
}