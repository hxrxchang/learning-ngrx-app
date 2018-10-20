import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, concatMap,  catchError } from 'rxjs/operators'

import { RecordTodoService } from './../services/record-todo.service';
import { Todo } from './../models/todo.model';
import {
  TodoActionTypes,
  GetTodoList,
  GetTodoListComplete,
  AddTodo,
  FinishTodo
} from './../actions/todo.action';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: RecordTodoService
  ) {}

  @Effect()
  getTasks$: Observable<Action> = this.actions$.pipe(
    ofType<GetTodoList>(TodoActionTypes.GetTodoList),
    concatMap(() => {
      return this.todoService
        .fetch()
        .pipe(map(result => new GetTodoListComplete({ todoList: result })));
    })
  );

  @Effect()
  addTask$: Observable<Action> = this.actions$.pipe(
    ofType<AddTodo>(TodoActionTypes.AddTodo),
    map(action => action.payload),
    concatMap(payload => {
      const todo = payload;
      return this.todoService
        .add(todo)
        .pipe(map(result => new GetTodoListComplete({ todoList: result })));
    })
  );

  @Effect()
  finishTask$: Observable<Action> = this.actions$.pipe(
    ofType<FinishTodo>(TodoActionTypes.FinishTodo),
    map(action => action.payload),
    concatMap(payload => {
      const todo = payload;
      const isComplete = true;
      return this.todoService
        .changeState(todo, isComplete)
        .pipe(map(result => new GetTodoListComplete({ todoList: result})));
    })
  );

  @Effect()
  unFinishTask$: Observable<Action> = this.actions$.pipe(
    ofType<FinishTodo>(TodoActionTypes.UnfinishTodo),
    map(action => action.payload),
    concatMap(payload => {
      const todo = payload;
      const isComplete = false;
      return this.todoService
        .changeState(todo, isComplete)
        .pipe(map(result => new GetTodoListComplete({ todoList: result })));
    })
  );
}
