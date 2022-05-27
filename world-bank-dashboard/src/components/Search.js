import { useState, useEffect } from "react";
import Results from "./Results";
import { getSearchResults, getIndicators } from "./networking";

export default function Search() {
  const [country, setCountry] = useState("");
  const [startYear, setStartYear] = useState(1960);
  const [endYear, setEndYear] = useState(2015);
  const [indicator, setIndicator] = useState("");
  const [searchResults, setSearchResults] = useState(undefined);
  // const indicators = getIndicators();

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
  }

  return (
    <div className="search-page">
      <label htmlFor="country">Country</label>
      <input
        className="search country-field"
        onChange={(e) => setCountry(e.target.value)}
      ></input>
      <label htmlFor="indicators">Indicators</label>
      <input
        className="search indicator-field"
        onChange={(e) => setIndicator(e.target.value)}
      ></input>
      <label htmlFor="year-range">Year Range</label>
      <select
        className="search start-year"
        onChange={(e) => setStartYear(e.target.value)}
      >
        {yearList.map((year) => {
          return <option value={year}>{year}</option>;
        })}
      </select>
      <select
        className="search end-year"
        onChange={(e) => setEndYear(e.target.value)}
      >
        {yearList.map((year) => {
          return <option value={year}>{year}</option>;
        })}
      </select>
      <button className="search submit-btn" onClick={handleSearchRequest}>
        Search!
      </button>
      <Results results={searchResults} />
    </div>
  );
}
