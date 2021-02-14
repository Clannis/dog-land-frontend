import AddDogModal from "../components/AddDogModal"
import EditDogModal from "../components/EditDogModal"
import ConfirmationModal from "../components/ConfirmationModal"

const Modal = (props) => {

    const pickModal = () => {
        switch (props.modal) {
            case "addDog":
                return <AddDogModal showModal={props.showModal}/>
            case "editDog":
                return <EditDogModal showModal={props.showModal} id={props.passDown}/>
            case "confirmation":
                return <ConfirmationModal showModal={props.showModal} setConfirmation={props.passDown}/>
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