import React from "react";

const ReviewShowTile = (props) => {

    return (
        <div className="">
            <h5>{props.title}</h5>
            <p>Rating: {props.rating}</p>
            <p>{props.text}</p>
            <hr/>
        </div>
    )
}
export default ReviewShowTile
