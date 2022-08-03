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
      setBeaches(beachesData)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const beachesComponents = beaches.map((beach) => {
    return <div>
            <p>Name: {beach.name}</p>
            <p>Town: {beach.town}</p>
            <p>State: {beach.state}</p>
            <p>Description: {beach.description}</p>
            <p><a href={beach.url}>{beach.name}</a></p>
            <img src={beach.image} />
          </div>
  })

  return(
    <div>
        <h1>
          List of Beaches
        </h1>
        <ul>
          {beachesComponents}
        </ul>
    </div>
  )
}

export default BeachesIndex