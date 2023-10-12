

import ListReader from "./internal/list-reader";
import ListWriter from "./internal/list-writer";

import { CreateListParams, GetAllListParams, List } from "./types";

export default class ListService {
    public static async createList(params: CreateListParams): Promise<List> {
        return ListWriter.createList(params);
    }

    public static async getListsForAccount(params: GetAllListParams): Promise<List[]> {
        return ListReader.getListForAccount(params);
    }
}

