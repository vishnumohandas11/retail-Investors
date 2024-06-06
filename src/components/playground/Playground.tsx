import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../lottie/animation-money.json';
import Chart from 'react-apexcharts';
import { IUserProfileProps } from '../user/UserProfile';

export interface IPlaygrondProps {
    goBack: ()=> void
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
    const [chartData, setChartData] = React.useState({
        options: {
          chart: {
            id: 'apexchart-example',
            stacked: true
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          dataLabels: {
            formatter: (val: number) => {
              return val / 1000 + 'K'
            }
          },
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          xaxis: {
            categories: [
              'Stable',
              'Stable Plus',
              'Balanced',
              'Growth',
              'High Growth'
            ]
          },
          fill: {
            opacity: 1
          },
          colors: [ '#008FFB', '#00E396'],
          yaxis: {
            labels: {
              formatter: (val: number) => {
                return val / 1000 + 'K'
              }
            }
          },
          legend: {
            show: true,
            position: 'right',
            horizontalAlign: 'right'
          }
        },
        series:[
            {
              name: 'Investment',
              group: 'budget',
              data: [10000, 10000, 10000, 10000, 10000]
            },
            {
              name: 'Return',
              group: 'budget',
              data: [7000, 8320, 9520, 10800, 13500]
            }
          ]
      }
    );

    const [selectedYear, setSelectedYear] = React.useState('5 Year');

    const updateYear = (year: string) => {
        setSelectedYear(year);
        switch (year) {
            case '6 Months':
                setChartData({
                    ...chartData,
                    series:[
                        {
                            name: 'Investment',
                            group: 'budget',
                            data: [10000, 10000, 10000, 10000, 10000]
                        },
                        {
                        name: 'Profit',
                        group: 'budget',
                        data: [2000, 3320, 4520, 5800, 8500]
                        }
                    ]
                });
                break;
            case '1 Year':
                setChartData({
                    ...chartData,
                    series:[
                        {
                            name: 'Investment',
                            group: 'budget',
                            data: [10000, 10000, 10000, 10000, 10000]
                        },
                        {
                            name: 'Profit',
                            group: 'budget',
                            data: [3000, 4320, 5520, 6800, 9500]
                        }
                    ]
                });
                break;
            case '3 Year':
                setChartData({
                    ...chartData,
                    series:[
                        {
                            name: 'Investment',
                            group: 'budget',
                            data: [10000, 10000, 10000, 10000, 10000]
                        },
                        {
                            name: 'Profit',
                            group: 'budget',
                            data: [5000, 6320, 7520, 8800, 11500]
                        }
                    ]
                });
                break;
            case '5 Year':
                setChartData({
                    ...chartData,
                    series:[
                        {
                            name: 'Investment',
                            group: 'budget',
                            data: [10000, 10000, 10000, 10000, 10000]
                        },
                        {
                            name: 'Profit',
                            group: 'budget',
                            data: [7000, 8320, 9520, 10800, 13500]
                        }
                    ]
                });
                break;
        
            default:
                break;
        }
    }

    return (
        <div className="row">
            <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Performance of Themes</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className="col-lg-6 col-md-12">
                                <div className='row'>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="prc-box">
                                            <div className="h3 pt-4">$10,000.00
                                            </div> <span className="type">Invested amount</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="prc-box active">
                                            <div className="h3 pt-4">$23,500.00
                                            </div> <span className="type">Current<br />(over 5 Yrs.)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mt-4 ml-4'>
                                    {/* <div className="col-lg-12 col-md-12">
                                        <p>
                                            Select investment plans and invest your vertual money.
                                        </p>
                                    </div> */}

                                    {/* <button type="button" className="btn mb-1 mr-3 bg-primary-light">
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
                                    </button> */}

                                </div>


                            </div>

                            <div className="col-lg-4 col-md-8">
                                <Lottie options={defaultOptions}
                                    // height={250}
                                    width={250}
                                    isStopped={false}
                                    isPaused={true} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-sm-12 col-lg-12 col-md-12">
                                <div className="year-selector-wrapper">
                                    <button type="button" 
                                        className={`btn ${selectedYear === '6 Months' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill mt-2`}
                                        onClick={() => updateYear('6 Months')}
                                    >
                                        6 Months
                                    </button>
                                    <button type="button" 
                                        className={`btn ${selectedYear === '1 Year' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill mt-2`}
                                        onClick={() => updateYear('1 Year')}
                                    >
                                        1 Year
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn ${selectedYear === '3 Year' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill mt-2`}
                                        onClick={() => updateYear('3 Year')}
                                    >
                                        3 Year
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn ${selectedYear === '5 Year' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill mt-2`}
                                        onClick={() => updateYear('5 Year')}
                                    >
                                        5 Year
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-12 col-md-12">
                                <div className="d-flex justify-content-center mt-5">
                                    {/* @ts-expect-error */}
                                    <Chart options={chartData.options} series={chartData.series} type="bar" width={800} height={320} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-12 col-md-12">
                                <div className="d-flex justify-content-left mt-5">
                                    <div className="btn btn-primary mt-3" onClick={()=>{props.goBack()}}>Go Back</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
