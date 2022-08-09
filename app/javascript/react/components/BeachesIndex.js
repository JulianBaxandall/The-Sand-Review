import React, {useState, useEffect} from "react";
import BeachComponent from "./BeachComponent"

const BeachesIndex = (props) => {
  const [beaches, setBeaches] = useState({"beaches":[]})

  const getBeaches = async () => {
    try {
      const response = await fetch('/api/v1/beaches')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const beachesData = await response.json()
      console.log(beachesData)
      setBeaches(beachesData)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    getBeaches()
  }, [])

  console.log(beaches)
  const beachesComponents = beaches["beaches"].map((beach) => {
    return <BeachComponent 
      key={beach.id}
      id={beach.id}
      id = {beach.id}
      name={beach.name}
      town={beach.town}
      state={beach.state}
      description={beach.description}
      url={beach.url}
      image={beach.image}
    />
  })

  return(
    <div>
        <h1 classNameName="text-center">
          Welcome.
        </h1>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            {beachesComponents}
          </div>
        </div>
    </div>
  )
}

export default BeachesIndex