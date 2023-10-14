import APIService from './api.service';

import { AccessTokenData, AddLists, GetUsername, Lists, SignUp, Tasks } from '../types/account';

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

  getUsername(accountId: string, token: string): Promise<GetUsername> {
    return this.apiClient.get(`/accounts/info/${accountId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getAllTasks(accountId: string, token: string): Promise<Tasks> {
    return this.apiClient.get(`/accounts/${accountId}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  getAllLists(accountId: string, token: string): Promise<Lists> {
    return this.apiClient.get(`/accounts/${accountId}/lists`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  addList(accountId: string, token: string, list: string): Promise<AddLists> {
    return this.apiClient.post(`/accounts/${accountId}/lists`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      list
    });
  }

  createTask(accountId: string, token: string, name: string, date: string, time: string): Promise<Tasks> {
    return this.apiClient.post(`/accounts/${accountId}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        name,
        date,
        time
      }
    });
  }
}
