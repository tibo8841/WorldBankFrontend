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
      values.push(result.value);
      yearRange.push(result.year);
    }
    return (
      <LineChart
        country={data[0].countrycode}
        indicator={data[0].indicatorname}
        yearRange={yearRange}
        values={values}
      />
    );
  }
  if (!data) return <div>No data</div>;
  else if (data.length === 0) return <div>No data</div>;
  else if (data.length > 0) return <div>{createLineChart()}</div>;
}
