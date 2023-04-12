import React, { useRef, useEffect, useState } from "react";

export default function ResultCard(props) {
  const targetRef = useRef(null);
  const [views, setViews] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isIntersecting && views < props.number) {
      interval = setInterval(() => {
        setViews((prevViews) => prevViews + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isIntersecting, views]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 } // observe when the target is at least 50% visible
    );
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const names = props.name;
  return (
    <div className="content-center text-center">
      <div alt="star" className="w-96 h-3/5">{props.image1}</div>
      <h3 className="mt-4 text-4xl font-bold text-amber-700">
        {names === "satisfaction" ? (
          <span>{views}%</span>
        ) : (
          <span>{views}+</span>
        )}
      </h3>
      <p className="text-2xl" ref={targetRef}>
        {props.title}
      </p>
      <p className="w-60 my-2 mx-auto">{props.text}</p>
    </div>
  );
}
