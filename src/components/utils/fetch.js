import { endpoint } from './api.js';

// async function fetchData(url) {
//   const dataResponse = await fetch(url);
//   const jsonData = await dataResponse.json();
//   return jsonData;
// }

// async function getData(apiEndpoint) {
//   const data = await fetchData(apiEndpoint);
//   //   const filteredData = filterData(data);
//   //   return { filteredData };
//   return data;
// }

// const receivedData = getData(endpoint);
// console.log(receivedData);

async function fetch(url) {
  const dataResponse = await fetch(url);
  const jsonData = await dataResponse.json();
  return jsonData;
}
fetch(endpoint);
