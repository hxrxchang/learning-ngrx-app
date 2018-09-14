import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  GetTasks = '[Todo] Get Task',
  AddTask = '[Todo] Add Task',
  CompleteTask = '[Todo] Complete Task',
  UncompleteTask = '[Todo] Uncomplete Task'
}

export class GetTasks implements Action {
  readonly type = TodoActionTypes.GetTasks;
}

export class AddTask implements Action {
  readonly type = TodoActionTypes.AddTask;
}

export class CompleteTask implements Action {
  readonly type = TodoActionTypes.CompleteTask;
}

export class UncompleteTask implements Action {
  readonly type = TodoActionTypes.UncompleteTask;
}

export type TodoActions =
  | GetTasks
  | AddTask
  | CompleteTask
  | UncompleteTask
