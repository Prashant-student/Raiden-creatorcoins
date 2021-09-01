import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales for 2020",
        data: [120, 243, 254, 435, 544, 544, 415, 455, 485, 867, 369, 364],
        backgroundColor: "rgba(72, 255, 0, 0.3)",
        borderColor: "rgb(72, 255, 0)",
        borderCapStyle: "white",
        pointRadius: "0",
        pointHoverBackgroundColor: "white",
        tension: 0.1,
        showLine: true,
        fill: true,
      },
      {
        label: "Sales for 2021",
        data: [130, 435, 423, 135, 844, 423, 106, 265, 852, 751, 301, 651],
        backgroundColor: "rgba(224, 49, 49, 0.2)",
        borderColor: "rgb(224, 49, 49)",
        pointRadius: "0",
        pointHoverBackgroundColor: "white",
        tension: 0.1,
        // fill: true,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: { min: 100, max: 1000, stepSize: 100 },
        },
      ],
    },
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
