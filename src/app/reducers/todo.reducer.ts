import { TodoActions, TodoActionTypes } from './../actions/todo.action';

import { Todo } from './../models/todo.model';

export interface State {
  todoList: Todo[]
}

const initialState: State = {
  todoList: []
}

export function reducer(state = initialState, action: TodoActions): State {
  switch(action.type) {
    case TodoActionTypes.GetTodoListComplete:
      const todoList = action.payload.todoList;
      return {...state, todoList: todoList};

    // case TodoActionTypes.AddTaskComplete:
    //   return {...state};

    // case TodoActionTypes.FinishTaskComplete:
    //   return {...state};

    // case TodoActionTypes.UnfinishTaskComplete:
    //   return {...state};

    default:
      return state;
  }
}