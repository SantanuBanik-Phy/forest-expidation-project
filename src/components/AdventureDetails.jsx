import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const AdventureDetails = () => {
  const adventure = useLoaderData();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = adventure?.id
      ? `${adventure.title} - Forest Expeditions`
      : "Adventure Details - Forest Expeditions";
  }, [adventure]);

  useEffect(() => {
    if (!adventure) {
      navigate("/404"); // Redirect to 404 if invalid adventure ID.
    }
  }, [adventure, navigate]);

  const handleTalkWithExpert = () => {
    const now = new Date();
    const startTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      10,
      0,
      0
    );
    const endTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      20,
      0,
      0
    );

    if (now >= startTime && now <= endTime) {
      window.open("https://meet.google.com/new", "_blank");
    } else {
      setShowModal(true);
    }
  };

  if (!adventure) return null;

  return (
    <div className="w-11/12 mx-auto mt-10 mb-16">
      <div className="flex flex-col lg:flex-row gap-10 items-center bg-slate-100 shadow-xl p-10 ">
        {/* Adventure Image */}
        <img
          src={adventure.image}
          alt={adventure.title}
          className="w-full  lg:w-1/2 rounded-lg shadow-lg object-cover"
        />

        {/* Adventure Details */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-600">{adventure.title}</h2>
          <p className="mt-4 text-gray-600 text-lg">{adventure.shortDescription}</p>
           
           {/* Availability Button */}
          <div className="mt-6">
            <button
              className={`btn btn-outline rounded-full font-semibold  ${
                adventure.availability
                  ? "text-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              disabled={!adventure.availability}
            >
              {adventure.availability ? "Available" : "Unavailable"}
            </button>
          </div>

          <ul className="mt-4 text-gray-700">
            <li>
              <strong>Location:</strong> {adventure.location}
            </li>
            <li>
              <strong>Duration:</strong> {adventure.duration}
            </li>
            <li>
              <strong>Level:</strong> {adventure.level}
            </li>
            <li>
              <strong>Cost:</strong> ${adventure.cost}
            </li>
          </ul>
          <h3 className="mt-6 text-2xl font-bold text-green-600">Includes Items:</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {adventure.includedItems.map((items, index) => (
              <li key={index}>{items}</li>
            ))}
          </ul>

          {/* Eco-Friendly Features */}
          <h3 className="mt-6 text-2xl font-bold text-green-600">Eco-Friendly Features:</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {adventure.ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Special Instructions */}
          <h3 className="mt-6 text-2xl font-bold text-green-600">Special Instructions:</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            {adventure.specialInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>

          
          {/* Talk with Expert Button */}
          <button
            onClick={handleTalkWithExpert}
            className="mt-4 bg-green-500  text-white px-6 py-2 rounded-lg font-semibold shadow-md"
          >
            Talk with Expert
          </button>

          {/* Modal for Outside Hours */}
          {showModal && <Modal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
