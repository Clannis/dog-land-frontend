
export default function userReducer(state = {user: "" }, action) {
    switch (action.type) {
        case "LOGIN":
            localStorage.token = action.token
            return {
                user: action.user
            }
        default:
            return state
    }
}