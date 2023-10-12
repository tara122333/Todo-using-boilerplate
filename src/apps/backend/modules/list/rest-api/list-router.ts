import { Router } from "express";

// import AccountAuthMiddleware from "../../access-token/rest-api/account-auth-middleware";

import ListController from "./list-controller";

export default class ListRouter {
    public static getRoutes(): Router {
        const router = Router({ mergeParams: true });

        router.post('/', ListController.createList);
        router.get('/', ListController.getAllLists);
        router.delete('/:id', ListController.deleteList);

        return router;
    }
}