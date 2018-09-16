import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSideNav = '[Layout] Open Side Nav',
  CloseSideNav = '[Layout] Close Side Nav',
  UseMobile = '[Layout] Use Mobile'
}

export class OpenSideNav implements Action {
  readonly type = LayoutActionTypes.OpenSideNav;
}

export class CloseSideNav implements Action {
  readonly type = LayoutActionTypes.CloseSideNav;
}

export class UseMobile implements Action {
  readonly type = LayoutActionTypes.UseMobile;
}

export type LayoutActions =
  | OpenSideNav
  | CloseSideNav
  | UseMobile