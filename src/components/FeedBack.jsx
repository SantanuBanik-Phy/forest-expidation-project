import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feedback = ({feedBackData}) => {
 

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-6 mt-10">What Our Customers Say</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        className="w-full max-w-lg mx-auto"
      >
        {feedBackData.map((review) => (
          <div
            key={review.reviewId}
            className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={review.userImg}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="font-bold text-lg">{review.name}</h3>
            <p className="text-gray-500 text-sm">{review.location}</p>
            <p className="italic text-center mt-2">{review.review}</p>
            <p className="text-yellow-500 font-bold mt-3">Rating: {review.rating}⭐</p>
            <p className="text-gray-400 text-xs">{new Date().toLocaleDateString()}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Feedback;
