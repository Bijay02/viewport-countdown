import { useState, useEffect } from "react";

const useInView = ({ ref }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {

      const observer = new IntersectionObserver(
        ([entry]) => {
          setInView(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      observer.observe(ref?.current);

      return () => {
        observer.disconnect();
      };
  }, [ref]);

  return inView;
};

export default useInView;
