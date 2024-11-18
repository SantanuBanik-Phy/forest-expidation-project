import React from "react";
import { useNavigate } from "react-router-dom";

const AdventureCard = ({ adventure }) => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate(`/adventure/${adventure.id}`);
  };

  return (
    <div className=" p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={adventure.image}
        alt={adventure.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-green-700">{adventure.title}</h3>
        <ul className="mt-2 text-sm text-gray-600">
          {adventure.ecoFriendlyFeatures.map((feature, index) => (
            <li key={index} className="list-disc ml-4">
              {feature}
            </li>
          ))}
        </ul>
        <button
        onClick={handleExploreNow}
         
          className="mt-4 bg-gradient-to-r from-green-700 to-green-300 btn text-white rounded-xl px-4 py-2 "
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default AdventureCard;
