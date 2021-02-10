
export default function userReducer(state = {user: {}, errors: [] }, action) {
    switch (action.type) {
        case "USER_LOGIN":
            localStorage.token = action.token
            localStorage.userId = action.user.id
            return {
                user: action.user,
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