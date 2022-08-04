import React, { useState, useEffect } from "react"
import NewReviewForm from "./NewReviewForm"
import ReviewShowTile from "./ReviewShowTile"

const BeachesShow = (props) => {
    const [beach, setBeach] = useState({})
    const [reviews, setReviews] = useState([])
    const [currentReview, setCurrentReview] = useState({
        title:"",
        rating:"",
        description:""
    })

    const submitBeach = async (event) => {
        event.preventDefault()
        let formPayload = {review: currentReview}
        try {
            let beach_id = props.match.params.id
            const response = await fetch(`/api/v1/beaches/${beach_id}/reviews` , {
                credentials: "same-origin",
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formPayload)
              })
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                throw new Error(errorMessage)
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

    const getReviews = async() => {
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
        } catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getBeach()
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
        
    const AllOurReviews = reviews.map(review=>{
        return(
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
            <p>{beach.name}</p>
            <p>{beach.town}, {beach.state}</p>
            <p>{beach.description}</p>
            {beachesUrl}
            {beachesImage}
            <h4>Reviews:</h4>
                {AllOurReviews}
            <NewReviewForm submitBeach = {submitBeach} currentReview = {currentReview} setCurrentReview = {setCurrentReview}/>
        </div>
    )
}

export default BeachesShow