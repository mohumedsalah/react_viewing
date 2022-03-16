import { ICharAnalysisProps } from "../dto";

import Chart from "chart.js/auto";

import { CategoryScale } from "chart.js";
import "./charAnalysis.css";

import { monthArray } from "../../../constant";
import { Line } from "react-chartjs-2";

function CharsAnalysis(props: ICharAnalysisProps) {
  const { displaySchoolPerMonth } = props;

  const option: any = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: (el: any) =>
          "Point Style: " +  el.chart.data.datasets && el.chart.data.datasets[0] && el.chart.data.datasets[0].pointStyle
            ? el.chart.data.datasets[0].pointStyle
            : "??",
      },
    },
  };
  var barChartData = {
    labels: monthArray,
    datasets: displaySchoolPerMonth.map((el) => {
      return {
        label: "Dataset",
        data: el.counts,
        borderColor: el.color,
        backgroundColor: "white",
        pointStyle: "circle",
        borderWidth: 1,
        pointRadius: 10,
        pointHoverRadius: 15,
      };
    }),
  };
  Chart.register(CategoryScale);

  return (
    <div className="char-analysis">
      <Line data={barChartData} options={option} />
    </div>
  );
}

export default CharsAnalysis;
