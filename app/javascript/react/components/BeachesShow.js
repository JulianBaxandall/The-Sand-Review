import React, { useState, useEffect } from "react"
import NewReviewForm from "./NewReviewForm"

const BeachesShow = (props) => {
    const [beach, setBeach] = useState({})
    const [currentReview, setCurrentReview] = useState({
        title:"",
        rating:"",
        description:""
    })

    const submitBeach = async (formPayload) => {
        try {
            const response = await fetch("api/v1/beaches")
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



    useEffect(() => {
        getBeach()
    }, [])

    let beachesUrl
    let beachesImage

    if (beach.url !== null) {
        beachesUrl = <p><a href={beach.url}>Website</a></p>
    }
    if (beach.image !== null) {
        beachesImage = <img src={beach.image} />
    }

    return (
        <div>
            <p>{beach.name}</p>
            <p>{beach.town}, {beach.state}</p>
            <p>{beach.description}</p>
            {beachesUrl}
            {beachesImage}
            <NewReviewForm submitBeach = {submitBeach} currentReview = {currentReview} setCurrentReview = {setCurrentReview}/>
        </div>
    )
}

export default BeachesShow