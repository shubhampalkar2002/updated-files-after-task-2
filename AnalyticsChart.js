// AnalyticsChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const AnalyticsChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/chartData');
        const data = await response.json();

        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Analytics Data',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              data: data.values,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Your Analytics Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default AnalyticsChart;
