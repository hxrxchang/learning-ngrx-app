import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import * as fromLayout from './../reducers';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.css']
})
export class TopContainerComponent implements OnInit {
  constructor(
    // private store: Store<fromLayout.State>
  ) { }

  ngOnInit() {
    console.log('2222');
    // this.store.subscribe(data => {
    //   console.log('11111111111111');
    //   console.log(data);
    // });
  }
}
