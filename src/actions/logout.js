export default function logout() {
    return (dispatch) => {dispatch({ type: 'LOGOUT' })}
}