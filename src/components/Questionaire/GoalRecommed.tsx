import * as React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

export interface IGoalRecommedProps {
  customerValue: number;
  recommendation:{
    theme: string;
    expectedReturn: string;
    meaning: string;
    horizon: string
  }
}

export function GoalRecommed({customerValue, recommendation}: IGoalRecommedProps) {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-12 col-md-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Goal Recommendation</h4>
            </div>
          </div>
          <div className="card-body">
            <div className='row'>
              <div className="col-sm-12 col-lg-6 col-md-12 text-center">
                <div className="card mb-2 recommendation-card">
                    <div className="row no-gutters">
                      {/* <div className="col-md-6 col-lg-4">
                          <img src="../assets/images/page-img/08.jpg" className="card-img" alt="#" />
                      </div> */}
                      <div className="col-md-12 col-lg-12">
                          <div className="card-body">
                            <div className="recommended-info">
                              <div className="recommended-label">Theme</div>
                              <div className="recommended-value">{recommendation.theme}</div>
                            </div>
                            <div className="recommended-info">
                              <div className="recommended-label">Expected return</div>
                              <div className="recommended-value">{recommendation.expectedReturn}</div>
                            </div>
                            <div className="recommended-info">
                              <div className="recommended-label">What it means for you?</div>
                              <div className="recommended-value">{recommendation.meaning}</div>
                            </div>
                            <div className="recommended-info">
                              <div className="recommended-label">Horizon</div>
                              <div className="recommended-value">{recommendation.horizon}</div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 text-center">
                <ReactSpeedometer
                  width={500}
                  needleHeightRatio={0.7}
                  value={customerValue}
                  minValue={0}
                  maxValue={5}
                  currentValueText="Risk Level"
                  customSegmentLabels={[
                    {
                      text: "Very Low",
                      color: "#555",
                    },
                    {
                      text: "Low",
                      color: "#555",
                    },
                    {
                      text: "Medium",
                      color: "#555",
                      fontSize: "19px",
                    },
                    {
                      text: "High",
                      color: "#555",
                    },
                    {
                      text: "Very High",
                      color: "#555",
                    },
                  ]}
                />

              </div>
            </div>

            {/** investment suggestion */}

            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive pricing pt-2">
                      <table id="my-table" className="table">
                        <thead>
                          <tr>
                            <th className="text-center prc-wrap"></th>
                            <th className="text-center prc-wrap">
                              <div className="prc-box">
                                <div className="h3 pt-4"><small>Stable</small>
                                </div>
                              </div>
                            </th>
                            <th className="text-center prc-wrap">
                              <div className="prc-box ">
                                <div className="h3 pt-4"><small>Stable Plus</small>
                                </div> 
                              </div>
                            </th>
                            <th className="text-center prc-wrap">
                              <div className="prc-box active">
                                <div className="h3 pt-4"><small>Balanced</small>
                                </div> 
                                <span className="type">Recommend</span>
                              </div>
                            </th>
                            <th className="text-center prc-wrap">
                              <div className="prc-box">
                                <div className="h3 pt-4"><small>Growth</small>
                                </div> 
                              </div>
                            </th>
                            <th className="text-center prc-wrap">
                              <div className="prc-box">
                                <div className="h3 pt-4"><small>High Growth</small>
                                </div> 
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="text-center" scope="row">Nordic Large Cap</th>
                            <td className="text-center child-cell">
                              {/* <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg> */}
                              <h6>Upto 20%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 40%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 60%</h6>
                            </td>
                            <td className="text-center child-cell bold">
                              <h6>Upto 80%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 100%</h6>
                            </td>
                           
                          </tr>
                          <tr>
                            <th className="text-center" scope="row">Nordic Mid Cap</th>
                            <td className="text-center child-cell">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </td>
                            <td className="text-center child-cell active">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </td>
                            <td className="text-center child-cell">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Upto 25%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 40%</h6>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-center" scope="row">Nordic Small Cap</th>
                            <td className="text-center child-cell">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </td>
                            <td className="text-center child-cell active">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </td>
                            <td className="text-center child-cell">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Upto 15%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 30%</h6>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-center" scope="row">International Equity</th>
                            <td className="text-center child-cell">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Upto 10%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 15%</h6>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Upto 15%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 30%</h6>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-center" scope="row">Gold Funds</th>
                            <td className="text-center child-cell">
                              <h6>Upto 20%</h6>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Upto 25%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 30%</h6>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Upto 40%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Upto 40%</h6>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-center" scope="row">Debt Funds</th>
                            <td className="text-center child-cell">
                              <h6>Atleast 70%</h6>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Atleast 50%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Atleast 25%</h6>
                            </td>
                            <td className="text-center child-cell active">
                              <h6>Atleast 15%</h6>
                            </td>
                            <td className="text-center child-cell">
                              <h6>Atleast 15%</h6>
                            </td>
                          </tr>                      
                           <tr>
                            <td className="text-center">
                              
                            </td>
                            <td className="text-center"> <a href="#" className="btn btn-primary mt-3">Select</a>
                            </td>
                            <td className="text-center"> <a href="#" className="btn btn-primary mt-3">Select</a>
                            </td>
                            <td className="text-center"> <a href="#" className="btn btn-primary mt-3">Select</a>
                            </td>
                            <td className="text-center"> <a href="#" className="btn btn-primary mt-3">Select</a>
                            </td>
                            <td className="text-center"> <a href="#" className="btn btn-primary mt-3">Select</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mb-5">
                    <a href="/playground#" className="btn btn-primary mt-3">Compare previous performance</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
