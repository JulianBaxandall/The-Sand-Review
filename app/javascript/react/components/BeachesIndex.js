import React, {useState, useEffect} from "react";
import BeachComponent from "./BeachComponent"

const BeachesIndex = (props) => {
  const [beachesData, setBeachesData] = useState([])

  const getBeaches = async () => {
    try {
      const response = await fetch('/api/v1/beaches')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const beachData = await response.json()
      setBeachesData(beachData)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    getBeaches()
  }, [])

  let beachesComponents
  if(beachesData.beaches != null){
    beachesComponents = beachesData.beaches.map((beach) => {
    return <BeachComponent
      currentUser={beach.current_user}
      setBeachesData={setBeachesData}
      beachesData={beachesData}
      key={beach.id}
      id={beach.id}
      name={beach.name}
      town={beach.town}
      state={beach.state}
      description={beach.description}
      url={beach.url}
      image={beach.image}
    />
  })
}

  return(
    <div>
        <h1 className="text-center welcome">
          Welcome.
        </h1>
        <div className="grid-container">
          <div className="grid-x grid-margin-x grid-margin-y">
            {beachesComponents}
          </div>
        </div>
    </div>
  )
}

export default BeachesIndex