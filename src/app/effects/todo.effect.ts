import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, concatMap,  catchError } from 'rxjs/operators'

import { RecordTodoService } from './../services/record-todo.service';
import { Todo } from './../models/todo.model';
import {
  TodoActions,
  GetTasks,
  GetTasksComplete,
  AddTask,
  AddTaskComplete
} from './../actions/todo.action';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Action,
    private todoService: RecordTodoService
  ) {

  }
}
