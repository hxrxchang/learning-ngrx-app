import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, concatMap,  catchError } from 'rxjs/operators'

import { RecordTodoService } from './../services/record-todo.service';
import { Todo } from './../models/todo.model';
import {
  TodoActionTypes,
  GetTasks,
  GetTasksComplete,
  AddTask,
  FinishTask
} from './../actions/todo.action';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: RecordTodoService
  ) {}

  @Effect()
  getTasks$: Observable<Action> = this.actions$.pipe(
    ofType<GetTasks>(TodoActionTypes.GetTasks),
    concatMap(() => {
      return this.todoService
        .fetch()
        .pipe(map(result => new GetTasksComplete({ todoList: result })));
    })
  );

  @Effect()
  addTask$: Observable<Action> = this.actions$.pipe(
    ofType<AddTask>(TodoActionTypes.AddTask),
    map(action => action.payload),
    concatMap(payload => {
      const todo = payload;
      return this.todoService
        .add(todo)
        .pipe(map(result => new GetTasksComplete({ todoList: result })));
    })
  );

  @Effect()
  finishTask$: Observable<Action> = this.actions$.pipe(
    ofType<FinishTask>(TodoActionTypes.FinishTask),
    map(action => action.payload),
    concatMap(payload => {
      const todo = payload;
      const isComplete = true;
      return this.todoService
        .changeState(todo, isComplete)
        .pipe(map(result => new GetTasksComplete({ todoList: result})));
    })
  );

  @Effect()
  unFinishTask$: Observable<Action> = this.actions$.pipe(
    ofType<FinishTask>(TodoActionTypes.UnfinishTask),
    map(action => action.payload),
    concatMap(payload => {
      const todo = payload;
      const isComplete = false;
      return this.todoService
        .changeState(todo, isComplete)
        .pipe(map(result => new GetTasksComplete({ todoList: result })));
    })
  );
}
