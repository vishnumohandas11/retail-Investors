import * as React from 'react';

export interface IPortfolioProps {
}

export function Portfolio (props: IPortfolioProps) {
  return (
    <div className="row">
        <div className="col-md-12 mb-4 mt-1">
         <div className="d-flex flex-wrap justify-content-between align-items-center">
             <h4 className="font-weight-bold">Overview</h4>
             <div className="form-group mb-0 vanila-daterangepicker d-flex flex-row">
                  <div className="date-icon-set">
                     <input type="text" name="start" className="form-control" placeholder="From Date"/>
                     <span className="search-link">
                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                     </span>
                  </div>                  
                     <span className="flex-grow-0">
                     <span className="btn">To</span>
                  </span>
                  <div className="date-icon-set">
                     <input type="text" name="end" className="form-control" placeholder="To Date"/>
                     <span className="search-link">
                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                     </span>
                  </div>                  
            </div>
         </div>
      </div>
      <div className="col-lg-12 col-md-12">
         <div className="row">
            <div className="col-md-4">
               <div className="card">
                  <div className="card-body">
                     <div className="d-flex align-items-center">
                        <div className="">
                            <p className="mb-2 text-secondary">Total Profit</p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                               <h5 className="mb-0 font-weight-bold">$95,595</h5>
                               <p className="mb-0 ml-3 text-success font-weight-bold">+3.55%</p>
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
                            <p className="mb-2 text-secondary">Total Investment</p>
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                               <h5 className="mb-0 font-weight-bold">$92,202</h5>
                               <p className="mb-0 ml-3 text-success font-weight-bold">Profit: $3,393</p>
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
                        <p className="mb-2 text-secondary">Mutual Fund</p>
                           <div className="d-flex flex-wrap justify-content-start align-items-center">
                              <h5 className="mb-0 font-weight-bold">$50,984</h5>
                              <p className="mb-0 ml-3 text-danger font-weight-bold">-3.98%</p>
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
                           <span>Profit</span>
                        </div>
                        <div className="ml-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#19b3b3" />
                                          </svg>
                           <span>Invested</span>
                        </div>
                     </div>
                  </div>
                   <div id="chart-apex-column-01" className="custom-chart"></div>
                </div>
            </div>   
            </div>
            <div className="card">
                  <div className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title"> Candlestick Charts</h4>
                     </div>
                  </div>
                  <div className="card-body">
                     <div id="apex-candlestick-chart"></div>
                  </div>
               </div>
         </div>
      </div>
    </div>
  );
}
