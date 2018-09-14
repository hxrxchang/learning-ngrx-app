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

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getIsSideNavOpen = createSelector(getLayoutState, state => state.isSideNavOpen);