import APIService from './api.service';

import { AccessTokenData, AddLists, GetUsername, Lists, SignUp, Task, Tasks } from '../types/account';

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

  getTask(accountId: string, token: string, id: string): Promise<Task> {
    return this.apiClient.get(`/accounts/${accountId}/tasks/${id}`, {
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
    const headers = {
      authorization: `Bearer ${token}`,
    };
    return this.apiClient.post(`/accounts/${accountId}/lists`,
      { list },
      { headers });
  }

  createTask(accountId: string, token: string, name: string, date: string, time: string, list: string): Promise<Tasks> {
    const headers = {
      authorization: `Bearer ${token}`,
    };

    return this.apiClient.post(`/accounts/${accountId}/tasks`, {
      name: name,
      date: date,
      time: time,
      list: list
    }, { headers });
  }

  deleteTask(accountId: string, token: string, id: string): Promise<void> {
    return this.apiClient.delete(`/accounts/${accountId}/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
  }
}
