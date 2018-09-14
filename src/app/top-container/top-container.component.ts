import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import * as fromRoot from './../reducers';
import * as layout from './../actions/layout.action';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.css']
})
export class TopContainerComponent implements OnInit {
  public isSideNavOpen$: Observable<boolean>;
  private subscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.isSideNavOpen$ = this.store.pipe(select(fromRoot.getIsSideNavOpen));
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.isSideNavOpen$.subscribe(data => {
      console.log(data);
    });
  }

  changeSideNavState(sideNavState: boolean) {
    switch (sideNavState) {
      case true:
        this.store.dispatch(new layout.CloseSideNav());
        break;
      case false:
        this.store.dispatch(new layout.OpenSideNav());
        break;
      default:
        break;
    }
  }
}