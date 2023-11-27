const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-28 py-10">
      <div className="mb-4 sm:mb-0">
        <p className="font-bold text-lg sm:text-xl">Logo</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 font-semibold">
        <p className="mb-2 sm:mb-0">Manage Rentals</p>
        <p className="mb-2 sm:mb-0">Advertise</p>
        <p className="mb-2 sm:mb-0">Help</p>
        <button className="bg-[#B1872F] text-white px-4 py-2 rounded-md">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
