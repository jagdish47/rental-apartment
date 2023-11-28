const ContactForm = () => {
  return (
    <div className="mt-56 rounded-2xl m-auto w-[30%] h-[500px] bg-[#FAF8F8] px-8 py-4">
      <form>
        <div className="border-b-2">
          <h1 className="font-semibold text-xl">Contact details</h1>
          <p className="text-[12px] my-2">
            Please fill your information so we can get in touch with you
          </p>
        </div>

        <div className="flex mt-4">
          <div>
            <label className="text-[13px] font-semibold">Name</label>
            <input
              className="rounded-3xl shadow focus:outline-none px-3 py-2 w-44 mt-2"
              type="text"
              placeholder="Your Name"
            />

            <label className="text-[13px] font-semibold flex mt-8">
              Phone Number
            </label>
            <input
              className=" [appearance:textfield] rounded-3xl shadow focus:outline-none px-3 py-2 w-44 mt-2"
              type="number"
              placeholder="(123)456 - 7890"
            />
          </div>
          <div>
            <label className="text-[13px] font-semibold">Email</label>
            <input
              className="rounded-3xl shadow focus:outline-none px-3 py-2 w-44 mt-2"
              type="email"
              placeholder="Your Mail ID"
            />

            <label className="text-[13px] font-semibold mt-8 flex">Date</label>
            <input
              className="rounded-3xl shadow focus:outline-none px-3 py-2 w-44 mt-2"
              type="date"
              placeholder="dd-mm-yyyy"
            />
          </div>
        </div>

        <div className="mt-6 ">
          <h1>I would like to...</h1>
          <div className="flex flex-col justify-between items-start">
            <div className="my-1">
              <input type="checkbox" />
              <span className="text-[13px] relative bottom-[3px]">
                Schedule a tour
              </span>
              <input type="checkbox" className="ml-11" />
              <span className=" text-[13px] relative bottom-[3px]">
                Request application
              </span>
            </div>
            <div className="flex items-center justify-start">
              <input type="checkbox" />
              <span className="text-[13px] relative bottom-[3px]">
                Confirm availability
              </span>
              <input type="checkbox" className="ml-6" />
              <span className="text-[13px] relative bottom-[3px]">
                Custom message
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-7">
          <button className="bg-[#B1872F] rounded-lg font-light  text-white py-2 px-8 hover:bg-opacity-80 focus:outline-none focus:ring focus:border-blue-300">
            Submit
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <input type="checkbox" />
          <span className="text-[14px] relative bottom-[2px]">
            Email me listings and apartment related info.
          </span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
