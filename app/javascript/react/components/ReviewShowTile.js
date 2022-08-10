import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VotingComponent from "./VotingComponent"

const ReviewShowTile = (props) => {
    let votes = props.votes
    let count = 0
    // debugger
    props.votes.forEach((vote)=> {
        count = count + vote.value
    })


    return (
        <div className="">
            <h5>{props.title}</h5>
            <p>Rating: {props.rating}</p>
            <p>{props.text}</p>            
            <VotingComponent review_id = {props.id} beach_id = {props.beach_id} netCount = {count}/>
            <hr/>
        </div>
    )
}
export default ReviewShowTile
