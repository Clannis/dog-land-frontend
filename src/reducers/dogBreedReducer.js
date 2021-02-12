export default function dogBreedReducer(state = { dogBreeds: []}, action) {
    switch (action.type) {
        case "ADD_DOG_BREEDS":
            return {
                dogBreeds: action.dogBreeds
            }
        
        default:
            return state
    }
}