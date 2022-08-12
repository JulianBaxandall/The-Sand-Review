import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VotingComponent from "./VotingComponent"

const ReviewShowTile = (props) => {
    let votes = props.votes
    let userSelection = ""
    let count = 0
    if(props.votes){
        props.votes.forEach((vote)=> {
            
            if(vote.user_id === props.user_id){
                if(vote.value === 1) {
                    userSelection = "up"
                } else {
                    userSelection = "down"
                }
            }
            count = count + vote.value
        })
    }

    return (
        <div class="beach-text">
            <h5>{props.title}</h5>
            <p>Rating: {props.rating}</p>
            <p>{props.text}</p>            
            <VotingComponent review_id = {props.id} beach_id = {props.beach_id} netCount = {count} userSelection = {userSelection}/>
            <hr/>
        </div>
    )
}
export default ReviewShowTile
