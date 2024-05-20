import * as React from 'react';
import Lottie from 'react-lottie';
import {useState,useEffect} from 'react';
import * as animationData from '../../lottie/animation-group.json';
import { RInvestorContext } from '../../state/context';
import { Question, QuestionOptions } from '../../state/state';
import { ActionType, SetQuestionsIndex } from '../../state/actions';

export interface IQuestionspageProps {
}

export function Questionspage(props: IQuestionspageProps) {

    const { state, dispatch } = React.useContext(RInvestorContext);
	const [disableNext, setDisableNext] = useState(false);
	const [disableBack, setDisableBack] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState<Question>({
        QuestionNo : 1,
        Question: '',
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

    function onClickNextOrBack(nextOrBack: string) {
		try {
			let currentQuestion = state.questionNo.questionIndex;
			const totalQuestions = state.questions?.Questions? state.questions?.Questions.length : 0;
			if (nextOrBack === "Next") {
				if (currentQuestion < totalQuestions) {
					currentQuestion++;
                    dispatch({
                        type: ActionType.SetQuestionsIndex,
                        payload: {questionIndex: currentQuestion }
                     });
					if((currentQuestion+1)===totalQuestions){
						setDisableNext(true);
					}
					setDisableBack(false);
				}
			} else {
				if (currentQuestion > 0) {
					currentQuestion--;
                    dispatch({
                        type: ActionType.SetQuestionsIndex,
                        payload: {questionIndex: currentQuestion }
                     });
					if((currentQuestion)===0){
						setDisableBack(true);
					}
					setDisableNext(false);
				}
			}
		} catch {
			console.log("Error on Next question")
		}
	}

    return (
        <div className="row">
            <div className="col-sm-12 col-lg-12 col-md-12">
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
                                            <input type="radio" id={`customRadio ${options.value}`} name={`customRadio ${options.value}`} className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor={`customRadio ${options.value}`}> {options.label} </label>
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

                        <div className="pagination justify-content-end">
                            <button type="button" className="btn btn-primary mt-2 btn-with-icon"><i className="ri-heart-fill"></i>Submit</button>
                        </div>
                        <nav aria-label="Page navigation example">
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

            </div>
        </div>
    );
}
