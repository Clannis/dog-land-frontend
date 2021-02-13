
export default function userReducer(state = {user: {}, errors: [] }, action) {
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