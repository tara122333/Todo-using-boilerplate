import {
  NextFunction, Request, Response,
} from 'express';

import TaskService from '../task-service';
import {
  Task,
  CreateTaskParams,
  GetAllTaskParams,
  DeleteTaskParams,
  GetTaskParams,
  EditTaskParams,
} from '../types';

export default class TaskController {
  public static async createTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const params: CreateTaskParams = {
        accountId: req.params.accountId,
        name: req.body.name as string,
        date: req.body.date as string,
        time: req.body.time as string,
        status: req.body.status as string,
        list: req.body.list as string,
      };
      const task: Task = await TaskService.createTask(params);
      res.status(201).send(TaskController.serializeTaskAsJSON(task));
    } catch (e) {
      next(e);
    }
  }

  public static async deleteTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const params: DeleteTaskParams = {
        accountId: req.params.accountId,
        taskId: req.params.id,
      };
      await TaskService.deleteTask(params);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }

  public static async editTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const params: EditTaskParams = {
        accountId: req.params.accountId,
        name: req.body.name as string,
        date: req.body.date as string,
        time: req.body.time as string,
        status: req.body.status as string,
        list: req.body.list as string,
        taskId: req.params.id,
      };
      await TaskService.editTask(params);
      res.status(202).send();
    } catch (e) {
      next(e);
    }
  }

  public static async getAllTasks(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const page = +req.query.page;
      const size = +req.query.size;
      const params: GetAllTaskParams = {
        accountId: req.params.accountId,
        page,
        size,
      };
      const tasks = await TaskService.getTasksForAccount(params);
      res.status(200).send(tasks.map((task) => TaskController.serializeTaskAsJSON(task)));
    } catch (e) {
      next(e);
    }
  }

  public static async getTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const params: GetTaskParams = {
        accountId: req.params.accountId,
        taskId: req.params.id,
      };
      const task = await TaskService.getTaskForAccount(params);
      res.status(200).send(TaskController.serializeTaskAsJSON(task));
    } catch (e) {
      next(e);
    }
  }

  private static serializeTaskAsJSON(task: Task): unknown {
    return {
      id: task.id,
      account: task.account,
      name: task.name,
      date: task.date,
      time: task.time,
      status: task.status,
      list: task.list,
    };
  }
}
