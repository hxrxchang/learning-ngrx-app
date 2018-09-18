import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../models/todo.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() title: string;
  @Input() todoList: Todo[];
  @Output() openDetail = new EventEmitter<Todo>();
  @Output() changeState = new EventEmitter<Todo>();

  constructor() { }

  onClickOpenDetail(todo: Todo) {
    this.openDetail.emit(todo);
  }

  onClickChangeState(todo: Todo) {
    this.changeState.emit(todo);
  }
}
