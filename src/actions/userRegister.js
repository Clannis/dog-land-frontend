import { BASE_URL } from '../config'

export default function userRegister(user) {
    return (dispatch) => {
        fetch(`${BASE_URL}/users`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                dispatch({ type: 'USER_LOGIN', user: response.user, token: response.token })
            } else {
                dispatch({ type: 'USER_ERRORS', errors: response.errors })
            }
        })
    }
  }