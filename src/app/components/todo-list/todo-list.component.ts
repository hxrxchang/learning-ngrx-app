import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
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
