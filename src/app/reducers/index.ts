import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as fromLayout from './layout.reducer';

export interface State {
  layout: fromLayout.State
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
}

export const getFeatureState = createFeatureSelector<State>('todo');

export const getLayoutState = createSelector(getFeatureState, state => state.layout);
export const getIsSideNavOpen = createSelector(getLayoutState, fromLayout.getIsSideNavOpen);