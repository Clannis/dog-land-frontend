
export default function userReducer(state = {user: {}, errors: [] }, action) {
    let idx = action.dog ? state.user.dogs.findIndex(dog => dog.id  === action.dog.id) : null
    switch (action.type) {
        case "USER_LOGIN":
            localStorage.token = action.token
            localStorage.type = "user"
            return {
                user: action.user,
                errors: []
            }
        case "ADD_USER_DOG":
            return {
                user: {
                    ...state.user,
                    dogs: [...state.user.dogs, action.dog]
                },
                errors: []
            }
        case "EDIT_USER_DOG":
            return {
                user: {
                    ...state.user,
                    dogs: [...state.user.dogs.slice(0, idx), action.dog, ...state.user.dogs.slice(idx + 1)]
                },
                errors: []
            }
        case "DELETE_USER_DOG":
            return {
                user: {
                    ...state.user,
                    dogs: [...state.user.dogs.slice(0, idx), ...state.user.dogs.slice(idx + 1)]
                },
                errors: []
            }
        case "USER_ERRORS":
            return {
                user: { 
                    ...state.user,
                },
                errors: [action.errors]
            }
        default:
            return state
    }
}