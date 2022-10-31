import React from "react"

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
            onClick: () => props.this.eraseModalWindow()
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