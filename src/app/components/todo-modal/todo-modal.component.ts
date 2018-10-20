import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.css']
})
export class TodoModalComponent implements OnInit {
  public todoFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<TodoModalComponent>
  ) {
    this.todoFormGroup = this.data.todoForm;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.matDialogRef.close(this.todoFormGroup);
  }
}
