import * as React from 'react';
import Chart from 'react-apexcharts';
import { PortFolioChart } from './charts/PortFolioChart';

export interface IPortfolioProps {
}

export function Portfolio (props: IPortfolioProps) {

  return (
    <div className="row">
        <div className="col-md-12 mb-4 mt-1">
         <div className="d-flex flex-wrap justify-content-between align-items-center">
             <h4 className="font-weight-bold">Overview</h4>
             
         </div>
      </div>
      <div className="col-lg-12 col-md-12">
         <div className="row">
            <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                     <div className="d-flex align-items-center">
                        <div className="">
                            <p className="mb-2 text-secondary">Total investment as of date</p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                               <h5 className="mb-0 font-weight-bold">$100,000</h5>
                               {/* <p className="mb-0 ml-3 text-success font-weight-bold">+3.55%</p> */}
                            </div>                            
                        </div>
                     </div>
                  </div>
               </div>   
            </div>
            <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="">
                            <p className="mb-2 text-secondary">Current portfolio</p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                               <h5 className="mb-0 font-weight-bold">$131,903.97</h5>
                               {/* <p className="mb-0 ml-3 text-success font-weight-bold">Profit: $3,393</p> */}
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>   
            </div>
            <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="">
                        <p className="mb-2 text-secondary">Total Returns as of date XIRR</p>
                           <div className="d-flex flex-wrap justify-content-start align-items-center">
                              <h5 className="mb-0 font-weight-bold">$31,903.97</h5>
                              <p className="mb-0 ml-3 text-success font-weight-bold">+5.7%</p>
                           </div>                             
                        </div>
                    </div>
                </div>
            </div>   
            </div>
            <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                     <h4 className="font-weight-bold">Overall Report</h4>
                     <div className="d-flex justify-content-between align-items-center">
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="primary" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="3" width="18" height="18" rx="2" fill="#3378FF" />
                              </svg>
                           <span>Stable</span>
                        </div>
                        <div className="ml-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#19b3b3" />
                                          </svg>
                           <span>Growth</span>
                        </div>
                     </div>
                  </div>
                   <div id="chart-apex-column-01" className="custom-chart">
                     <PortFolioChart />
                   </div>
                </div>
            </div>   
            </div>
            {/* <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title"> Candlestick Charts</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <div id="apex-candlestick-chart"></div>
                  </div>
               </div> */}
         </div>
      </div>
    </div>
  );
}
