import React, {useState, useEffect} from "react";

const NewReviewForm =(props)=> {
    const handleChange =(event)=> {
        props.setCurrentReview({
            ...props.currentReview, [event.currentTarget.name]: event.currentTarget.value
        })
    }


    return (
        <form onSubmit = {props.submitBeach}>
            <h4>New Review Form</h4>
            <label>Review Title
                <input type="text" name="title" onChange = {handleChange}></input>
            </label>
            <label>Rating
                <input type="number" name="rating" min="0" max="5" onChange = {handleChange}></input>
            </label>
            <label>Description
                <textarea type="text" name="text" onChange = {handleChange}></textarea>
            </label>
            <input type="submit" value="Submit Review" />

        </form>

    )
}

export default NewReviewForm