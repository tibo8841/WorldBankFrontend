const url = "http://localhost/8080";

export async function getSearchHistory(userID) {
  const userIDObject = { userID: userID };
  await fetch(`${url}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userIDObject),
  });
}

export async function postSearchHistory(
  userID,
  countries,
  indicators,
  yearRange
) {
  const searchHistory = {
    userID: userID,
    countries: countries,
    indicators: indicators,
    yearRange: yearRange,
  };
  await fetch(`${url}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchHistory),
  });
}

export async function getSearchResults(countries, indicators, yearRange) {
  await fetch(
    `${url}/search?country=${countries}&indicator=${indicators}&yearStart=${yearRange[0]}&yearEnd=${yearRange[1]}`
  );
}
