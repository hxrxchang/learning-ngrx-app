import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as fromLayout from './layout.reducer';
import * as fromTodo from './todo.reducer';

export interface State {
  layout: fromLayout.State,
  todo: fromTodo.State
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  todo: fromTodo.reducer
}

export const getTodoState = createFeatureSelector<fromTodo.State>('todo');
export const getTasks = createSelector(getTodoState, state => state.todoList);

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getIsSideNavOpen = createSelector(getLayoutState, state => state.isSideNavOpen);
export const getIsMobile = createSelector(getLayoutState, state => state.isMobile);