import axios from 'axios';

function getRepos(username) {
  // change to string literals
  // return axios.get('https://api.github.com/users/' + username + '/repos');
  return axios.get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
};

// Promises
// 1. we call getRepos
// 2. that returns us a promise:
//   --> when we go and fetch data from provided API and when that data is back
// 3. promise object has a method then(), which invokes callback function whenever
// this promise get's resolved (e.g. when data is back from API)
//
// simple example:
// let promiseObj = getRepos('tylermcginnis');
// promiseObj.then(function(data) {
//   console.log(data);
// });

// const creates read only reference to a variable
const helpers = {
  // we need getRepos and getUserInfo exectuted at the same time
  // we need data available from both functions before we can render component
  // and show that data in View
  getGithubInfo(username) {
    // axios.all allows to take more functions and wait till all
    // the promises are resolved and then it will pass an array
    // of data that we got back from all invokations
    return axios.all([
      getRepos(username),
      getUserInfo(username)
    ]).then(arr => ({repos: arr[0].data, bio: arr[1].data }));
  }
}

export default helpers;

// instead of exporting helpers object, it is possible to export the function itself
/* =============================================================================== */
// export default function getGithubInfo(username){
//   return axios.all([getRepos(username), getUserInfo(username)])
//     .then((arr) => ({repos: arr[0].data, bio: arr[1].data}))
// }

// and on import (where required)
/* =============================================================================== */
// import getGithubInfo from '../../helpers'

// remember to change refence in such case
// helpers.getGithubInfo() --> getGithubInfo()
