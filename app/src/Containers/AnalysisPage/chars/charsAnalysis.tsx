import { ICharAnalysisProps } from "../dto";

import "./charAnalysis.css";

import ChartJs from "chart.js/auto";
import { useEffect } from "react";
import { monthArray } from "../../../constant";

function CharsAnalysis(props: ICharAnalysisProps) {
  const { displaySchoolPerMonth } = props;

  useEffect(() => {
    console.log(displaySchoolPerMonth);
    const gettingData = async () => {
      var barChartData = {
        labels: monthArray,
        datasets: [
          {
            label: "Dataset",
            data: [7, 1, 2, 3, 5, 4, 7, 5, 6, 4],
            borderColor: "red",
            backgroundColor: "white",
            pointStyle: "circle",
            borderWidth: 1,
            pointRadius: 10,
            pointHoverRadius: 15,
          },
        ],
      };
      const ctx: any = document.getElementById("myChart");
      const data: any = {
        type: "line",
        data: barChartData,
        options: {
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
                "Point Style: " + el.chart.data.datasets[0].pointStyle,
            },
          },
        },
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const xx = new ChartJs(ctx, data);
    };

    gettingData();
  }, [displaySchoolPerMonth]);

  return (
    <div className="char-analysis">
      <canvas id="myChart" style={{ height: "100%", width: "100%" }}></canvas>
    </div>
  );
}

export default CharsAnalysis;
