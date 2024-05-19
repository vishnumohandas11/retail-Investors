import * as React from 'react';
import { CallHeader } from './CalHeader';
import UserInput from './UserInput';
import { ResultTable } from './ResultTable';
import { useState } from "react";


export interface ICalculatorProps {
}

export function Calculator(props: ICalculatorProps) {

  const [userInput, setUserInput] = useState(null);
  const handleCalculate = (userInput: any) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div className="col-lg-12">

      <CallHeader />
      <UserInput onCalculate={handleCalculate} />
      {!userInput && <p style={{ textAlign: "center" }}>No investment found</p>}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}
