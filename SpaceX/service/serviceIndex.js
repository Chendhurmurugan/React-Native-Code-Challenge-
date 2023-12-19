import Axios from 'axios';

export const launchesApiCall = Axios.create({
  baseURL: "https://api.spacexdata.com/v4/",
});
export const rocketApiCall = Axios.create({
  baseURL: "https://api.spacexdata.com/v4/",
});
export const historyAPiCAll = Axios.create({
  baseURL:  "https://api.spacexdata.com/v4/",
});

