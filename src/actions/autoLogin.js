import { BASE_URL } from '../config'

export default function autoLogin() {
    return (dispatch) => {
        fetch(`${BASE_URL}/autologin`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({type: localStorage.type})
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                if (response.user) {
                    dispatch({ type: 'USER_LOGIN', user: response.user, token: response.token })
                    dispatch({ type: "LOGIN"})
                } else if (response.trainer) {
                    dispatch({ type: 'TRAINER_LOGIN', trainer: response.trainer, token: response.token })
                    dispatch({ type: "LOGIN"})
                }
            }
        })
    }
  }