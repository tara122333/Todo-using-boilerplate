/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';

import AccountController from './account-controller';
import AccountAuthMiddleware from '../../access-token/rest-api/account-auth-middleware';

export default class AccountRouter {
  public static getRoutes(): Router {
    const router = Router();

    router.post('/', AccountController.createAccount);
    router.post('/login', AccountController.loginAccount)
    router.get('/info/:accountId', AccountAuthMiddleware.ensureAccess, AccountController.getAccount)

    return router;
  }
}
