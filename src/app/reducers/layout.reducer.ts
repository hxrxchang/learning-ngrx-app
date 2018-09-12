import { LayoutActions, LayoutActionTypes } from './../actions/layout.action';

export interface State {
  isSideNavOpen: boolean
}

const initialState: State = {
  isSideNavOpen: true
}

export function reducer(state = initialState, action: LayoutActions): State {
  switch(action.type) {
    case LayoutActionTypes.OpenSideNav:
      return {...state, isSideNavOpen: false};

    case LayoutActionTypes.CloseSideNav:
      return {...state, isSideNavOpen: true};

    default:
      return state;
  }
}

export const getIsSideNavOpen = (state: State) => state.isSideNavOpen;