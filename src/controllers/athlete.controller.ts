import { Request, Response } from "express";
import prisma from "../services/prisma";

export const athleteController = {
    async getAllAthletes(req: Request, res: Response) {
        const athletes = await prisma.athlete.findMany();
        return res.json(athletes);
    },
    async createAthlete(req: Request, res: Response) {
        const athleteData = req.body;
        try {
            const athlete = await prisma.athlete.create({
                data: {
                    first_name: athleteData.first_name,
                    last_name: athleteData.last_name,
                    username: athleteData.username,
                    athlete_password: athleteData.athlete_password
                }
            })
            return res.json({ athlete: athlete });
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async logInAthlete(req: Request, res: Response) {
        const athleteData = req.body
        try {
            const athlete = await prisma.athlete.findUniqueOrThrow({
                where: {
                    username: athleteData.username,
                    athlete_password: athleteData.password
                }
            })
            return res.json(athlete)
        } catch (error) {
            res.status(400).send(error);
        }

    },
    async getAthleteById(req: Request, res: Response) {
        const paramId = parseInt(req.params.id);
        try {
            const uniqueAthlete = await prisma.athlete.findUnique({
                where: {
                    athlete_id: paramId
                }
            })
            return res.json({ uniqueAthlete: uniqueAthlete });
        } catch (error) {
            res.status(400).send(error);
        }
    }
}