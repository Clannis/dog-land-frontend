import AddDogModal from "../components/AddDogModal"

const Modal = (props) => {

    const pickModal = () => {
        switch (props.modal) {
            case "addDog":
                return <AddDogModal/>
            default:
                return null
        }
    }

    return (
        <div id="modal" className="modal">
            <div className="modal__content">
                <span onClick={() => props.showModal()}
                className="close">&times;</span>
                {pickModal()}
            </div>
        </div>
    )
}

export default Modal