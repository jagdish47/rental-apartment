import { IoIosHeartEmpty } from "react-icons/io";

import { GiBarbecue } from "react-icons/gi";
import { GiKidSlide } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";

import { apartmentData } from "../data";

const Icons = [
  { icon: <GiBarbecue size={40} />, name: "barbecue" },
  { icon: <GiKidSlide size={40} />, name: "Play Area" },
  { icon: <FaPersonSwimming size={40} />, name: "Swimming pool" },
  { icon: <FaDumbbell size={40} />, name: "Gym" },
  { icon: <MdOutlineLocalLaundryService size={40} />, name: "Laundry" },
  { icon: <MdOutlinePets size={40} />, name: "Pet friendly" },
];

const Apartment = () => {
  return (
    <>
      {/* single card here */}
      <div className=" flex justify-around h-[650px] w-[86%] m-auto mt-56 px-24">
        <div className="  w-72 h-[360px]  ">
          <div className="w-full h-64 ">
            <img
              className="w-full h-full object-cover rounded-t-xl "
              src="/home-balcony.jpg"
              alt="apartment"
            />
          </div>
          <div className="flex justify-around pt-3 border-x-2 border-b-2 border-gray-400 pb-5 rounded-b-xl">
            <div className="">
              <h1 className="font-bold">$ 955 + 1 bd</h1>
              <h2 className="text-gray-500 text-sm my-1">
                $1555 + bds | $ 1,743 + 3bds
              </h2>
              <p className="text-gray-500 text-sm">
                456 Oak St, Townsville, USA
              </p>
            </div>
            <div>
              <IoIosHeartEmpty size={25} />
            </div>
          </div>

          {/* 3 card here */}
          <div className="flex w-[1000px]  items-center justify-between mt-10">
            {apartmentData.map((ele, idx) => (
              <div className=" w-72 h-[360px]">
                <div className="w-full h-64 ">
                  <img
                    className="w-full h-full object-cover rounded-t-xl "
                    src={ele.image}
                    alt="apartment"
                  />
                </div>
                <div className="flex justify-around pt-3 border-x-2 border-b-2 border-gray-400 pb-5 rounded-b-xl">
                  <div className="">
                    <h1 className="font-bold">$ {ele.price1db} + 1 bd</h1>
                    <h2 className="text-gray-500 text-sm my-1">
                      ${ele.price2dbs} + bds | $ {ele.price3dbs} + 3bds
                    </h2>
                    <p className="text-gray-500 text-sm">{ele.address}</p>
                  </div>
                  <div>
                    <IoIosHeartEmpty size={25} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common amenities */}
        <div>
          <div>
            <h1 className="text-2xl font-bold mb-8 mt-4">
              Looking for Rental apartments?
            </h1>
            <p className="text-gray-600 w-[400px] text-[20px] mb-20 font-semibold">
              Choose from over 1 million apartments, houses, condos, and
              townhomes for rent.
            </p>
            <h1 className="text-2xl font-bold mb-4">Common amenities</h1>
            <div className="flex">
              {Icons.map((ele, idx) => (
                <div
                  className="flex flex-col items-center justify-center gap-x-5 mr-5 "
                  key={idx}
                >
                  <div className="hover:scale-150 transition">{ele.icon}</div>
                  <p className="mt-2 text-gray-500">{ele.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartment;
