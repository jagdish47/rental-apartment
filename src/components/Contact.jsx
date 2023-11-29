import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="mt-20 image-bg w-full h-[800px] flex items-center justify-between">
        <div className="flex flex-col ml-24">
          <h1 className="text-white text-2xl font-semibold">
            Easy scheduling ahead
          </h1>
          <p className="text-white text-lg w-[52%] text-justify mt-10 mb-10">
            To schedule a house tour at Greenfield Apartments, Chicago, Please
            visit out website or contact our leasing office. Our friendly staff
            will assist you in selecting a convenient date and time for the
            tour, Experience the modern living spaces, amenities, and vibrant
            neighborhood during your visit. Book your tour today!
          </p>
          <div className="flex items-center ">
            <span className="bg-white text-black text-[13px] px-[6px] py-[1px] rounded-full">
              1
            </span>
            <h1 className="text-white text-[13px] ml-1 mb-1 mr-7">
              Submit the form
            </h1>
            <span className="bg-white text-black text-[13px] px-[6px] py-[1px] rounded-full">
              2
            </span>
            <h1 className="text-white text-[13px] ml-1 mb-1 mr-7">
              Receive a call from management
            </h1>
            <span className="bg-white text-black text-[13px] px-[6px] py-[1px] rounded-full">
              3
            </span>
            <h1 className="text-white text-[13px] ml-1 mb-1 mr-7">
              Schedule a day tour
            </h1>
            <span className="bg-white text-black text-[13px] px-[6px] py-[1px] rounded-full">
              4
            </span>
            <h1 className="text-white text-[13px] ml-1 mb-1">
              Book your dream home
            </h1>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
