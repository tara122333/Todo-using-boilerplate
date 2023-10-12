import { GetAllListParams, List } from "../types";

import ListUtil from "./list-util";
import ListRepository from "./store/list-repository";


export default class ListReader {
    public static async getListForAccount(params: GetAllListParams): Promise<List []> {
        const lists = await ListRepository.listDB.find({ account: params.accountId, active: true })
        return lists.map((lists) => ListUtil.convertListDBToList(lists));
    }
}
