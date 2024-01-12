import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import useInView from "../hooks/useInView";
import useCounter from "../hooks/useCounter";

const Counter = ({ startAt, endAt, duration }) => {
  const ref = useRef();
  const inView = useInView({ ref });
  console.log(inView);

  const count = useCounter({ start: inView, startAt, endAt, duration });
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (countDirection === 1 && count < 100) {
  //         setCount((prevCount) => prevCount + 1);
  //       } else if (countDirection === 1 && count === 100) {
  //         setCountDirection(-1);
  //       } else if (countDirection === -1 && count > 0) {
  //         setCount((prevCount) => prevCount - 1);
  //       }
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, [count, countDirection]);
  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl bg-slate-300 p-5 border-2 rounded-md border-sky-500">
        Countdown: <span className="text-2xl text-red-700">{count}</span>
      </h1>
      {/*<p>
        Go to home page <Link to="/">Click here.</Link>
  </p>*/}
    </div>
  );
};

export default Counter;
export const Head = () => <title>Counter Page</title>;
