import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { Todo } from './../../models/todo.model';

import * as fromRoot from './../../reducers'
import * as TodoAction from './../../actions/todo.action';
import * as LayoutAction from './../../actions/layout.action';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit, OnDestroy {
  public isSideNavOpen$: Observable<boolean>;
  private subscription: Subscription;
  public todos$: Observable<Todo[]>;
  public finishedTodoList: Todo[];
  public unfinishedTodoList: Todo[];
  public todoForm: FormGroup;
  public isMobile$: Observable<boolean>;
  public mode: string;

  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder
  ) {
    this.subscription = new Subscription();
    this.todoForm = this.initFormGroup();
    this.isSideNavOpen$ = this.store.pipe(select(fromRoot.getIsSideNavOpen));
    this.todos$ = this.store.pipe(select(fromRoot.getTasks));
    this.isMobile$ = this.store.pipe(select(fromRoot.getIsMobile));
    this.store.dispatch(new TodoAction.GetTasks());
    this.mode = 'side';
  }

  ngOnInit() {
    const todoSub = this.todos$.subscribe(todoList => {
      this.unfinishedTodoList = [];
      this.finishedTodoList = [];
      todoList.forEach(todo => {
        if (todo.is_complete) {
          this.finishedTodoList.push(todo);
        } else {
          this.unfinishedTodoList.push(todo);
        }
      });
    });

    const sizeSub = this.isMobile$.subscribe(isMobile => {
      if (isMobile) this.mode = 'over';
    });

    this.subscription.add(todoSub);
    this.subscription.add(sizeSub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initFormGroup(): FormGroup {
    return this.fb.group({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      deadline: new FormControl("", [Validators.required])
    });
  }

  addTask(todoForm) {
    const id = this.setRandomStringId();
    const params: Todo = {
      id: id,
      title: todoForm.value.title,
      description: todoForm.value.description,
      is_complete: false,
      deadline: todoForm.value.deadline
    }

    this.store.dispatch(new TodoAction.AddTask(params));
    this.todoForm.reset();
  }

  setRandomStringId(): string {
    const str: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&=~/*-+';
    const length: number = 8;
    let id = '';
    for (let i = 0; i <= length; i++) {
      id += str.charAt(Math.floor(Math.random() * str.length));
    }

    return id;
  }

  changeSideNavState(sideNavState: boolean) {
    switch (sideNavState) {
      case true:
        this.store.dispatch(new LayoutAction.CloseSideNav());
        break;
      case false:
        this.store.dispatch(new LayoutAction.OpenSideNav());
        break;
      default:
        break;
    }
  }
}
