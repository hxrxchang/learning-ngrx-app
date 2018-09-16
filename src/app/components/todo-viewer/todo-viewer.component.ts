import { Component, OnInit, Input } from '@angular/core';

import { Todo } from './../../models/todo.model';
@Component({
  selector: 'app-todo-viewer',
  templateUrl: './todo-viewer.component.html',
  styleUrls: ['./todo-viewer.component.css']
})
export class TodoViewerComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }
}
