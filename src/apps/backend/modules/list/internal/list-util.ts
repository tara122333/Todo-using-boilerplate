import { List } from "../types";

import { ListDB } from "./store/list-db";

export default class ListUtil {
    public static convertListDBToList(listDb: ListDB): List {
      const list = new List();
      list.id = listDb._id.toString();
      list.account = listDb.account.toString();
      list.list = listDb.list;
      return list;
    }
  }
  