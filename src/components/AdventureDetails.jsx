import React, { useEffect, useState } from "react";
import {  useNavigate, useLoaderData } from "react-router-dom";

import Modal from "./Modal";


const AdventureDetails = () => {
//   const { id } = useParams();
   const adventure = useLoaderData(); 
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.title = adventure.id ? ` ${adventure.title} - Eco-Adventure` : "Adventure Details - Eco-Adventure ";
  }, [adventure]);
    

  useEffect(() => {
    if (!adventure) {
      navigate("/404"); // Redirect to 404 if invalid adventure ID.
    }
  }, [adventure, navigate]);

  const handleTalkWithExpert = () => {
    const now = new Date();
    const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0);
    const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0);

    if (now >= startTime && now <= endTime) {
        window.open('https://meet.google.com/new', '_blank');
    } else {
        setShowModal(true);
    }
};


  if (!adventure) return null;

  return (
    <div className="w-11/12 mx-auto mt-40">
      {/* <DynamicTitle title={adventure.title} /> */}
      <div className="flex flex-row lg:flex-row items-start  gap-6">
        <img
          src={adventure.image}
          alt={adventure.title}
          className="w-full lg:w-1/2 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold">{adventure.title}</h2>
          <p className="mt-4">{adventure.shortDescription}</p>
          <ul className="mt-4">
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
          <h3 className="mt-6 text-xl font-bold">Eco-Friendly Features:</h3>
          <ul className="list-disc ml-6 mt-2">
            {adventure.ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="mt-3 text-xl font-bold">Special-Instruction:</h3>
          <ul className="list-disc ml-6 mt-2">
            {adventure.specialInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          <button onClick={handleTalkWithExpert}
            
            className="mt-6 bg-green-500 text-white btn"
          >
            Talk with Expert
          </button>
          {showModal && <Modal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
