
const ConfirmationModal = (props) => {
        return (
            <>
                <h2 className="dog-form__heading">Are You Sure?</h2>
                <h3 className="dog-form__sub-heading">All data relating to this dog will be deleted forever.</h3>
                <div className="spacing__container">
                    <button className="dog-form__btn btn spacing__margin-auto" onClick={() => {
                        props.setConfirmation(true)
                        }}>Yes</button>
                    <button className="dog-form__btn btn spacing__margin-auto" onClick={() => {
                        props.setConfirmation(false)
                        }}>Cancel</button>
                </div>
            </>
        )
}

export default ConfirmationModal