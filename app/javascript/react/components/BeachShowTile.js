import React from "react"

const BeachShowTile = ({ beach }) => {
    let beachesUrl
    let beachesImage

    if (beach.url !== null) {
        beachesUrl = <p><a href={beach.url}>Website</a></p>
    }
    if (beach.image !== null) {
        beachesImage = <img src={beach.image} />
    }

    return (
        <div>
            <p>{beach.name}</p>
            <p>{beach.town}, {beach.state}</p>
            <p>{beach.description}</p>
            {beachesUrl}
            {beachesImage}
        </div>
    )
}

export default BeachShowTile