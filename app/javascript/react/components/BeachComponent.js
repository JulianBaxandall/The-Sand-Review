import React from "react";


const BeachComponent =(props)=>{
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Town: {props.town}</p>
      <p>State: {props.state}</p>
      <p>Description: {props.description}</p>
      <a href={props.url}>{props.name} URL</a>
      <img 
        style={{width: "10%", height: "auto"}} 
        src={props.image}
      />
    </div>
  )
}

export default BeachComponent