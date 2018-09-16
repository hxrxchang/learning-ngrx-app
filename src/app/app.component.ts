import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';

import * as fromRoot from './reducers';
import * as LayoutAction from './actions/layout.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private isExtraSmall: Observable<BreakpointState> = this.breakPointObserver.observe(Breakpoints.XSmall);
  private subscription: Subscription;

  constructor(
    private breakPointObserver: BreakpointObserver,
    private store: Store<fromRoot.State>
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    const ditectDeviceSub = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        this.store.dispatch(new LayoutAction.UseMobile());
      }
    });

    this.subscription.add(ditectDeviceSub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
