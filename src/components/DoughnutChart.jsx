import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
  // console.log('data: ', data);
  const chartRef = useRef(null);
  const chartData = {
    labels: [`${data[0]}% Male`, `${data[1]}% Female`, `${data[2]}% Unknown`],
    datasets: [
      {
        data: data,
        backgroundColor: ['#FF833D', '#0197FF', '#333C47'],
      },
    ],
  }
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      }
    }
  }
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: chartOptions,
    });

    return () => {
      myDoughnutChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
