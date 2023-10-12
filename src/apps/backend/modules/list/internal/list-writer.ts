import { CreateListParams, DeleteListParams, GetListParams, List, ListWithNameExistsError } from "../types";

import ListRepository from "./store/list-repository";

import ListUtil from "./list-util";
import ListReader from "./list-reader";


export default class ListWriter {
    public static async createList(params: CreateListParams): Promise<List> {
        const existingList = await ListRepository.listDB.findOne({
            account: params.account,
            list: params.list,
            active: true,
        });
        if (existingList) {
            throw new ListWithNameExistsError(params.list);
        }
        const createdList = await ListRepository.listDB.create({
            account: params.account,
            list: params.list,
            active: true,
        });
        return ListUtil.convertListDBToList(createdList);
    }

    public static async deleteList(params: DeleteListParams): Promise<void> {
        const listParams: GetListParams = {
            accountId: params.accountId,
            listId: params.listId,
        };
        const list = await ListReader.getListForAccount(listParams);
        await ListRepository.listDB.findOneAndUpdate(
            {
                _id: list.id,
            },
            {
                $set: {
                    active: false,
                },
            },
        );
    }
}