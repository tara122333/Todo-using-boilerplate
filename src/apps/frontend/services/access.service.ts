import APIService from './api.service';

import {  AccessTokenData, SignUp } from '../types/account';

export default class AccessService extends APIService {
  login(username: string, password: string): Promise<AccessTokenData> {
    return this.apiClient.post('/access-tokens', {
      username,
      password,
    });
  }

  signup(username: string, password: string): Promise<SignUp> {
    return this.apiClient.post('/accounts', {
      username,
      password,
    });
  }
}
