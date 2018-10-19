import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() isSideNavOpen: boolean;
  @Input() todoForm: FormGroup;
  @Input() isMobile: boolean;
  @Output() changeSideNavState = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<FormGroup>();
  public headerTitie: string;

  constructor(private matDialog: MatDialog) {
    this.headerTitie = 'My Todo';
  }

  ngOnInit() {
    console.log('11111');
  }

  openAddTaskModal() {
    let dialogWidth = '50vw';
    if (this.isMobile) dialogWidth = '80vw';
    const dialog = this.matDialog.open(AddTaskModalComponent, {
      width: dialogWidth,
      data: { todoForm: this.todoForm },
      disableClose: false
    });

    dialog.afterClosed().subscribe(task => {
      if (task) {
        this.addTask.emit(task);
      }
    });
  }

  onClickChangeSideNavState() {
    this.changeSideNavState.emit(this.isSideNavOpen);
  }
}
