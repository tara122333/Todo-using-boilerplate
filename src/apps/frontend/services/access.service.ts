import APIService from './api.service';

import { AccessTokenData, SignUp, Tasks } from '../types/account';

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

  getAllTasks(accountId: string, token: string): Promise<Tasks> {
    return this.apiClient.get(`/accounts/${accountId}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
