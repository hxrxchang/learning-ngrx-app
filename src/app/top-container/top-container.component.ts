import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Todo } from './../models/todo.model';
import * as fromRoot from './../reducers';
import * as layoutAction from './../actions/layout.action';

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
    private fb: FormBuilder
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
    const params: Todo =  {
      title: todoForm.value.title,
      description: todoForm.value.description,
      is_complete: false,
      deadline: todoForm.value.deadline
    }

    console.log(params);
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
}
