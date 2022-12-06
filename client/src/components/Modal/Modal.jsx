import { useState, useContext } from "react"
// import { MessageContext } from "../../contexts/userMessage.context"



const Modal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <Modal show={openModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Holi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Holaaaa
            </Modal.Body>
        </Modal>
    )
}

export default Modal