import React, { Fragment, useEffect, useContext, useState, useRef } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    sliderImages(dispatch);
  }, [dispatch]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % data.sliderImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data.sliderImages.length]);

  // Scroll effect
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * slide,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  }, [slide]);

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2 overflow-hidden">
        <div ref={sliderRef} className="flex w-full overflow-x-hidden">
          {data.sliderImages.map((image, index) => (
            <img
              key={index}
              className="w-full flex-shrink-0 transition-all duration-500 ease-in-out"
              src={`${apiURL}/uploads/customize/${image.slideImage}`}
              alt={`sliderImage-${index}`}
              style={{ minWidth: "100%" }}
            />
          ))}
        </div>

      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
