import React from 'react'
import { BackDrop } from './modal.elm'

const Modal = ({ selectedImage, setSelectedImage }) => {
    const handleClick = (e) => {
        setSelectedImage(null)
    }
    return (
        <BackDrop onClick={handleClick}>
            <img src={selectedImage} alt="" />
        </BackDrop>
    )
}

export default Modal
