import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Todo } from './../models/todo.model';
import * as fromRoot from './../reducers';
import * as layoutAction from './../actions/layout.action';

import { RecordTodoService } from './../services/record-todo.service';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.css']
})
export class TopContainerComponent implements OnInit {
  public isSideNavOpen$: Observable<boolean>;
  private subscription: Subscription;
  public todoForm: FormGroup;

  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder,
    private todoService: RecordTodoService
  ) {
    this.todoForm = this.initFormGroup();
    this.isSideNavOpen$ = this.store.pipe(select(fromRoot.getIsSideNavOpen));
    this.subscription = new Subscription();
  }

  ngOnInit() {
  }

  private initFormGroup(): FormGroup {
    return this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      deadline: new FormControl('', [Validators.required]),
    });
  }

  addTask(todoForm) {
    const id = this.setRandomStringId();
    const params: Todo =  {
      id: id,
      title: todoForm.value.title,
       description: todoForm.value.description,
      is_complete: false,
      deadline: todoForm.value.deadline
    }

    this.todoService.add(params);
  }

  changeSideNavState(sideNavState: boolean) {
    switch (sideNavState) {
      case true:
        this.store.dispatch(new layoutAction.CloseSideNav());
        break;
      case false:
        this.store.dispatch(new layoutAction.OpenSideNav());
        break;
      default:
        break;
    }
  }

  setRandomStringId() {
    const str: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&=~/*-+';
    const length: number = 8;
    let id = '';
    for (let i=0; i<=length; i++) {
      id += str.charAt(Math.floor(Math.random() * str.length));
    }

    return id;
  }
}
