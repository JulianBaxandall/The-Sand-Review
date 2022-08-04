import React, {useState, useEffect} from "react";

const NewReviewForm =(props)=> {
    const handleChange =(event)=> {
        props.setCurrentReview({
            ...props.currentReview, [event.currentTarget.name]: event.currentTarget.value
        })
    }


    return (
        <form onSubmit = {props.submitBeach}>
            <label>Review Title
                <input type="text" name="title" onChange = {handleChange}></input>
            </label>
            <label>Rating
                <input type="number" name="rating" onChange = {handleChange}></input>
            </label>
            <label>Description
                <input type="text" name="text" onChange = {handleChange}></input>
            </label>
            <input type="submit" value="Submit Review" />

        </form>

    )
}

export default NewReviewForm