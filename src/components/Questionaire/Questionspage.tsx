import * as React from 'react';
import Lottie from 'react-lottie';
import {useState,useEffect} from 'react';
import * as animationData from '../../lottie/animation-group.json';
import { RInvestorContext } from '../../state/context';
import { Question, QuestionOptions } from '../../state/state';
import { ActionType, SetQuestionsIndex } from '../../state/actions';
import { GoalRecommed } from './GoalRecommed';
import axios from 'axios';

export interface IQuestionspageProps {
}

export function Questionspage(props: IQuestionspageProps) {

    const { state, dispatch } = React.useContext(RInvestorContext);
	const [disableNext, setDisableNext] = useState(false);
	const [disableBack, setDisableBack] = useState(false);
    const [isSubmitEnable, setSubmitEnable] = useState(false);
    const [isQuestionsEnable, setIsQuestionsEnable] = useState(true);
    const [customerProfileValue, setCustomerProfileValue] = useState(0);

    const [currentQuestion, setCurrentQuestion] = useState<Question>({
        QuestionNo : 1,
        Question: '',
        selectedValue: 0,
        Option: []
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    useEffect(() => {
        if (state.questions?.Questions) {
            setCurrentQuestion(state.questions.Questions[state.questionNo.questionIndex]);
        } 
      }, [state.questions, state.questionNo.questionIndex]);

    const updateSelectedValue = (value: number) => {
        let currentQuestionIndex = state.questionNo.questionIndex;
        let questions = state.questions?.Questions;
        if(!questions) return;
        questions[currentQuestionIndex].selectedValue = value || 0;
        dispatch({
            type: ActionType.SetQuestions,
            payload: {Questions: questions }
         });
    }

    const submitQuestions = () => {
        axios.post('/investment/questions/submit', { questions: state.questions})
        .then(res => {
            setCustomerProfileValue(parseInt(res.data.customerScore)+0.5);
            setIsQuestionsEnable(false);
        })
    }

    function onClickNextOrBack(nextOrBack: string) {
		try {
			let currentQuestionIndex = state.questionNo.questionIndex;
			const totalQuestions = state.questions?.Questions? state.questions?.Questions.length : 0;
			if (nextOrBack === "Next") {
				if (currentQuestionIndex < (totalQuestions-1)) {
					currentQuestionIndex++;
                    dispatch({
                        type: ActionType.SetQuestionsIndex,
                        payload: {questionIndex: currentQuestionIndex }
                     });
					if((currentQuestionIndex+1)===totalQuestions){
						setDisableNext(true);
                        setSubmitEnable(true);
					}
					setDisableBack(false);
				}
			} else {
				if (currentQuestionIndex > 0) {
					currentQuestionIndex--;
                    dispatch({
                        type: ActionType.SetQuestionsIndex,
                        payload: {questionIndex: currentQuestionIndex }
                     });
					if((currentQuestionIndex)===0){
						setDisableBack(true);
					}
					setDisableNext(false);
                    setSubmitEnable(false);
				}
			}
		} catch {
			console.log("Error on Next question")
		}
	}

    return (
        <div className="row">
            {isQuestionsEnable && <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Questionnaire on Investor Personality</h4>
                        </div>
                    </div>
                    <div className="card-body">
                    {currentQuestion && 
                        <div className='row'>
                            <div className="col-lg-12 col-md-12">
                                <p>{"Q"+currentQuestion.QuestionNo+") " +currentQuestion.Question}
                                </p></div>
                            <div className="col-lg-6 col-md-12">
                                <ul className="list-unstyled mb-0">
                                {currentQuestion?.Option.map((options: QuestionOptions) => (
                                    <li className="mb-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" 
                                                id={`customRadio-${currentQuestion.QuestionNo}-${options.value}`} 
                                                name={`customRadio-${currentQuestion.QuestionNo}`} 
                                                className="custom-control-input" 
                                                onChange={()=>updateSelectedValue(options.value)}
                                                checked={currentQuestion.selectedValue === options.value}
                                            />
                                            <label className="custom-control-label" htmlFor={`customRadio-${currentQuestion.QuestionNo}-${options.value}`}> {options.label} </label>
                                        </div></li>
                                     ))}
                                </ul>

                            </div>
                            <div className="col-lg-4 col-md-8">
                                <Lottie options={defaultOptions}
                                    height={250}
                                    width={250}
                                    isStopped={false}
                                    isPaused={false} />
                            </div>
                        </div>
                        }

                        {isSubmitEnable && <div className="pagination justify-content-start">
                            <button type="button" className="btn btn-primary mt-2 btn-with-icon" onClick={submitQuestions}>Submit</button>
                        </div>}
                        <nav aria-label="Page navigation example mt-4">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${disableBack? 'disabled' : '' }`} onClick={(event) => onClickNextOrBack("Previous")}>
                                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                                </li>
                                <li className={`page-item ${disableNext ? 'disabled' : '' }`}  onClick={(event) => onClickNextOrBack("Next")}>
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>

            </div>}{!isQuestionsEnable && <div className="col-sm-12 col-lg-12 col-md-12"><GoalRecommed customerValue={customerProfileValue}/></div>}
        </div>
    );
}
