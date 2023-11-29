import React, { useState } from "react";
import { apartmentDataDash } from "../config";
import { IoIosHeartEmpty } from "react-icons/io";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApartments = apartmentDataDash.filter((apartment) =>
    apartment.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8 ">
        <input
          type="text"
          placeholder="Enter an address, neighbourhood, city, or ZIP code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 ml-36 border w-96 border-gray-300 rounded-full focus:outline-none focus:shadow-outline focus:border-blue-500 transition-all duration-300"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {filteredApartments.map((card, idx) => (
          <div
            key={idx}
            className="h-[390px] w-[300px] bg-white shadow-lg rounded-lg overflow-hidden mb-4"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={card.image}
              alt="apartment"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                ${card.price1db} + 1 bd
              </div>
              <p className="text-gray-700 text-base">
                ${card.price2dbs} + bds | $ {card.price3dbs} + 3bds
              </p>
              <p className="text-gray-700 text-base">{card.address}</p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center border-t-2 border-gray-400">
              <button className="text-blue-500 hover:text-blue-700">
                View Details
              </button>
              <IoIosHeartEmpty />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
