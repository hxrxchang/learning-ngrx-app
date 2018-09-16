import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Todo } from './../../models/todo.model';
import * as fromRoot from './../../reducers';

@Component({
  selector: 'app-uncomplete-tasks',
  templateUrl: './uncomplete-tasks.component.html',
  styleUrls: ['./uncomplete-tasks.component.css']
})
export class UncompleteTasksComponent implements OnInit, OnDestroy {
  todoList$: Observable<Todo[]>;
  uncompleteTodoList: Todo[];
  private subscription: Subscription

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.todoList$ = this.store.pipe(select(fromRoot.getTasks));
    this.subscription = new Subscription();
  }

  ngOnInit() {
    const todoListSub = this.todoList$.subscribe(todoList => {
      this.uncompleteTodoList = [];
      todoList.forEach(todo => {
        if (!todo.is_complete) {
          this.uncompleteTodoList.push(todo);
        }
      });
    });

    this.subscription.add(todoListSub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
