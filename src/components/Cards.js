import React from "react";
import placeholder from "../placeholder.png";

const Cards = (props) => {
  const {
    imageUrl,
    location,
    googleMapsUrl,
    title,
    startDate,
    endDate,
    description,
  } = props;
  return (
    <div className="cards">
      <img src={imageUrl} className="cards--image" />
      <div className="cards--text">
        <div className="cards--top">
          <img src={placeholder} className="cards--icon" />
          <h4 className="cards--location">{location} </h4>
          <h4>
            <a href={googleMapsUrl} target="__blank" className="cards--google">
              View on Google Maps
            </a>
          </h4>
        </div>
        <div className="cards--bottom">
          <h2 className="cards--title">{title}</h2>
          <h4 className="cards--date">
            {startDate} - {endDate}
          </h4>
          <p className="cards--description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
