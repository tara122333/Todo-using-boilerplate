import { CreateListParams, List, ListWithNameExistsError } from "../types";

import ListRepository from "./store/list-repository";

import ListUtil from "./list-util";


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
}