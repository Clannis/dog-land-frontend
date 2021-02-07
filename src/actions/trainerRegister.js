import { BASE_URL } from '../config'

export default function trainerRegister(trainer) {
    console.log(trainer)
    return (dispatch) => {
        fetch(`${BASE_URL}/trainers`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trainer)
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                dispatch({ type: 'TRAINER_LOGIN', trainer: response.trainer, token: response.token })
            } else {
                alert(`${response.errors}`)
            }
        })
    }
  }