import React, { useState } from "react";

const SpecialDeals = ({ specialDealsData }) => {
  const [visibleCount, setVisibleCount] = useState(3); /
  const [expanded, setExpanded] = useState(false); 

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(3); // Reset to initial number of deals
    } else {
      setVisibleCount(specialDealsData.length); 
    }
    setExpanded(!expanded); 
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Special Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialDealsData.slice(0, visibleCount).map((deal) => (
            <div
              key={deal.dealId}
              className="rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform hover:scale-105"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                <p className="text-green-600 font-bold text-lg">
                  Price: ${deal.price}
                </p>
                <p className="text-red-500 font-semibold">Discount: {deal.discount}</p>
                <p className="text-gray-500 text-xs mb-3">
                  Valid Until: {deal.validUntil}
                </p>
                <p className="text-blue-600 font-medium text-sm">
                  Location: {deal.location}
                </p>
                <ul className="mt-4 text-gray-700 text-sm">
                  {deal.features.map((feature, index) => (
                    <li key={index} className="list-disc list-inside">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full btn bg-green-500 text-white font-semibold rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleToggle}
          className="mx-auto block btn bg-green-500 mt-6"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default SpecialDeals;
