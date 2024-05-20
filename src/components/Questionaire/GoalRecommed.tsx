import * as React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

export interface IGoalRecommedProps {
}

export function GoalRecommed(props: IGoalRecommedProps) {
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
              <div className="col-sm-12 col-lg-12 col-md-12 text-center">
                <ReactSpeedometer
                  width={500}
                  height={500}
                  needleHeightRatio={0.7}
                  value={777}
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
          </div>
        </div>
      </div>

    </div>
  );
}
