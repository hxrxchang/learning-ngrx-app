import { Component, OnInit, Input} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromRoot from './../../reducers'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public isSideNavOpen$: Observable<boolean>;
  private subscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.subscription = new Subscription();
    this.isSideNavOpen$ = this.store.pipe(select(fromRoot.getIsSideNavOpen));
  }

  ngOnInit() {
  }
}
