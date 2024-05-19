import * as React from 'react';

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export interface IResultTableProps {
  data: any,
  initialInvestment: any
}

export function ResultTable(props: IResultTableProps) {
  return (
    <div className="table-responsive">
      <table id="datatable-1" className="table data-table table-striped table-bordered" >
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData: any) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearData.savingsEndOfYear -
                  props.initialInvestment -
                  yearData.yearlyContribution * yearData.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                  yearData.yearlyContribution * yearData.year
                )}
              </td>
            </tr>
          ))}
      </tbody>
        <tfoot>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
