import React, { useState } from "react";

const NewReviewForm = (props) => {
  const [currentReview, setCurrentReview] = useState({
    title: "",
    rating: "",
    text: "",
  })

  const handleChange = (event) => {
    setCurrentReview({
      ...currentReview,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    let formPayload = { review: currentReview }
    props.submitReview(event, formPayload)
    setCurrentReview({
      title: "",
      rating: "",
      text: "",
    })
  }

  return (
  <div className="grid-x grid-padding-x grid-padding-y align-center">
    <div className="cell small-10">
    <form onSubmit={handleSubmit} class="beach-text">
        <h4>New Review Form</h4>
        <label class="beach-text">
          Review Title
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={currentReview.title}
            ></input>
        </label>
        <label class="beach-text">
          Rating
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            onChange={handleChange}
            value={currentReview.rating}
            />
        </label>
        <label class="beach-text">
          Description
          <textarea
            type="text"
            name="text"
            onChange={handleChange}
            value={currentReview.text}
            ></textarea>
        </label>
        <input type="submit" value="Submit Review" />
      </form>
  </div>
  </div>
  );
};

export default NewReviewForm
