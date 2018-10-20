import { Action } from '@ngrx/store';
import { Todo } from './../models/todo.model';

export enum TodoActionTypes {
  GetTodoList = '[Todo] Get Todo List',
  GetTodoListComplete = '[Todo] Get Todo List Complete',
  AddTodo = "[Todo] Add Todo",
  AddTodoComplete = "[Todo] Add Todo Complete",
  FinishTodo = "[Todo] Finish Todo",
  FinishTodoComplete = "[Todo] Finish Todo Complete",
  UnfinishTodo = "[Todo] Unfinish Todo",
  UnfinishTodoComplete = "[Todo] Unfinish Todo Complete",
}

export class GetTodoList implements Action {
  readonly type = TodoActionTypes.GetTodoList;
}

export class GetTodoListComplete implements Action {
  readonly type = TodoActionTypes.GetTodoListComplete;
  constructor(public payload: {todoList: Todo[]}) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
  constructor(public payload: Todo) {}
}

export class AddTodoComplete implements Action {
  readonly type = TodoActionTypes.AddTodoComplete;
}

export class FinishTodo implements Action {
  readonly type = TodoActionTypes.FinishTodo;
  constructor(public payload: Todo) {}
}

export class FinishTodoComplete implements Action {
  readonly type = TodoActionTypes.FinishTodoComplete;
}

export class UnfinishTodo implements Action {
  readonly type = TodoActionTypes.UnfinishTodo;
  constructor(public payload: Todo) {}
}

export class UnfinishTodoComplete implements Action {
  readonly type = TodoActionTypes.UnfinishTodoComplete;
}

export type TodoActions =
  | GetTodoList
  | GetTodoListComplete
  | AddTodo
  | AddTodoComplete
  | FinishTodo
  | FinishTodoComplete
  | UnfinishTodo
  | UnfinishTodoComplete
