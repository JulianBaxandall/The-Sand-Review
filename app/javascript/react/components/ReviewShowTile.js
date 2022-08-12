import React from "react"
import VotingComponent from "./VotingComponent"

const ReviewShowTile = (props) => {
    let userSelection = ""
    let count = 0
    if(props.votes){
        props.votes.forEach((vote)=> {
            
            if(vote.user_id === props.userId){
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
        <div>
            <h5>{props.title}</h5>
            <p>Rating: {props.rating}</p>
            <p>{props.text}</p>            
            <VotingComponent reviewId={props.id} beach_id={props.beachId} netCount={count} userSelection={userSelection}/>
            <hr/>
        </div>
    )
}
export default ReviewShowTile
