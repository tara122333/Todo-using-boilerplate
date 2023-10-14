import { Router } from "express";

// import AccountAuthMiddleware from "../../access-token/rest-api/account-auth-middleware";

import ListController from "./list-controller";
import AccountAuthMiddleware from "../../access-token/rest-api/account-auth-middleware";

export default class ListRouter {
    public static getRoutes(): Router {
        const router = Router({ mergeParams: true });

        router.post('/', ListController.createList);
        router.get('/', AccountAuthMiddleware.ensureAccess, ListController.getAllLists);
        router.delete('/:id', AccountAuthMiddleware.ensureAccess, ListController.deleteList);

        return router;
    }
}