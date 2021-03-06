import { BASE_URL } from '../config'

export default function deleteDog(user, dog) {
    return (dispatch) => {
        fetch(`${BASE_URL}/users/${user.id}/dogs/${dog.id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({dog})
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                dispatch({ type: 'DELETE_USER_DOG', dog: response.dog })
            } else {
                dispatch({ type: 'USER_ERRORS', errors: response.errors })
            }
        })
    }
  }