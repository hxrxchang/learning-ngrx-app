import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {
  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<AddTaskModalComponent>
  ) {}

  ngOnInit() {}

  onClickOkButton(): void {
    this.matDialogRef.close('OK');
  }
}
