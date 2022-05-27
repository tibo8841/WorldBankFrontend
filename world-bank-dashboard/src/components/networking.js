const url = "https://shrouded-plateau-99916.herokuapp.com";

export async function getSearchHistory(userID) {
  const userIDObject = { userID: userID };
  let result = await fetch(`${url}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userIDObject),
  });
  let json = await result.json();
  return json.rows;
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
  let result = await fetch(
    `${url}/search?country=${countries}&indicator=${indicators}&yearStart=${yearRange[0]}&yearEnd=${yearRange[1]}`
  );
  let json = await result.json();
  return json.rows;
}

export async function getUserLogin(username, password) {
  const loginCheck = await fetch(
    `${url}/login?username=${username}&password=${password}`
  );
  const json = await loginCheck.json();
  return json;
}

export async function registerNewUser(
  username,
  password,
  passwordConfirmation
) {
  const newUserDetails = {
    username: username,
    password: password,
    passwordConfirmation: passwordConfirmation,
  };
  await fetch(`${url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserDetails),
  });
}

export async function getIndicators() {
  const indicators = await fetch(`${url}/search/indicators`);
  const json = await indicators.json();
  return json.rows;
}
