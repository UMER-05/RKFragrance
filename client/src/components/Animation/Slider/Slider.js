import React, { useRef, useEffect, useState } from "react";

const Slider = ({
  children,
  initialX = "0%", // Default no horizontal movement
  initialY = "10%", // Default vertical movement
  threshold = 0.1, // Intersection threshold
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Trigger when element enters/exits viewport
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  // Base styles with combined X and Y transformations
  const baseStyle = {
    transform: `translate(${initialX}, ${initialY})`,
    opacity: 0,
    transition: "transform 2s ease-out, opacity 1s ease-out",
    overflow: "hidden",
  };

  const inViewStyle = {
    transform: "translate(0, 0)",
    opacity: 1,
  };

  return (
    <div
      ref={ref}
      style={{
        ...baseStyle,
        ...(inView ? inViewStyle : {}),
      }}
    >
      {children}
    </div>
  );
};

export default Slider;
