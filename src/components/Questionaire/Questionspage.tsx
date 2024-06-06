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
    const [recommendation, setRecommendation] = useState({
        theme: '',
        expectedReturn: '',
        meaning: '',
        horizon: ''
    });

    // const [currentQuestion, setCurrentQuestion] = useState<Question>({
    //     QuestionNo : 1,
    //     Question: '',
    //     selectedValue: 0,
    //     Option: []
    // });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    // useEffect(() => {
    //     if (state.questions?.Questions) {
    //         setCurrentQuestion(state.questions.Questions[state.questionNo.questionIndex]);
    //     } 
    //   }, [state.questions, state.questionNo.questionIndex]);

    const updateSelectedValue = (qstnNr: number, value: number) => {
        //let currentQuestionIndex = state.questionNo.questionIndex;
        let questions = state.questions?.Questions;
        if(!questions) return;
        questions[qstnNr-1].selectedValue = value || 0;
        dispatch({
            type: ActionType.SetQuestions,
            payload: {Questions: questions }
         });
    }
    const getSliderValue = (value: number) => {
        if(0<=value && value<=3){
            return 1;
        } else if(4<=value && value<=7){
            return 2;
        }
        return 3;
    }
    const calculateScore = () => {
        var score = 0;
        console.log(state.questions?.Questions)
        state.questions?.Questions.forEach((question: Question) => {
            if (question.isPriceFactor && question.QuestionType !== "Slider"){
                score += question.selectedValue;
            }
            if (question.isPriceFactor && question.QuestionType === "Slider"){
                console.log( getSliderValue(question.selectedValue))
                score += getSliderValue(question.selectedValue);
            }
        });

        console.log(score);
        return score;
    }
    const setRecommendationValue = (score: number) => {
        if (8<=score && score<=10) {
            setRecommendation({
                theme: 'Stable',
                expectedReturn: '3%',
                meaning: 'Secure your emergency needs.',
                horizon: 'Short to Medium Term'
            })
        } else if (11<=score && score<=13) {
            setRecommendation({
                theme: 'Stable Plus',
                expectedReturn: '5%',
                meaning: 'Steady growth that you can count on.',
                horizon: 'Short to Medium Term'
            })
        } else if (14<=score && score<=17) {
            setRecommendation({
                theme: 'Balanced',
                expectedReturn: '7%',
                meaning: 'Build a foundation for the future.',
                horizon: 'Medium Term'
            })
        } else if (18<=score && score<=21) {
            setRecommendation({
                theme: 'Growth',
                expectedReturn: '9%',
                meaning: 'Beat the market and grow big.',
                horizon: 'Long Term'
            })
        } else {
            setRecommendation({
                theme: 'High Growth',
                expectedReturn: '12%',
                meaning: 'Retire rich with financial freedom.',
                horizon: 'Long Term'
            })
        
        }
    }
    const submitQuestions = () => {
        const score = calculateScore();
        setRecommendationValue(score);
        setCustomerProfileValue(3.5);
        setIsQuestionsEnable(false);
        window.scroll(0,0);
        // axios.post('/investment/questions/submit', { questions: state.questions})
        // .then(res => {
        //     setCustomerProfileValue(parseInt(res.data.customerScore)+0.5);
        //     setIsQuestionsEnable(false);
        // })
    }

    // function onClickNextOrBack(nextOrBack: string) {
	// 	try {
	// 		let currentQuestionIndex = state.questionNo.questionIndex;
	// 		const totalQuestions = state.questions?.Questions? state.questions?.Questions.length : 0;
	// 		if (nextOrBack === "Next") {
	// 			if (currentQuestionIndex < (totalQuestions-1)) {
	// 				currentQuestionIndex++;
    //                 dispatch({
    //                     type: ActionType.SetQuestionsIndex,
    //                     payload: {questionIndex: currentQuestionIndex }
    //                  });
	// 				if((currentQuestionIndex+1)===totalQuestions){
	// 					setDisableNext(true);
    //                     setSubmitEnable(true);
	// 				}
	// 				setDisableBack(false);
	// 			}
	// 		} else {
	// 			if (currentQuestionIndex > 0) {
	// 				currentQuestionIndex--;
    //                 dispatch({
    //                     type: ActionType.SetQuestionsIndex,
    //                     payload: {questionIndex: currentQuestionIndex }
    //                  });
	// 				if((currentQuestionIndex)===0){
	// 					setDisableBack(true);
	// 				}
	// 				setDisableNext(false);
    //                 setSubmitEnable(false);
	// 			}
	// 		}
	// 	} catch {
	// 		console.log("Error on Next question")
	// 	}
	// }
    const isSubmitEnabled = state.questions?.Questions?.every((question: Question) => question.selectedValue !== 0) || false;

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
                        <div className='row'>
                            <div className="col-lg-6 col-md-12">
                                
                                {
                                    state.questions?.Questions.map((question: Question) => (
                                        <>                                        
                                            <div className='row' style={{marginTop: "30px"}}>
                                                <div className="col-lg-12 col-md-12">
                                                    <p>{"Q"+question.QuestionNo+") " +question.Question}
                                                    </p>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <ul className="list-unstyled mb-0">
                                                    {
                                                        question.QuestionType === "Slider" &&
                                                        <div className="form-group">
                                                            <input type="range" className="form-control-range" id="formControlRange" 
                                                                min={1} max={10} step={1} 
                                                                value={question.selectedValue} 
                                                                onChange={(event) => updateSelectedValue(question.QuestionNo, parseInt(event.target.value))}
                                                            />
                                                            <p>{question.selectedValue}</p >
                                                        </div>   
                                                    }
                                                    {(question.QuestionType === "Radio" || question.QuestionType === "Checkbox") &&
                                                        question?.Option.map((options: QuestionOptions) => (
                                                            <li className="mb-3">
                                                                {
                                                                question.QuestionType === "Radio" &&
                                                                <div className={`custom-control custom-radio custom-control-inline`}>
                                                                    <input type="radio"
                                                                        id={`customRadio-${question.QuestionNo}-${options.value}`} 
                                                                        name={`customRadio-${question.QuestionNo}`} 
                                                                        className="custom-control-input" 
                                                                        onChange={()=>updateSelectedValue(question.QuestionNo, options.value)}
                                                                        checked={question.selectedValue === options.value}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor={`customRadio-${question.QuestionNo}-${options.value}`}> {options.label} </label>
                                                                </div>
                                                                }
                                                                {
                                                                question.QuestionType === "Checkbox" && 
                                                                    <div className={`custom-control custom-checkbox custom-control-inline`}>
                                                                        <input type="checkbox"
                                                                            id={`customRadio-${question.QuestionNo}-${options.value}`} 
                                                                            name={`customRadio-${question.QuestionNo}`}
                                                                            onChange={()=>updateSelectedValue(question.QuestionNo, options.value)} 
                                                                            className="custom-control-input" 
                                                                        />
                                                                        <label className="custom-control-label" htmlFor={`customRadio-${question.QuestionNo}-${options.value}`}> {options.label} </label>
                                                                    </div>
                                                                }
                                                            </li>
                                                                // <div class="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                                                //     <input type="checkbox" class="custom-control-input bg-danger" id="customCheck-3" checked="">
                                                                //     <label class="custom-control-label" for="customCheck-3">Danger</label>
                                                                // </div>
                                                        ))
                                                    }
                                                    </ul>

                                                </div>
                                            </div>
                                        </>
                                    ))
                                    
                                }
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <Lottie options={defaultOptions}
                                    height={370}
                                    
                                    isStopped={false}
                                    isPaused={false} />
                            </div>
                        </div>
                        <div className="pagination justify-content-start">
                            <button type="button" className={`btn btn-primary mt-2 btn-with-icon ${!isSubmitEnabled ? 'disabled' : ''}`} onClick={submitQuestions}>Submit</button>
                        </div>
                        {/* <nav aria-label="Page navigation example mt-4">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${disableBack? 'disabled' : '' }`} onClick={(event) => onClickNextOrBack("Previous")}>
                                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                                </li>
                                <li className={`page-item ${disableNext ? 'disabled' : '' }`}  onClick={(event) => onClickNextOrBack("Next")}>
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav> */}

                    </div>
                </div>

            </div>}{!isQuestionsEnable && <div className="col-sm-12 col-lg-12 col-md-12"><GoalRecommed customerValue={customerProfileValue} recommendation={recommendation}/></div>}
        </div>
    );
}
