
const ConfirmationModal = (props) => {
        return (
            <>
                <h2>Are You Sure?</h2>
                <button className="btn" onClick={() => {
                    props.setConfirmation(true)
                    }}>Yes</button>
                <button className="btn" onClick={() => {
                    props.setConfirmation(false)
                    }}>Cancel</button>
            </>
        )
}

export default ConfirmationModal