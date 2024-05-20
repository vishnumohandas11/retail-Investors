import {Questions, LoggedIn, QuestionIndex}from './state';

export enum ActionType {
    SetUserLoggedIn,
    SetQuestions,
    SetQuestionsIndex
  }


  export interface SetUserLoggedIn{
    type: ActionType.SetUserLoggedIn;
    payload: LoggedIn;
  }
  
  export interface SetQuestions{
    type: ActionType.SetQuestions;
    payload: Questions;
  }

  export interface SetQuestionsIndex{
    type: ActionType.SetQuestionsIndex;
    payload: QuestionIndex;
  }

  export type RInvestorActions = SetUserLoggedIn | SetQuestions | SetQuestionsIndex;