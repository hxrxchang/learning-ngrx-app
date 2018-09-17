import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from "@ngrx/store";

import { Observable, Subscription } from "rxjs";
import { MatDialog } from "@angular/material";

import { Todo } from "./../../models/todo.model";
import * as fromRoot from "./../../reducers";
import * as TodoActions from './../../actions/todo.action';

import { TodoViewerComponent } from "./../../components/todo-viewer/todo-viewer.component";

@Component({
  selector: "app-completed-tasks",
  templateUrl: "./completed-tasks.component.html",
  styleUrls: ["./completed-tasks.component.css"]
})
export class CompletedTasksComponent implements OnInit, OnDestroy {
  todoList$: Observable<Todo[]>;
  completedTodoList: Todo[];
  private isMobile$: Observable<boolean>;
  private subscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private matDialog: MatDialog
  ) {
    this.subscription = new Subscription();
    this.todoList$ = this.store.pipe(select(fromRoot.getTasks));
    this.isMobile$ = this.store.pipe(select(fromRoot.getIsMobile));
  }

  ngOnInit() {
    const todoListSub = this.todoList$.subscribe(todoList => {
      this.completedTodoList = [];
      todoList.forEach(todo => {
        if (todo.is_complete) {
          this.completedTodoList.push(todo);
        }
      });
    });

    this.subscription.add(todoListSub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickView(todo: Todo) {
    let dialogWidth = "50vw";
    const isMobileSub = this.isMobile$.subscribe(isMobile => {
      if (isMobile) dialogWidth = "80vh";
      this.matDialog.open(TodoViewerComponent, {
        width: dialogWidth,
        data: { todo },
        disableClose: false
      });
    });

    this.subscription.add(isMobileSub);
  }

  onClickChangeState(todo: Todo) {
    this.store.dispatch(new TodoActions.UnfinishTask(todo));
  }
}
