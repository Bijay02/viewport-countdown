import React, { useRef } from "react";
import Counter from "../components/CountDown";
import useInView from "../hooks/useInView";

const CounterPage = () => {
  const ref = useRef();
  const inView = useInView({ ref });

  return (
    <>
      <div className="viewport1 bg-slate-400" ref={ref}>
        <Counter startAt={0} endAt={100} duration={1000} />
        <Counter startAt={10} endAt={100} duration={1000} />
        <Counter startAt={20} endAt={100} duration={1000} />
        <Counter startAt={30} endAt={100} duration={1000} />
        <Counter startAt={40} endAt={100} duration={10} />
        <Counter startAt={50} endAt={100} duration={1000} />
        <Counter startAt={60} endAt={100} duration={1000} />
        <Counter startAt={70} endAt={100} duration={10} />
        <Counter startAt={80} endAt={100} duration={10} />
      </div>
    </>
  );
};

export default CounterPage;
