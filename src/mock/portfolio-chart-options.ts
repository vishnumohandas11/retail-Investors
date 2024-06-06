import { Props } from "react-apexcharts";
export const portfolioChartOptions: Props = {
    type:'area',
    series: [{
    name: 'Incomes',
    data: [90, 105, 72, 90, 65, 109, 130]
  }, {
    name: 'Expenses',
    data: [115, 93, 75, 102, 144, 52, 71]
  }],
  colors: ['#1f1f7a', '#2e2eb8'],
    chart: {
    height: 265,
    fontFamily: 'DM Sans',
    toolbar:{
      show: false,
    },
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "vertical",
      shadeIntensity: 0.5,
      // gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: false,
      opacityFrom: .8,
      opacityTo: .2,
      stops: [0, 50, 100],
      colorStops: []
    }
  },        
  grid: {
    xaxis: {
        lines: {
            show: false
        }
    },
    yaxis: {
        lines: {
            show: false
        }
    }
  },
  yaxis: {
    labels: {
    offsetY:0,
    minWidth: 20,
    maxWidth: 20
    },
  },
  xaxis: {
    type: 'datetime',
    labels: {
      minHeight: 20,
      maxHeight: 20
    },
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };