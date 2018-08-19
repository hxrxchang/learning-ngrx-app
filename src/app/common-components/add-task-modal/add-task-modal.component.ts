import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {
  public taskTitle: string;
  public taskDetail: string;
  public taskDeadline;

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<AddTaskModalComponent>
  ) {}

  ngOnInit() {}

  addTask() {
    console.log(this.taskTitle, this.taskDeadline, this.taskDeadline);
    console.log(typeof(this.taskDeadline));
  }
}
