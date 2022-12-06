import { createContext, useState } from 'react'

const ShowModalContext = createContext()

function ModalProviderWrapper(props) {

    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    const displayModal = e => {
        if (e.target.value === 'log-in') {
            openModal()
        } else if (e.target.value === 'sign-up') {
            openModal()
        }
    }



    return (
        <ShowModalContext.Provider value={{ showModal, setShowModal, displayModal }}>
            {props.children}
        </ShowModalContext.Provider>
    )
}

export { ShowModalContext, ModalProviderWrapper }