import { Injectable } from '@angular/core';

import { Todo } from './../models/todo.model';

const KEY = 'Todo'

@Injectable({
  providedIn: 'root'
})
export class RecordTodoService {
  constructor() { }

  fetch(): Todo[] {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  }

  add(todo: Todo): void {
    const todos = this.fetch().concat(todo);
    localStorage.setItem(KEY, JSON.stringify(todos));
  }
}
