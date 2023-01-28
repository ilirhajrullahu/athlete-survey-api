/*
import { Request, Response } from "express";

const admin = require("firebase-admin");

const serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const tokens: any[] = [];


export const notificationController = {
    async postNotifications(req: Request, res: Response) {
        try {
            const { title, body, imageUrl } = req.body;
            await admin.messaging().sendMulticast({
              tokens,
              notification: {
                title,
                body,
                imageUrl,
              },
            });
            res.status(200).json({ message: "Successfully sent notifications!" });
          } catch (err:any) {
            res
              .status(err.status || 500)
              .json({ message: err.message || "Something went wrong!" });
          }

    },
    async registerApp(req: Request, res: Response) {
        tokens.push(req.body.token);
        res.status(200).json({ message: "Successfully registered FCM Token!" });
    }
}

*/