export default function getDogBreeds() {
    return (dispatch) => {
        fetch(`https://api.thedogapi.com/v1/breeds`)
        .then(response => response.json())
        .then(response => {
            let dogs = response.map((dog) => dog.name)
            dispatch({ type: 'ADD_DOG_BREEDS', dogBreeds: dogs })
        })
    }
  }