import { useState, useEffect } from "react";
import LineChart from "./LineChart";

export default function Results(props) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setData(props.results);
  }, [props.results]);

  function createLineChart() {
    const values = [];
    const yearRange = [];
    for (const result of data) {
      values.push(result.Value);
      yearRange.push(result.Year);
    }
    return (
      <LineChart
        country={data[0].country}
        indicator={data[0].indicator}
        yearRange={yearRange}
        values={values}
      />
    );
  }
  if (data) return <div>{createLineChart()}</div>;
  if (!data) return <div>No data</div>;
}
