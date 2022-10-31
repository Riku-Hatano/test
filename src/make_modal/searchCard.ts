import React from "react"
import react from "react"
import "../index.css"
import ModalWindow from "./modal"

const SearchCard = (i: number, id: number, setValues: react.Dispatch<react.SetStateAction<any>>) => {
    let parent = document.getElementById(`individualCard${i}`) as HTMLDivElement
    parent.classList.add("added")
    console.log(id)

    // モーダルウインドウの画像のsrcを変更する処理
    const imgsrc = `https://storage.googleapis.com/ygoprodeck.com/pics/${id}.jpg`
    const imageModalWindow = document.getElementById("imageModalWindow") as HTMLImageElement;
    imageModalWindow.src = imgsrc
    // setValues ({
    //     modalImage: imgsrc
    // })

    // モーダルウインドウの表示/非表示を切り替える処理
    const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
    parentModalWindow.style.display = "inline"
}

const eraseModalWindow = () => {
    const parentModalWindow = document.getElementById("parentModalWindow") as HTMLDivElement
    parentModalWindow.style.display = "none"
}
export default SearchCard