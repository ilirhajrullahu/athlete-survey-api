import { Request, Response } from "express";
import prisma from "../services/prisma";

export const surveyController = {
    async getAllSurveys(req: Request, res: Response) {
        const surveys = await prisma.survey.findMany({
            include:{
                questions:true
            }
        });
        return res.json(surveys);
    },
    async createEmptySurvey(req: Request, res: Response) {
        const surveyData = req.body;
        try {
            const survey = await prisma.survey.create({
                data: {
                }
            })
            return res.json({ survey: survey });
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    },
    async addQuestionsToSurvey(req: Request, res: Response) {
        const questionData = req.body;
        try {
            const questions = await prisma.question.createMany({
                data: questionData.question_array
            })
            return res.json({ questions: questions });
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    },
    async getSurveyById(req: Request, res: Response) {
        const paramId = parseInt(req.params.id);
        const uniqueSurvey = await prisma.survey.findUnique({
            where: {
                survey_id: paramId
            },
            include: {
                questions:{
                    include:{
                        answer:true
                    }
                }
            }
        })
        return res.json({ uniqueSurvey: uniqueSurvey });
    }
}