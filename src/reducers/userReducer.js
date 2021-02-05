
export default function userReducer(state = {user: "", errors: [] }, action) {
    switch (action.type) {
        case "LOGIN":
            localStorage.token = action.token
            return {
                user: action.user,
                errors: []
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