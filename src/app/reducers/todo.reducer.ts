import { TodoActions, TodoActionTypes } from './../actions/todo.action';

import { Todo } from './../models/todo.model';

export interface State {
  todoList: Todo[]
}

const initialState: State = {
  todoList: []
}

export function reducer(state = initialState, action: TodoActions): State {
  console.log('this is in todo reducer', state, action.type);
  switch(action.type) {
    case TodoActionTypes.GetTasks:
      return {...state};

    case TodoActionTypes.AddTask:
      return {...state};

    case TodoActionTypes.CompleteTask:
      return {...state};

    case TodoActionTypes.UncompleteTask:
      return {...state};

    default:
      return state;
  }
}