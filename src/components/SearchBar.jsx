import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex bg-[rgb(6,58,84)] h-[650px] w-[86%] m-auto rounded-xl">
      <div className="relative ml-40 mt-24 z-10">
        <h1 className="w-[100%] mb-16 text-white text-6xl font-semibold">
          Explore Your Dream Home
        </h1>
        <p className="w-[80%] mb-12 text-white text-2xl ">
          Embark an captivating tours to discover the perfect residence for you
          and your family.
        </p>
        <div className="flex">
          <input
            className="py-4 px-3 text-[17px] w-[650px] rounded-md outline-none pr-20"
            type="text"
            placeholder="Enter an address, neighbourhood, city, or ZIP code"
          />
          <BsSearch
            size={30}
            className="relative right-14 top-3 text-gray-400 cursor-pointer hover:text-gray-700 transition"
          />
        </div>
      </div>

      <div>
        <img
          className="relative top-52 right-20  w-[660px] h-[80%] object-cover rounded-2xl border-8 border-solid border-white "
          src="/home-balcony.jpg"
          alt="Home"
        />
      </div>
    </div>
  );
};

export default SearchBar;
