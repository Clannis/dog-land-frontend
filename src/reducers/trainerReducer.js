
export default function trainerReducer(state = {trainer: {}, errors: [] }, action) {
    switch (action.type) {
        case "TRAINER_LOGIN":
            localStorage.token = action.token
            return {
                trainer: action.trainer,
                errors: []
            }
        case "TRAINER_ERRORS":
            return {
                user: { 
                    ...state.trainer,
                    errors: [action.errors]
                }
            }
        default:
            return state
    }
}