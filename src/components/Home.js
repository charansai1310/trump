import React from "react";
import Timer from "./Timer";
import "./Home.css";
import TimeLineComponent from "./TimeLineComponent";

const Home = () => {
  return (
    <div className="trump fade-in">
      <div className="background-overlay"></div>
      <h2 className="title-animate">
        The Second Presidential Term of Donald J. Trump (2025 - 2029)
      </h2>
      <div className="home-partition slide-in">
        <div className="time-line">
          <TimeLineComponent />
        </div>
        <div className="timer">
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Home;
