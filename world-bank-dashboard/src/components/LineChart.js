import { Line } from "react-chartjs-2";

export default function LineChart(props) {
  const state = {
    lables: props.yearRange,
    datasets: [
      {
        label: props.country,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: props.values,
      },
    ],
  };

  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: props.indicator,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
