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

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getIsSideNavOpen = createSelector(getLayoutState, state => state.isSideNavOpen);