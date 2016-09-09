import axios from 'axios';

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username);
};

// Promises
// 1. we call getRepos
// 2. that returns us a promise:
//   --> when we go and fetch data from provided API and when that data is back
// 3. promise object has a method then(), which invoikes callback function whenever
// this promise get's resolved (e.g. when data is back from API)
//
// simple example:
// let promiseObj = getRepos('tylermcginnis');
// promiseObj.then(function(data) {
//   console.log(data);
// });

let helpers = {
  // we need getRepos and getUserInfo exectuted at the same time
  // we need data available from both functions before we can render component
  // and show that data in View
  getGithubInfo: function(username) {
    // axios.all allows to take more functions and wait till all
    // the promises are resolved and then it will pass an array
    // of data that we got back from all invokations
    return axios.all([
      getRepos(username),
      getUserInfo(username)
    ]).then(function(arr) {
      return {
        repos: arr[0].data,
        bio: arr[1].data
      }
    });
  }
}

export default helpers;
