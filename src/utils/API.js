const API = {
  getUser: (username) => fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json()),

  userRepos: (username) => fetch(`https://api.github.com/users/${username}/repos`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json()),

}

export default API