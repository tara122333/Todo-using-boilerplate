import {
  CreateTaskParams,
  DeleteTaskParams,
  EditTaskParams,
  GetTaskParams,
  Task,
  TaskWithNameExistsError,
} from '../types';

import TaskRepository from './store/task-repository';
import TaskReader from './task-reader';
import TaskUtil from './task-util';

export default class TaskWriter {
  public static async createTask(params: CreateTaskParams): Promise<Task> {
    const existingTask = await TaskRepository.taskDB.findOne({
      account: params.accountId,
      name: params.name,
      active: true,
    });
    if (existingTask) {
      throw new TaskWithNameExistsError(params.name);
    }
    const createdTask = await TaskRepository.taskDB.create({
      account: params.accountId,
      name: params.name,
      date: params.date,
      time: params.time,
      status: params.status,
      list: params.list,
      active: true,
    });
    return TaskUtil.convertTaskDBToTask(createdTask);
  }

  public static async deleteTask(params: DeleteTaskParams): Promise<void> {
    const taskParams: GetTaskParams = {
      accountId: params.accountId,
      taskId: params.taskId,
    };
    const task = await TaskReader.getTaskForAccount(taskParams);
    await TaskRepository.taskDB.findOneAndUpdate(
      {
        _id: task.id,
      },
      {
        $set: {
          active: false,
        },
      },
    );
  }

  public static async editTask(params: EditTaskParams): Promise<void> {
    const taskParams: GetTaskParams = {
      accountId: params.accountId,
      taskId: params.taskId,
    };
    const task = await TaskReader.getTaskForAccount(taskParams);
    await TaskRepository.taskDB.findOneAndUpdate(
      {
        _id: task.id,
      },
      {
        $set: {
          name: params.name,
          date: params.date,
          time: params.time,
          list: params.list,
          status: params.status
        },
      },
    );
  }
}
