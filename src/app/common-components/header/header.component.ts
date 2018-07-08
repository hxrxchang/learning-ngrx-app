import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerTitie: string;

  constructor(
    private matDialog: MatDialog
  ) {
    this.headerTitie = 'My Todo';
  }

  ngOnInit() {
  }

  openAddTaskModal() {
    const dialog = this.matDialog.open(AddTaskModalComponent, {
      'height': '300px',
      'width': '500px',
      'disableClose': false
    });

    // dialog.afterClosed().subscribe(result => {
    //   console.log('1111111111111');
    // });
  }
}
