import { Injectable } from '@angular/core';

import { Todo } from './../models/todo.model';

const KEY = 'Todo'

@Injectable({
  providedIn: 'root'
})
export class RecordTodoService {
  constructor() {
  }

  fetch(): Promise<Todo[]> {
    return Promise.resolve().then(() => {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    });
  }

  add(todo: Todo): any {
    const todos = JSON.parse(localStorage.getItem(KEY)) || [];

    const newTodos = todos.concat(todo);
    return Promise.resolve().then(() => {
      localStorage.setItem(KEY, JSON.stringify(newTodos));
      return newTodos;
    });
  }
}
