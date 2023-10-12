import { GetAllListParams, GetListParams, List, ListNotFoundError } from "../types";

import ListUtil from "./list-util";
import ListRepository from "./store/list-repository";


export default class ListReader {
    public static async getListsForAccount(params: GetAllListParams): Promise<List[]> {
        const lists = await ListRepository.listDB.find({ account: params.accountId, active: true })
        return lists.map((lists) => ListUtil.convertListDBToList(lists));
    }

    public static async getListForAccount(params: GetListParams): Promise<List> {
        const list = await ListRepository.listDB.findOne({
            _id: params.listId,
            account: params.accountId,
            active: true,
        });
        if (!list) {
            throw new ListNotFoundError(params.listId);
        }
        return ListUtil.convertListDBToList(list);
    }
}
