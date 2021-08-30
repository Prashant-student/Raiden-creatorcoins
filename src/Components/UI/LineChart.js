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
        backgroundColor: "black",
        borderColor: "lightblue",
        pointBackgroundColor: "grey",
        pointBorderColor: "white",
        tension: 0.1,
      },
      {
        label: "Sales for 2021",
        data: [130, 435, 423, 135, 844, 423, 106, 265, 852, 751, 301, 651],
        backgroundColor: "black",
        borderColor: "blue",
        pointBackgroundColor: "black",
        pointBorderColor: "white",
        tension: 0.1,
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
