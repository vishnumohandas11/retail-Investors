import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../lottie/animation-group.json';

export interface IQuestionsProps {
}

export function Questions(props: IQuestionsProps) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

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

                        <div className='row'>
                            <div className="col-lg-12 col-md-12">
                                <p>Q1) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard
                                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more
                                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p></div>
                            <div className="col-lg-6 col-md-12">
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadio6" name="customRadio-1" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio6"> Option 1 </label>
                                        </div></li>
                                    <li className="mb-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadio7" name="customRadio-1" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio7"> Option 2 </label>
                                        </div></li>
                                    <li className="mb-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadio8" name="customRadio-1" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio8"> Option 3 </label>
                                        </div></li>
                                    <li className="mb-3">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadio9" name="customRadio-1" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customRadio9"> Option 4 </label>
                                        </div></li>
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

                        <div className="pagination justify-content-end">
                            <button type="button" className="btn btn-primary mt-2 btn-with-icon"><i className="ri-heart-fill"></i>Submit</button>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
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
