
export default function trainerReducer(state = {trainer: {}, errors: [] }, action) {
    switch (action.type) {
        case "TRAINER_LOGIN":
            localStorage.token = action.token
            localStorage.type = "trainer"
            return {
                trainer: action.trainer,
                errors: []
            }
        case "TRAINER_ERRORS":
            return {
                trainer: { 
                    ...state.trainer
                },
                errors: [action.errors]
            }
        default:
            return state
    }
}