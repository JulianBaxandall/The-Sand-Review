import React from "react";

const BeachComponent = (props) => {
  return (
    <div className="cell">
      <div className="card">
        <div className="card-divider">
          <h4>{props.name}</h4>
        </div>
        <div className="card-section">
          <img src={props.image} style={{ width: "auto", height: "400px" }} />
          <h4 style={{ marginTop: "20px" }}>
            {props.town}, {props.state}
          </h4>

          <p>{props.description}</p>
          <a class="button" href={`/beaches/${props.id}`}>
            View Beach
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeachComponent;
