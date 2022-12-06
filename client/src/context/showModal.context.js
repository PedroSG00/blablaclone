import { createContext, useState } from 'react'

const ShowModalContext = createContext()

function ModalProviderWrapper(props) {

    const [showModal, setShowModal] = useState(false)


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)




    return (
        <ShowModalContext.Provider value={{ showModal, setShowModal }}>
            {props.children}
        </ShowModalContext.Provider>
    )
}

export { ShowModalContext, ModalProviderWrapper }