export const RECEIVE_USERS = 'RECEIVE_USERS'

const API_CANDIDATATE = 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates'

export const receiveUserList = (status, json) => ({
  type: RECEIVE_USERS,
  users: json,
  status,
})

export const fetchUserListStatus = (status) => dispatch => {
  return fetch(`${API_CANDIDATATE}?status=${status}`)
    .then(response => response.json())
    .then(json => dispatch(receiveUserList(status, json)))
}


