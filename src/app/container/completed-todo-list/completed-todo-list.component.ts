import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";
import { MatDialog } from "@angular/material";

import { Todo } from "../../models/todo.model";
import * as fromRoot from "../../reducers";
import * as TodoActions from '../../actions/todo.action';

import { TodoViewerComponent } from "../../components/todo-viewer/todo-viewer.component";

@Component({
  selector: "app-completed-todo-list",
  templateUrl: "./completed-todo-list.component.html",
  styleUrls: ["./completed-todo-list.component.css"]
})
export class CompletedTodoListComponent implements OnInit, OnDestroy {
  todoList$: Observable<Todo[]>;
  completedTodoList$: Observable<Todo[]>;
  private isMobile$: Observable<boolean>;
  private subscription: Subscription;
  title: string = 'Completed Task List';

  constructor(
    private store: Store<fromRoot.State>,
    private matDialog: MatDialog
  ) {
    this.subscription = new Subscription();
    this.todoList$ = this.store.pipe(select(fromRoot.getTasks));
    this.isMobile$ = this.store.pipe(select(fromRoot.getIsMobile));
  }

  ngOnInit() {
    this.completedTodoList$ = this.todoList$.pipe(
      map(todoList => todoList.filter(todo => todo.is_complete))
    );
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
    this.store.dispatch(new TodoActions.UnfinishTodo(todo));
  }
}
