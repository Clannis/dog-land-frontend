
export default function userReducer(state = {user: "", errors: [], loggedIn: false }, action) {
    switch (action.type) {
        case "LOGIN":
            localStorage.token = action.token
            return {
                user: action.user,
                errors: [],
                loggedIn: true
            }
        case "USER_ERRORS":
            return {
                user: { 
                    ...state.user,
                    errors: [action.errors]
                }
            }
        default:
            return state
    }
}