import * as React from 'react';
import { useState } from "react";

export interface IUserInputProps {
    onCalculate: any
}

const defaultValues = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 12,
    duration: 5,
};

export default function UserInput (props: IUserInputProps) {
    const [userInput, setUserInput] = useState(defaultValues);

    const handleSubmit = (event : any) => {
      event.preventDefault();
      props.onCalculate(userInput);
    };
  
    const handleReset = (event : any) => {
      setUserInput(defaultValues);
    };
  
    const handleChange = (input : string, value : any) => {
      setUserInput((prevInput) => {
        // [input]: value will dynamically assign input to value,
        // based on the text field where user adds data
        // +value converts string to number
        // * Example: [expected-return]: 12
        return { ...prevInput, [input]: +value };
      });
    };
  return (
    <form onSubmit={handleSubmit} className="form-cal">
      <div className="input-group-cal">
        <p>
          <label htmlFor="current-savings">Current Savings (₹)</label>
          <input
            onChange={(event) =>
              handleChange("current-savings", event.target.value)
            }
            // Two way binding to auto-fill default values
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
          <input
            onChange={(event) =>
              handleChange("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group-cal">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              handleChange("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => handleChange("duration", event.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions-cal">
      <button onClick={handleReset} type="reset" className="buttonAlt-cal">
        Reset
      </button>
      <button type="submit" className="button-cal">
        Calculate
      </button>
    </p>
    </form>
  );
}
