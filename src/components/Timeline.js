import React, { useEffect, useState } from "react";

function Timeline({ countFlip }) {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds < 60) {
        setSeconds(seconds + 1);
        return;
      }
      setMinute(minute + 1);
      setSeconds(0);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="result">
      <p>
        Time: {minute < 10 ? `0${minute}` : minute}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <p>Flips: {countFlip}</p>
    </div>
  );
}

export default Timeline;
