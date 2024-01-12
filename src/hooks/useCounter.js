import React, { useState, useEffect } from "react";

const useCounter = ({ start,startAt, endAt, duration }) => {
  const [count, setCount] = useState(startAt);
  const [countDirection, setCountDirection] = useState(1);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (start) setStarted(true);
  }, [start]);
  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        if (countDirection === 1 && count < endAt) {
          setCount((prevCount) => prevCount + 1);
        } else if (countDirection === 1 && count === endAt) {
          setCountDirection(-1);
        } else if (countDirection === -1 && count > 0) {
          setCount((prevCount) => prevCount - 1);
        }
      }, duration);
      return () => clearInterval(interval);
    }
  }, [count, countDirection, started]);
  return count;
};

export default useCounter;
