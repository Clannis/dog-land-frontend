import { BASE_URL } from '../config'

export default function login(user) {
    return (dispatch) => {
        fetch(`${BASE_URL}/login`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                dispatch({ type: 'LOGIN', user: response.user, token: response.token })
            } else {
                dispatch({ type: 'USER_ERRORS', errors: response.errors })
            }
        })
    }
  }