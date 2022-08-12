import React, { useState, useEffect } from "react";
import NewReviewForm from "./NewReviewForm";
import ReviewShowTile from "./ReviewShowTile";

const BeachesShow = (props) => {
  const [data, setData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [errorMessages, setErrorMessages] = useState("");

  let initialRender = true;

  const submitReview = async (event, formPayload) => {
    event.preventDefault();
    try {
      let beach_id = props.match.params.id;
      const response = await fetch(`/api/v1/beaches/${beach_id}/reviews`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        setErrorMessages(errorMessage);
        throw new Error(errorMessage);
      } else {
        const reviewData = await response.json();
        setReviews([reviewData, ...reviews]);
      }
    } catch (error) {
      console.log("error in fetch:", error);
    }
  };

  const getBeach = async () => {
    try {
      const response = await fetch(`/api/v1/beaches/${props.match.params.id}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const beachData = await response.json();
      console.log(beachData);
      setData(beachData.beach.beach);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getBeach()
  }, [])

  let beachesUrl, beachesImage, allReviews, beachTile;

  if(data != null && data.hasOwnProperty("reviews")) {
    beachesUrl = <p><a href={data.url}>Website</a></p>
    beachesImage = <img src={data.image.url} />
    console.log(data)
    allReviews = data.reviews.map((review) => {
      return (
        <ReviewShowTile
          key={review.id}
          title={review.title}
          text={review.text}
          rating={review.rating}
        />
      );
    })
    
    beachTile = 
      <div>
        <p>
          {data.town}, {data.state}
        </p>
        <p>{data.description}</p>
        {beachesUrl}
        {beachesImage}<h1>{data.name}</h1>
      </div>
  } 
  
  return (
    <div>
      <div className="errorMessages">{errorMessages}</div>
      <div className="grid-x grid-padding-x grid-padding-y align-center">
        <div className="cell small-10">{beachTile}</div>
      </div>
      <div className="grid-x grid-padding-x grid-padding-y callout border-box align-center">
        <div className="cell small-5">
          <NewReviewForm submitReview={submitReview} />
        </div>
        <div className="cell small-5">
          <h4>Reviews:</h4>
          {allReviews}
        </div>
      </div>
    </div>
  );
};

export default BeachesShow;
