import React from 'react';
import { RInvestorState, initialState } from './state';
import { RInvestorActions } from './actions';

export const RInvestorContext = React.createContext<{
  state: RInvestorState;
  dispatch: React.Dispatch<RInvestorActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});