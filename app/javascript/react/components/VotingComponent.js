import React, { useState, useEffect } from "react";
import VoteCountComponent from "./VoteCountComponent"

const VotingComponent = (props) => {
    const[count, setCount] = useState(props.netCount)
    const submitUpVote = async (event) => {
        event.preventDefault
        try {
            const beach_id = props.beach_id       
            const review_id = props.review_id
            let formPayload = {"vote": {"value":1, "review_id":review_id}}
            const response = await fetch(`/api/v1/beaches/${beach_id}/votes`, {
                credentials: "same-origin",
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formPayload),
              })
            const voteData = await response.json()
            setCount(count + 1)
        } catch(error){
            console.log("error in fetch:", error);
        }
    }

    const submitDownVote = async (event) => {
        event.preventDefault
        try {
            const beach_id = props.beach_id       
            const review_id = props.review_id
            let formPayload = {"vote": {"value":-1, "review_id":review_id}}
            const response = await fetch(`/api/v1/beaches/${beach_id}/votes`, {
                credentials: "same-origin",
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formPayload),
              })
            const voteData = await response.json()
        } catch(error){
            console.log("error in fetch:", error);
        }
    }

    return(
        <div>
            <form>
                <input type = "button" value="up" onClick = {submitUpVote}></input>
                <input type = "button" value="down" onClick = {submitDownVote}></input>
            </form>
            <div>
                <h5>Current Count:</h5>
                <p>{count}</p>
            </div>
        </div>
    )
}

export default VotingComponent