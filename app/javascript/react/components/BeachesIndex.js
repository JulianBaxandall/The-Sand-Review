import React, {useState, useEffect} from "react";

const BeachesIndex = (props) => {
  const [beaches, setBeaches] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1/beaches')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const beachesData = await response.json()
      setBeaches = beachesData.beaches
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])

  //each to create every tile from each data point

  // we will want to use map to create a bunch of beach tiles

  return(
    <div>
        <h1>
          List of Beaches
        </h1>
       
    </div>
  )
}

export default BeachesIndex