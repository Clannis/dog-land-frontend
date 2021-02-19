import { BASE_URL } from '../config'

export default function editDog(user, dog, id) {
    return (dispatch) => {
        fetch(`${BASE_URL}/users/${user.id}/dogs/${id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Authorization': localStorage.token
            },
            body: dog
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                dispatch({ type: 'EDIT_USER_DOG', dog: response.dog })
            } else {
                dispatch({ type: 'USER_ERRORS', errors: response.errors })
            }
        })
    }
  }