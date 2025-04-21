import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="items-center justify-center bg-[#111116] text-[#B2B2B2] py-12">
      <div className="flex justify-around bg-[#111116] text-[#B2B2B2] p-2 border-b-2">
        <div className="w-1/6">
          <p className="text-[#fff] text-3xl font-bold py-8">Wakery</p>
          <p>
            A perfect place for perfect food, all kind of parties and any other
            gathering as well, for our guests to simply unwind and relax in
            complete serenity.
          </p>
          <div className="flex justify-between m-8">
            <span className="rounded-full bg-[#B2B2B2] text-[#fff] p-2">
              <FaGoogle />
            </span>
            <span className="rounded-full bg-[#B2B2B2] text-[#fff] p-2">
              <FaTwitter />
            </span>
            <span className="rounded-full bg-[#B2B2B2] text-[#fff] p-2">
              <FaInstagram />
            </span>
            <span className="rounded-full bg-[#B2B2B2] text-[#fff] p-2">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div className="w-1/6 ">
          <p className="text-[#fff] text-3xl font-bold py-8">Quick Links</p>
          <p className="py-2">Menu</p>
          <p className="py-2">Gallery</p>
          <p className="py-2">Contact</p>
          <p className="py-2">Order Now</p>
        </div>
        <div className="w-1/6">
          <p className="text-[#fff] text-3xl font-bold py-8">Company</p>
          <p className="py-2">About</p>
          <p className="py-2">Terms</p>
          <p className="py-2">Privacy Policy</p>
          <p className="py-2">Refund Policy</p>
        </div>
        <div className="w-1/6 ">
          <p className="text-[#fff] text-3xl font-bold py-8">Contact</p>
          <p className="py-2 text-[#fff]">
            Call : <span className="text-[#B3B3B3]">+919284962859</span>{" "}
          </p>
          <p className="py-2 text-[#fff]">
            Email :{" "}
            <span className="text-[#B3B3B3]">Riteshnarwade03@gmail.com</span>
          </p>
          <p className="py-2 text-[#fff]">
            Address :{" "}
            <span className="text-[#B3B3B3]">
              Chhha.Sambhajinagar / Pune , Maharashtra{" "}
            </span>
          </p>
        </div>
      </div>
      <p className="text-center py-4">
        Copyright © 2021 Wakery All Rights Reserved Developed By Ritesh Narwade
        & Nitin Shelar
      </p>
    </div>
  );
};

export default Footer;
