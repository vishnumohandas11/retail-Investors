export interface RInvestorState {
    isLoggedIn: LoggedIn | null;
    questions: Questions | null;
    questionNo : QuestionIndex;
}

export interface LoggedIn {
    loginStatus: boolean;
}

export interface QuestionIndex {
    questionIndex: number;
}


export interface Questions {
    Questions: Question[];
}

export interface Question {
    QuestionNo : number;
    Question: string;
    Option: QuestionOptions[];
}

export interface QuestionOptions{
    label : string;
    value : number;
}

export const initialState: RInvestorState = {
    isLoggedIn: {
        loginStatus : false
    },
    questions: {
        Questions : []
    },
    questionNo: {
        questionIndex: 0
    }
};