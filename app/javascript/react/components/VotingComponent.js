import React, { useState, useEffect } from "react";
import VoteCountComponent from "./VoteCountComponent"

const VotingComponent = (props) => {
    const[count, setCount] = useState(props.netCount)
    const[upSelectedClass, setUpSelectedClass] = useState("button up")
    const[downSelectedClass, setDownSelectedClass] = useState("button down")
    const submitVote = async (event) => {
        event.preventDefault
        let voteValue = 1
        if (event.currentTarget.id === "downArrow"){
            voteValue = -1
        }
        try {
            const beach_id = props.beach_id       
            const review_id = props.review_id
            let formPayload = {"vote": {"value":voteValue, "review_id":review_id}}
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
            if((voteData.value === -1) && (voteData.changed===false)){
                setUpSelectedClass("button up")
                setDownSelectedClass("button down selected")
            }else if ((voteData.value === 1) && (voteData.changed===false)){
                setUpSelectedClass("button up selected")
                setDownSelectedClass("button down")
            }else if((voteData.value===2) && (voteData.changed===true)){
                setUpSelectedClass("button up selected")
                setDownSelectedClass("button down")
            }else if((voteData.value===-2) && (voteData.changed===true)){
                setUpSelectedClass("button up")
                setDownSelectedClass("button down selected")
            }else{
                setUpSelectedClass("button up")
                setDownSelectedClass("button down")
            }
            setCount(count + voteData.value)
        } catch(error){
            console.log("error in fetch:", error);
        }
    }



    return(
        <div id="voting">
            <form>
                <input type = "button" className = {upSelectedClass}  id = "upArrow" value="&uarr;" onClick = {submitVote}></input>&nbsp;
                <input type = "button" className = {downSelectedClass} id = "downArrow" value="&darr;" onClick = {submitVote}></input>
            </form>
            <div>
                <h5>Current Count:</h5>
                <p>{count}</p>
            </div>
        </div>
    )
}

export default VotingComponent