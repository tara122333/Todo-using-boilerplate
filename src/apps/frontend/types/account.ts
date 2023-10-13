
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

export class AccessTokenDataToken {
    token: string
}
