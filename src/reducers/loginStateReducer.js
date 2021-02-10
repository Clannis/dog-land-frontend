export default function loginStateReducer(state = { loggedIn: false}, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                loggedIn: true
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            localStorage.removeItem("trainerId")
            return {
                loggedIn: false
            }
        default:
            return state
    }
}