
export class AccessTokenData {
    data: {
        accountId: string;
        expiresAt?: Date;
        token: string;
    }
}

export class SignUp {
    data: {
        id: string;
        username: string,
    }
}

export class Tasks {
    data: [{
        account: string;
        date: string,
        id: string,
        name: string,
        time: string,
    }]
}

export class Lists {
    data: [{
        account: string;
        id: string,
        list: string,
    }]
}
export class AddLists {
    data: {
        account: string;
        id: string,
        list: string,
    }
}

export class GetUsername {
    data: {
        username: string;
    }
}

export class AccessTokenDataToken {
    token: string
}
