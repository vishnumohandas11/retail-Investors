import { ActionType, RInvestorActions } from './actions';
import { RInvestorState } from "./state";


export function RInvestorReducer(state: RInvestorState, action: RInvestorActions): RInvestorState {
    switch (action.type) {
        
        case ActionType.SetUserLoggedIn:
            return { ...state, isLoggedIn: action.payload };

        case ActionType.SetQuestions:
                return { ...state, questions: action.payload };    

        case ActionType.SetQuestionsIndex:
                    return { ...state, questionNo: action.payload };            

            default:
                return state;    
    }
}
