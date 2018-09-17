import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from './../../models/todo.model';
@Component({
  selector: 'app-todo-viewer',
  templateUrl: './todo-viewer.component.html',
  styleUrls: ['./todo-viewer.component.css']
})
export class TodoViewerComponent implements OnInit {
  public todo: Todo
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<TodoViewerComponent>
  ) {
    this.todo = this.data.todo;
  }

  ngOnInit() {
    
  }
}
