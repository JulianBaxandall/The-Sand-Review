import React from "react";

const BeachComponent = (props) => {
  const deletePost = async () => {
    try {
      const response = await fetch(`/api/v1/beaches/${props.id}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      props.setBeachesData({
        beaches: props.beachesData.beaches.filter(
          (beach) => beach.id !== props.id
        ),
      })
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  let adminButtons
  if (props.currentUser !== null && props.currentUser.role === "admin") {
      adminButtons = (
        <div>
          <a className="button alert" onClick={deletePost}>Delete</a>
          <a className="button secondary" href={`/beaches/${props.id}/edit`}>Edit</a>
        </div>
      ) 

  }

  return (
    <div className="cell">
      <div className="card">
        <div className="card-divider">
          <h4 className="beach-title">{props.name}</h4>
          {adminButtons}
        </div>
        <div className="card-section">
          <img src={props.image.thumb.url} className="beach-image" />
          <h4 className="location-header">
            {props.town}, {props.state}
          </h4>
          <p>{props.description}</p>
          <a className="button" href={`/beaches/${props.id}`}>
            View Beach
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeachComponent;
