import { NextFunction, Response, Request } from "express";

import { CreateListParams, GetAllListParams, List } from "../types";
import ListService from "../list-service";

export default class ListController {
    public static async createList(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const params: CreateListParams = {
                account: req.params.accountId,
                list: req.body.list as string
            };

            const list: List = await ListService.createList(params);
            res.status(201).send(ListController.serializeListAsJSON(list));
        } catch (e) {
            next(e);
        }
    }

    public static async getAllLists(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const params: GetAllListParams = {
                accountId: req.params.accountId
            };

            const lists = await ListService.getListsForAccount(params);
            res.status(201).send(lists.map((list) => ListController.serializeListAsJSON(list)));
        } catch (e) {
            next(e);
        }
    }

    private static serializeListAsJSON(list: List): unknown {
        return {
            id: list.id,
            account: list.account,
            list: list.list
        };
    }
}