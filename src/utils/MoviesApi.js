import { MOVIES_API_BASE_URL } from "./constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.error}`);
};

export const getAllMovies = () => {
  return fetch(`${MOVIES_API_BASE_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
};
