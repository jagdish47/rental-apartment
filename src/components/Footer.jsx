import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#B1872F] text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-around">
        {/* Logo Column */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-4">Logo</h3>
          <p className="text-[10px] mb-4">
            Download the app by clicking the link below :
          </p>
          <div className="flex">
            <img src="/play-store.png" alt="Google Play" className="h-10" />
            <img src="/apple-store.png" alt="App Store" className="h-10" />
          </div>
        </div>

        <div className="flex gap-16">
          {/* Pages Column */}
          <div className="mb-4">
            <h3 className="mb-4">Pages</h3>
            <ul className="text-[12px]">
              <li className="mt-3">How it works</li>
              <li className="mt-3">Pricing</li>
              <li className="mt-3">Blog</li>
              <li className="mt-3">Demo</li>
            </ul>
          </div>

          {/* Service Column */}
          <div className="mb-4">
            <h3 className=" mb-4">Service</h3>
            <ul className="text-[12px]">
              <li className="mt-3">Shopify</li>
              <li className="mt-3">WordPress</li>
              <li className="mt-3">UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="mb-4 text-[12px] ">
            <h3 className="mb-4">Contact</h3>
            <div className="flex mt-2">
              <IoCallSharp size={15} />
              <p className="ml-2">Phone: (123) 456-7890</p>
            </div>
            <div className="flex mt-2">
              <IoIosMail size={15} />
              <p className="ml-2">Email: info@example.com</p>
            </div>
            <div className="flex mt-2">
              <FaLocationDot size={15} />
              <p className="ml-2 w-44">
                2972 Westheimer Rd. Santa Ana, ILLinois 85486
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Column */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-8">Social Media</h3>
          <div className="flex items-center justify-between">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
