import bodyParser from "body-parser";
import express, { Application } from "express";

import ErrorHandler from "../../error/error-handler";
import ListRouter from "./list-router";
import ListRepository from "../internal/store/list-repository";


export default class ListRESTApiServer {
    public static async create(): Promise<Application> {
        await ListRepository.createDBConnection();

        const app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.use('/accounts/:accountId/lists', ListRouter.getRoutes());

        app.use(ErrorHandler.AppErrorHandler);

        return Promise.resolve(app);
    }
}