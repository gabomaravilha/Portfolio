import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function MisturaImperfeitaChart() {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const createChart = () => {
      if (myChart) {
        myChart.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s'], // Exemplo de rótulos do eixo x
          datasets: [
            {
              label: 'Mistura Imperfeita',
              data: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0], // Exemplo de dados do eixo y (concentração)
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Tempo',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Concentração',
              },
              suggestedMin: 0,
              suggestedMax: 1,
            },
          },
        },
      });
    };

    createChart();

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default MisturaImperfeitaChart;
