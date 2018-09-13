import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() isSideNavOpen: boolean;
  @Output() changeSideNavState = new EventEmitter<boolean>();
  public headerTitie: string;

  constructor(private matDialog: MatDialog) {
    this.headerTitie = "My Todo";
  }

  ngOnInit() {
    console.log(this.isSideNavOpen);
  }

  openAddTaskModal() {
    const dialog = this.matDialog.open(AddTaskModalComponent, {
      width: "50vw",
      disableClose: false
    });

    // dialog.afterClosed().subscribe(result => {
    //   console.log('1111111111111');
    // });
  }

  onClickChangeSideNavState() {
    this.changeSideNavState.emit(this.isSideNavOpen);
  }
}
