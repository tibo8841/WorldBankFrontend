import { useState, useEffect } from "react";
import LineChart from "./LineChart";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const padding = css({ padding: "5%", width: "150%" });

const textFormat = css({
  fontSize: "150%",
  color: "#102e51",
  fontWeight: "bold",
});

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
    if (yearRange.length === 1) {
      return parseInt(values);
    } else {
      return (
        <LineChart
          country={data[0].countrycode}
          indicator={data[0].indicatorname}
          yearRange={yearRange}
          values={values}
        />
      );
    }
  }
  if (!data)
    return <div css={textFormat}>Fill in parameters and click search!</div>;
  else if (data.length === 0)
    return <div css={textFormat}>Fill in parameters and click search!</div>;
  else if (data.length > 0) return <div css={padding}>{createLineChart()}</div>;
}
