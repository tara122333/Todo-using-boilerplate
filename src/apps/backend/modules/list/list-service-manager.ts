import { Application } from "express";

import ListRESTApiServer from "./rest-api/list-rest-api-server";

export default class ListServiceManager{
    public static async createRestAPIServer():Promise<Application>{
        return ListRESTApiServer.create();
    }
}
