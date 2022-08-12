import React from "react"

const BeachComponent = (props) => {
  return (
    <div className="cell">
      <div class="card rounded beach-tile">
        <div className="card-divider">
          <h4 class="beach-text">{props.name}</h4>
        </div>
        <div className="card-section">
          <img src={props.image.thumb.url} className="beach-image" />
          <h4 class="location-header beach-text">{props.town}, {props.state}</h4>
          <p class="beach-text">{props.description}</p>
          <a className="button" href={`/beaches/${props.id}`}>
            View Beach
          </a>
        </div>
      </div>
    </div>
  )
}

export default BeachComponent;