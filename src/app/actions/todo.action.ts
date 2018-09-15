import { Action } from '@ngrx/store';
import { Todo } from './../models/todo.model';

export enum TodoActionTypes {
  GetTasks = '[Todo] Get Tasks',
  GetTasksComplete = '[Todo] Get Tasks Complete',
  AddTask = "[Todo] Add Task",
  AddTaskComplete = "[Todo] Add Task Complete",
  FinishTask = "[Todo] Finish Task",
  FinishTaskComplete = "[Todo] Finish Task Complete",
  UnfinishTask = "[Todo] Unfinish Task",
  UnfinishTaskComplete = "[Todo] Unfinish Task Complete",
}

export class GetTasks implements Action {
  readonly type = TodoActionTypes.GetTasks;
}

export class GetTasksComplete implements Action {
  readonly type = TodoActionTypes.GetTasksComplete;
  constructor(public payload: {todoList: Todo[]}) {}
}

export class AddTask implements Action {
  readonly type = TodoActionTypes.AddTask;
  constructor(public payload: Todo) {}
}

export class AddTaskComplete implements Action {
  readonly type = TodoActionTypes.AddTaskComplete;
}

export class FinishTask implements Action {
  readonly type = TodoActionTypes.FinishTask;
}

export class FinishTaskComplete implements Action {
  readonly type = TodoActionTypes.FinishTaskComplete;
}

export class UnfinishTask implements Action {
  readonly type = TodoActionTypes.UnfinishTask;
}

export class UnfinishTaskComplete implements Action {
  readonly type = TodoActionTypes.UnfinishTaskComplete;
}

export type TodoActions =
  | GetTasks
  | GetTasksComplete
  | AddTask
  | AddTaskComplete
  | FinishTask
  | FinishTaskComplete
  | UnfinishTask
  | UnfinishTaskComplete
