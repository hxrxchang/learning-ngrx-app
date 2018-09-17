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

  changeState(todo: Todo, isComplete: boolean) {
    return from(this.promiseChangeState(todo, isComplete));
  }

  promiseFetch(): Promise<Todo[]> {
    return Promise.resolve().then(() => {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    });
  }

  promiseAdd(todo: Todo): Promise<Todo[]> {
    const todoList = JSON.parse(localStorage.getItem(KEY)) || [];
    const newTodoList = todoList.concat(todo);
    return Promise.resolve().then(() => {
      localStorage.setItem(KEY, JSON.stringify(newTodoList));
      return newTodoList;
    });
  }

  promiseChangeState(paramTodo: Todo, isComplete: boolean): Promise<Todo[]> {
    const todoList = JSON.parse(localStorage.getItem(KEY)) || [];
    const newTodoList = todoList.map(todo => {
      if (paramTodo.id === todo.id) {
        todo.is_complete = isComplete;
      }
      return todo;
    });

    return Promise.resolve().then(() => {
      localStorage.setItem(KEY, JSON.stringify(newTodoList));
      return newTodoList;
    });
  }
}
