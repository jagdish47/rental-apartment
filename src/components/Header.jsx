import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isLogedIn = useSelector((state) => state.login.open);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-28 py-10">
      <div className="mb-4 sm:mb-0">
        <Link to="/">
          <p className="font-bold text-lg sm:text-xl">Logo</p>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 font-semibold">
        <p className="mb-2 sm:mb-0">Manage Rentals</p>
        <p className="mb-2 sm:mb-0">Advertise</p>
        <p className="mb-2 sm:mb-0">Help</p>
        <Link to="/login">
          <button className="bg-[#B1872F] text-white px-4 py-2 rounded-md">
            {isLogedIn ? "Sign-in" : "Sign-out"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
