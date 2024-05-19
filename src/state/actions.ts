import {RInvestorState}from './state';

export enum ActionType {
    SetUserLoggedIn
  }


  export interface SetUserLoggedIn{
    type: ActionType.SetUserLoggedIn;
    payload: RInvestorState;
  }
  

  export type RInvestorActions = SetUserLoggedIn;