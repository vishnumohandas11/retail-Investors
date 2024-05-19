import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../lottie/animation-money.json';

export interface IPlaygrondProps {
}

export function Playgrond(props: IPlaygrondProps) {
    const defaultOptions = {
        loop: false,
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
                            <h4 className="card-title">Investment using virtual money</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className="col-lg-6 col-md-12">
                                <div className='row'>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="prc-box">
                                            <div className="h3 pt-4">$100,000.00
                                            </div> <span className="type">Balance Cash</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="prc-box active">
                                            <div className="h3 pt-4">$39,000.00
                                            </div> <span className="type">Total Invested</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mt-4 ml-4'>
                                    <div className="col-lg-12 col-md-12">
                                        <p>
                                            Select investment plans and invest your vertual money.
                                        </p>
                                    </div>

                                    <button type="button" className="btn mb-1 mr-3 bg-primary-light">
                                        Stock Market
                                    </button>

                                    <button type="button" className="btn mb-1 mr-3 bg-primary-light">
                                        Cryptocurrency
                                    </button>

                                    <button type="button" className="btn mb-1 mr-3 bg-primary-light">
                                        FD
                                    </button>

                                    <button type="button" className="btn mb-1 mr-3 bg-primary-light">
                                        RD
                                    </button>

                                </div>


                            </div>

                            <div className="col-lg-4 col-md-8">
                                <Lottie options={defaultOptions}
                                    height={250}
                                    width={250}
                                    isStopped={false}
                                    isPaused={false} />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}
