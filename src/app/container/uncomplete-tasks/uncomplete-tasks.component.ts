import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

import { Todo } from './../../models/todo.model';
import * as fromRoot from './../../reducers';
import * as TodoAction from './../../actions/todo.action';

import { TodoViewerComponent } from './../../components/todo-viewer/todo-viewer.component';

@Component({
  selector: 'app-uncomplete-tasks',
  templateUrl: './uncomplete-tasks.component.html',
  styleUrls: ['./uncomplete-tasks.component.css']
})
export class UncompleteTasksComponent implements OnInit, OnDestroy {
  todoList$: Observable<Todo[]>;
  uncompleteTodoList$: Observable<Todo[]>;
  private isMobile$: Observable<boolean>;
  private subscription: Subscription;
  title: string = 'Uncompleted Task List'

  constructor(
    private store: Store<fromRoot.State>,
    private matDialog: MatDialog
  ) {
    this.todoList$ = this.store.pipe(select(fromRoot.getTasks));
    this.isMobile$ = this.store.pipe(select(fromRoot.getIsMobile));
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.uncompleteTodoList$ = this.todoList$.pipe(
      map(todoList => todoList.filter(todo => !todo.is_complete))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickView(todo: Todo) {
    let dialogWidth = '50vw';
    const isMobileSub = this.isMobile$.subscribe(isMobile => {
      if (isMobile) dialogWidth = '80vh';
      this.matDialog.open(TodoViewerComponent, {
        width: dialogWidth,
        data: { todo },
        disableClose: false
      });
    });

    this.subscription.add(isMobileSub);
  }

  onClickComplete(todo: Todo) {
    this.store.dispatch(new TodoAction.FinishTask(todo));
  }
}
