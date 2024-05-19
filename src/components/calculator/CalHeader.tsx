import * as React from 'react';

export interface ICallHeaderProps {
}

export function CallHeader (props: ICallHeaderProps) {
  return (
    <header className="header">
    <img src="../assets/images/investment-calculator-logo.png" alt="logo" />
    <h1>Investment Calculator</h1>
  </header>
  );
}
