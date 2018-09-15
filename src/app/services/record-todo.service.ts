import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Todo } from './../models/todo.model';

const KEY = 'Todo'

@Injectable({
  providedIn: 'root'
})
export class RecordTodoService {
  constructor() {
  }

  fetch(): Observable<Todo[]> {
    return from(this.promiseFetch());
  }

  add(todo: Todo): Observable<Todo[]> {
    return from(this.promiseAdd(todo));
  }


  promiseFetch(): Promise<Todo[]> {
    return Promise.resolve().then(() => {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    });
  }

  promiseAdd(todo: Todo): any {
    const todos = JSON.parse(localStorage.getItem(KEY)) || [];

    const newTodos = todos.concat(todo);
    return Promise.resolve().then(() => {
      localStorage.setItem(KEY, JSON.stringify(newTodos));
      return newTodos;
    });
  }
}
