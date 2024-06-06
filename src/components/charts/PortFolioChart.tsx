
import Chart from 'react-apexcharts';
import React, { useState } from 'react';
import { Props } from "react-apexcharts";

export const PortFolioChart = () => {
   
    const chartOptions: Props = {
      
        series: [
          {
            name: "Stable",
            data: [ 3.8, 4.3, 3.9, 5.2, 5.5, 5.1]
          },
          {
            name: "Growth",
            data: [ 5.7, 7.5, 3.2, 5.7, 6.9, 6.2]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#3378FF', '#19b3b3'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'straight'
          },
          // grid: {
          //   //borderColor: '#e7e7e7',
          //   // row: {
          //   //   colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          //   //   opacity: 0.5
          //   // },
          // },
          markers: {
            size: 1
          },
          xaxis: {
            categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
            title: {
              text: 'Year'
            }
          },
          yaxis: {
            title: {
              text: 'Profit %'
            },
            min: 0,
            max: 10
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        }
      };

      const [data, setDate] = useState(chartOptions)

      return (
        <div>
          <div id="chart">
            <Chart options={data.options} series={data.series} type="line" height={350}/>
          </div>
          <div id="html-dist"></div>
        </div>
      );
  }