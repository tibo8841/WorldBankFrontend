import LineChart from "./LineChart";

export default function Results(props) {
  function createLineChart() {
    return props.request.map((result) => (
      <LineChart
        key={result.name}
        country={result.country}
        indicator={result.indicator}
        yearRange={result.yearRange}
      />
    ));
  }
  return <div>{createLineChart()}</div>;
}
