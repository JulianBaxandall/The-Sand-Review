import React, { useState, useEffect } from "react"
import BeachShowTile from "./BeachShowTile"
const BeachesShow = (props) => {
    const [beach, setBeach] = useState({})

    const fetchData = async () => {
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
        fetchData()
    }, [])

    return (
       <BeachShowTile beach={beach} />
    )
}

export default BeachesShow