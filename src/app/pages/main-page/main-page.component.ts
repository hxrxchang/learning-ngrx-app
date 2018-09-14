import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Todo } from './../../models/todo.model';

import * as fromRoot from './../../reducers'
import * as todoAction from './../../actions/todo.action';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public isSideNavOpen$: Observable<boolean>;
  private subscription: Subscription;
  public tasks$: Observable<Todo[]>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.subscription = new Subscription();
    this.isSideNavOpen$ = this.store.pipe(select(fromRoot.getIsSideNavOpen));
    this.tasks$ = this.store.pipe(select(fromRoot.getTasks));
  }

  ngOnInit() {
  }

  addTask() {
    this.store.dispatch(new todoAction.AddTask());
  }
}
