
const Modal = (props) => {
    return (
        <div id="modal" class="modal">
            <div class="modal__content">
                <span onClick={() => props.showModal()}
                class="close">&times;</span>
                <p>Some text in the Modal..</p>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    )
}

export default Modal