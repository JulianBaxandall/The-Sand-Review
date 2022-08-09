import React, { useState, useEffect } from "react"

const BeachesShow = (props) => {
    const [beach, setBeach] = useState({})

    const getBeaches = async () => {
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
        getBeaches()
    }, [])

    let beachesUrl
    let beachesImage

    if (beach.url !== null) {
        beachesUrl = <p><a href={beach.url}>Website</a></p>
    }
    
    if (beach.image !== null && beach.hasOwnProperty("image")) {
        beachesImage = <img src={beach.image.url} />
    }

    return (
        <div>
            <p>{beach.name}</p>
            <p>{beach.town}, {beach.state}</p>
            <p>{beach.description}</p>
            {beachesUrl}
            {beachesImage}
        </div>
    )
}

export default BeachesShow