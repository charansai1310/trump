import React, { useEffect, useState } from "react";
import trumpImage from "../assets/potus2_0.jpg";
import "./Timer.css"; // Assuming the styles are combined in one file

const Timer = () => {
  const startOfTerm = new Date("January 20, 2025 12:00:00").getTime();
  const endOfTerm = new Date("January 20, 2029 12:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [desaturate, setDesaturate] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const totalDuration = endOfTerm - startOfTerm;
      const timeRemaining = endOfTerm - now;

      let timeData = {};

      if (timeRemaining > 0) {
        timeData = {
          days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
          seconds: Math.floor((timeRemaining / 1000) % 60),
        };
      }

      setTimeLeft(timeData);
      const progress = 1 - timeRemaining / totalDuration;
      setOpacity(1 - progress);
      setDesaturate(progress * 100);
    };

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [startOfTerm, endOfTerm]);

  const splitTime = (time) => String(time).padStart(2, "0").split("");

  return (
    <div className="timer">
      <h3>Time Left in Trump's Second Term</h3>
      {timeLeft.days !== undefined ? (
        <div>
          <div className="time-container">
            <FlipUnit value={splitTime(timeLeft.days)} label="Days" />
            <FlipUnit value={splitTime(timeLeft.hours)} label="Hours" />
            <FlipUnit value={splitTime(timeLeft.minutes)} label="Minutes" />
            <FlipUnit value={splitTime(timeLeft.seconds)} label="Seconds" />
          </div>
          <div className="image-style" style={{ position: "relative" }}>
            <img
              src={trumpImage}
              alt="Trump"
              style={{
                filter: `grayscale(${desaturate}%)`,
                transition: "opacity 1s ease, filter 1s ease",
              }}
            />
            <div className="progress-bar">
              <div
                style={{
                  width: `${(1 - opacity) * 100}%`,
                  height: "100%",
                  backgroundColor: `rgb(${(1 - opacity) * 255}, 0, 0)`,
                  transition: "width 1s ease",
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <p style={{ color: "red", fontSize: "40px" }}>The Term has ended!</p>
      )}
    </div>
  );
};

const FlipUnit = ({ value, label }) => {
  return (
    <div className="flip-unit">
      <div className="label">{label}</div>
      <div className="flip-cards">
        {value.map((digit, index) => (
          <div className="flip-card" key={index}>
            <span className="flip-card-front">{digit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
