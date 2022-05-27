/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import Results from "./Results";
import {
  getSearchResults,
  getIndicators,
  postSearchHistory,
} from "./networking";

const flexMother = css({
  display: "flex",
  height: "150%",
  backgroundColor: "#b4e4dd",
  width: "100%",
  paddingLeft: "10%",
  paddingRight: "10%",
  flexDirection: "column",
});

const flexContainer = css({
  backgroundColor: "#b4e4dd",
  display: "flex",
  justifyContent: "center",
  height: "10%",
  width: "100%",
  paddingTop: "2%",
  paddingBottom: "2%",
});

const flexChild = css({
  textAlign: "center",
  justifyContent: "center",
  paddingTop: "1%",
  paddingBottom: "1%",
  display: "flex",
  fontSize: "130%",
  alignItems: "center",
});

const flexChild2 = css({
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "1%",
  paddingBottom: "1%",
  flexGrow: "1.2",
  display: "flex",
  fontSize: "130%",
});

const flexChild3 = css({
  flex: "1",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "1%",
  paddingBottom: "1%",
  flexGrow: "1.1",
  display: "flex",
  fontSize: "130%",
});

const widerInput = css({
  width: "60%",
  height: "50%",
});

const tallerCountryInput = css({ height: "50%" });
const tallerYearInput = css({ height: "65%" });

const button = css({
  paddingLeft: "10%",
  paddingRight: "10%",
  fontSize: "150%",
  color: "#e87827",
  fontWeight: "bold",
});

const results = css({ flex: "1" });

const textFormat = css({
  color: "#e87499",
  fontWeight: "bold",
  paddingRight: "2%",
});

export default function Search(props) {
  const [country, setCountry] = useState("");
  const [startYear, setStartYear] = useState(1960);
  const [endYear, setEndYear] = useState(2015);
  const [indicator, setIndicator] = useState("");
  const [searchResults, setSearchResults] = useState(undefined);
  const indicators = getIndicators();

  // DO A USE EFFECT TO GET LIST OF INDICATORS TO SELECT AS OPTIONS
  // SQL QUERY IN BACKEND LIKE    "SELECT DISTINCT IndicatorName FROM indicators;"
  // USE EFFECT SO ONLY DOES ONCE AT START, MAYBE BETTER TO HARDCODE IT?? CHECK PERFORMANCE DIFFERENCE

  const yearList = [
    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
    1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
    1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
    1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  ];

  async function handleSearchRequest() {
    const results = await getSearchResults(country, indicator, [
      startYear,
      endYear,
    ]);
    setSearchResults(results);
    await postSearchHistory(props.login, country, indicator, [
      startYear,
      endYear,
    ]);
  }

  return (
    <div css={flexMother}>
      <div className="search-page" css={flexContainer}>
        <div css={flexChild}>
          <label htmlFor="country" css={textFormat}>
            Country
          </label>
          <input
            className="search country-field"
            css={tallerCountryInput}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>
        <div css={flexChild2}>
          <label htmlFor="indicators" css={textFormat}>
            Indicators{" "}
          </label>
          <input
            css={widerInput}
            className="search indicator-field"
            onChange={(e) => setIndicator(e.target.value)}
          ></input>
        </div>
        <div css={flexChild3}>
          <label htmlFor="year-range" css={textFormat}>
            Year Range
          </label>
          <select
            css={tallerYearInput}
            className="search start-year"
            onChange={(e) => setStartYear(e.target.value)}
          >
            {yearList.map((year) => {
              return <option value={year}>{year}</option>;
            })}
          </select>
          <select
            css={tallerYearInput}
            className="search end-year"
            onChange={(e) => setEndYear(e.target.value)}
          >
            {yearList.map((year) => {
              return <option value={year}>{year}</option>;
            })}
          </select>
        </div>
      </div>
      <div css={flexContainer}>
        <button
          className="search submit-btn"
          onClick={handleSearchRequest}
          css={button}
        >
          Search
        </button>
      </div>
      <div css={flexContainer}>
        <Results results={searchResults} css={results} />
      </div>
    </div>
  );
}
