const url = "https://shrouded-plateau-99916.herokuapp.com/";

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

export async function getUserLogin(username, password) {
  const userLogin = { username: username, password: password };
  await fetch(`${url}/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLogin),
  });
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
