import { LayoutActions, LayoutActionTypes } from './../actions/layout.action';

export interface State {
  isSideNavOpen: boolean,
  isMobile: boolean,
}

const initialState: State = {
  isSideNavOpen: true,
  isMobile: false,
}

export function reducer(state = initialState, action: LayoutActions): State {
  switch(action.type) {
    case LayoutActionTypes.OpenSideNav:
      return {...state, isSideNavOpen: true};

    case LayoutActionTypes.CloseSideNav:
      return {...state, isSideNavOpen: false};

    case LayoutActionTypes.UseMobile:
      return {...state, isMobile: true};

    default:
      return state;
  }
}
