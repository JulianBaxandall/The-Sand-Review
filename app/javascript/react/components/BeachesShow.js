import React, { useState, useEffect } from "react"
import NewReviewForm from "./NewReviewForm"
import ReviewShowTile from "./ReviewShowTile"

const BeachesShow = (props) => {
    const [beach, setBeach] = useState({})
    const [reviews, setReviews] = useState([])

    const addReview = async (formFieldReviewData) => {
        //formFieldReviewData.preventDefault()
        //let formPayload = { review: currentReview }
        try {
            // const beach_id = props.match.params.id
            const response = await fetch(`/api/v1/beaches/${beach.id}/reviews`, {
                credentials: "same-origin",
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formPayload)
            })
            debugger
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                throw new Error(errorMessage)
            } else {
                // From Nick: this might work, but make sure that currentReview is actually a review object
                debugger
                // setReviews ([...reviews, currentReview]) 
                //setCurrentReview({title: "", rating: "", text: "", id: ""})

            }
        } catch (error) {
            console.log("error in fetch:", error)
        }
    }
    const getBeach = async () => {
        try {
            const response = await fetch(`/api/v1/beaches/${props.match.params.id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw (error)
            }
            const beachData = await response.json()
            setBeach(beachData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const getReviews = async () => {
        try {
            let beach_id = props.match.params.id
            const response = await fetch(`/api/v1/beaches/${beach_id}/reviews`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw (error)
            }
            const reviewsData = await response.json()
            setReviews(reviewsData)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getBeach()
        // eventually remove getReviews, add a serializer so that `getBeach` gets those reviews for you
        getReviews()
    }, [])

    let beachesUrl
    let beachesImage

    if (beach.url !== null) {
        beachesUrl = <p><a href={beach.url}>Website</a></p>
    }
    if (beach.image !== null) {
        beachesImage = <img src={beach.image} />
    }

    // make this not start with capital
    const AllOurReviews = reviews.map((review) => {
        return (
            <ReviewShowTile
                key={review.id}
                title={review.title}
                text={review.text}
                rating={review.rating}
            />
        )
    })

    return (
        <div>
            <div className="grid-x grid-padding-x grid-padding-y align-center">
                <div className="cell small-10">
                    <h1>{beach.name}</h1>
                    <p>{beach.town}, {beach.state}</p>
                    <p>{beach.description}</p>
                    {beachesUrl}
                    {beachesImage}
                </div>
            </div>
                <div className="grid-x grid-padding-x grid-padding-y callout border-box align-center">
                    <div className="cell small-5">
                        <NewReviewForm addReview={addReview} />
                    </div>
                    <div className="cell small-5">
                        <h4>Reviews:</h4>
                        {AllOurReviews}
                    </div>
                </div>
          
        </div>
    )
}

export default BeachesShow