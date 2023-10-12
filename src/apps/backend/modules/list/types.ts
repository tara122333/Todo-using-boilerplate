import AppError from "../error/app-error";


export class List {
    id: string;
    account: string;
    list: string;
}


export type CreateListParams = {
    account: string;
    list: string;
};

export type GetAllListParams = {
    accountId: string;
};

export type GetListParams = {
    accountId: string;
    taskId: string;
};


export enum ListErrorCode {
    NOT_FOUND = 'LIST_ERR_01',
    LIST_ALREADY_EXISTS = 'LIST_ERR_02',
    UNAUTHORIZED_LIST_ACCESS = 'LIST_ERR_03',
}

export class ListWithNameExistsError extends AppError {
    code: ListErrorCode;

    constructor(name: string) {
        super(`List with name ${name} already exists.`);
        this.code = ListErrorCode.LIST_ALREADY_EXISTS;
        this.httpStatusCode = 409;
    }
}

export class ListNotFoundError extends AppError {
    code: ListErrorCode;

    constructor(listId: string) {
        super(`List with listId ${listId} not found.`);
        this.code = ListErrorCode.NOT_FOUND;
        this.httpStatusCode = 404;
    }
}

export class ListWithNameNotFoundError extends AppError {
    code: ListErrorCode;

    constructor(listName: string) {
        super(`List with name ${listName} not found.`);
        this.code = ListErrorCode.NOT_FOUND;
        this.httpStatusCode = 404;
    }
}
