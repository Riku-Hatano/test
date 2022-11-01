import React from "react"
import EraseModalWindow from "./eraseModal"

const ModalWindow = (props: any) => {
    const imageModalWindow = React.createElement(
        "img",
        {
            src: props.src,
            className: "image-modal-window",
            id: "imageModalWindow"
        },
        null
    )
    const parentModalWindow = React.createElement(
        "div",
        {
            className: "parent-modal-window",
            id: "parentModalWindow",
            onClick: () => EraseModalWindow()
        },
        imageModalWindow
    )
    return (
        <>
        {parentModalWindow}
        </>
    )
}

export default ModalWindow