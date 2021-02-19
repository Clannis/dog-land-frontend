import { BASE_URL } from '../config'

export default function addDog(user, dog) {
    console.log(dog)
    return (dispatch) => {
        fetch(`${BASE_URL}/users/${user.id}/dogs`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Authorization': localStorage.token
            },
            body: dog
        })
        .then(response => response.json())
        .then(response => {
            if (!response.errors) {
                dispatch({ type: 'ADD_USER_DOG', dog: response.dog })
            } else {
                dispatch({ type: 'USER_ERRORS', errors: response.errors })
            }
        })
    }
  }