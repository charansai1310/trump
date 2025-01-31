import React from "react";
import "./InfoCard.css";
const InfoCard = ({ item, index }) => {
  const stylename = index % 2 === 0 ? "infocard-even" : "infocard-odd";
  return (
    <div className={stylename} elevate={3}>
      <div className="info">
        <h3>{item.title}</h3>
        <h6>{item.date}</h6>
        <p>{item.summary}</p>
      </div>
    </div>
  );
};

export default InfoCard;
