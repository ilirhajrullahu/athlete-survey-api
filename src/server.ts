import express from 'express';
import bodyParser from 'body-parser';
import { athleteRoutes, messageRoutes, questionRoutes, answerRoutes, surveyRoutes } from "./routes"
import cors from 'cors'

class Server {
    private app;
    private cors;

    constructor() {
        this.app = express();
        this.cors = require('cors');
        this.app.use(this.cors());
        this.middlewares()
        this.routerConfig();

    }

    middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: '1mb' }));
    }

    private routerConfig() {
        this.app.use('/app/athlete', athleteRoutes);
        this.app.use('/app/message', messageRoutes);
        this.app.use('/app/question', questionRoutes);
        this.app.use('/app/survey', surveyRoutes);
        this.app.use('/app/answer', answerRoutes);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }

}

export default Server;