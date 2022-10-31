import React from "react"
import SearchCard from "./searchCard"

const Card = (props: any) => {
    // console.log(props.characters)
    // console.log(props.loading)
    // console.log(props.setValues)
    console.log(props.characters.length)
    const cardBox: any = []

    for (let i = 0 ; i < props.characters.length ; i++) {
        const monsterItem = React.createElement(
            "div",
            {
                className: "monsterItem"
            },
            props.characters[i].name
        )
        const flavorItem = React.createElement(
            "div",
            {
                className: "flavorItem"
            },
            props.characters[i].desc
        )
        // monsterItemとflavorItemをindividualCardを親要素にしてにまとめて、一枚のカードのようにする。
        const individualCard = React.createElement(
            "div",
            {
                key: i,
                id: `individualCard${i}`,
                className: "parentItem",
                onClick: () => SearchCard(i, props.characters[i].id, props.setValues)
            }, 
            monsterItem, flavorItem)

            cardBox.push(individualCard)
        }

        //individualCardがたくさん入ったchildBoxを出力する。
        const cardList = React.createElement(
            "div",
            {
                className: "cardList", 
                id: "cardList"
            },
            cardBox 
        )
        
    return (
        <>
        {cardList}
        </>
    )
}

export default Card