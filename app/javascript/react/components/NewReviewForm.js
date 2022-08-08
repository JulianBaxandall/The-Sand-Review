import React, { useState }  from "react";

// the only prop this should receive is addNewReview
const NewReviewForm = () => {
    const [currentReview, setCurrentReview] = useState({
        title: "",
        rating: "",
        text: "",
        id: null
    })

    const submitBeach = () => {
        setCurrentReview(...currentReview, setCurrentReview)
    }

    const handleChange = (event) => {
        setCurrentReview({
            ...currentReview, [event.currentTarget.name]: event.currentTarget.value
        })
    }

    return (
        <form onSubmit={submitBeach}>
            <h4>New Review Form</h4>
            <label>Review Title
                <input type="text" name="title" value={currentReview.title} onChange={handleChange}></input>
            </label>
            <label>Rating
                <input type="number" name="rating" value={currentReview.rating} min="0" max="5" onChange={handleChange}></input>
            </label>
            <label>Description
                <textarea type="text" name="text" value={currentReview.text} onChange={handleChange}></textarea>
            </label>
            <input type="submit" value="Submit Review" />

        </form>
    )
}

export default NewReviewForm