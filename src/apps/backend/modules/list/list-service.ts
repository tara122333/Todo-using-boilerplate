

import ListReader from "./internal/list-reader";
import ListWriter from "./internal/list-writer";

import { CreateListParams, DeleteListParams, GetAllListParams, List } from "./types";

export default class ListService {
    public static async createList(params: CreateListParams): Promise<List> {
        return ListWriter.createList(params);
    }

    public static async getListsForAccount(params: GetAllListParams): Promise<List[]> {
        return ListReader.getListsForAccount(params);
    }

    public static async deleteList(params: DeleteListParams): Promise<void> {
        return ListWriter.deleteList(params);
    }
}

