import { ActionType, RInvestorActions } from './actions';
import { RInvestorState } from "./state";


export function RInvestorReducer(state: RInvestorState, action: RInvestorActions): RInvestorState {
    switch (action.type) {
        
        case ActionType.SetUserLoggedIn:
            return { ...state, isLoggedIn: action.payload.isLoggedIn };

            default:
                return state;    
    }
}
