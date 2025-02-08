import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Address = () => {
  return (
    <>
      <div className="flex md:flex-col flex-col space-y-4 md:items-center items-start justify-between w-[90%] my-[50px]">
        <div className="flex justify-start md:flex-row flex-col md:mt-0 mt-5 md:space-x-3 md:space-y-0 space-y-3 space-x-0 w-full">
          <div className="flex flex-col items-start space-y-2 md:w-[40%] w-full">
            <h1 className="font-bold text-3xl">Islamabad, PK</h1>
            <p className="textColor text-sm w-[300px]">
              Suite No. 3, 5th Floor, Gulberg Trade Center, Gulberg Greens
            </p>
            <p className="textColor text-sm">planicdesign2@gmail.com</p>
            <p className="textColor text-sm">0335 5272083</p>
          </div>
          <div className="md:w-[60%] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.783582606692!2d73.16892042695312!3d33.610919300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfebc35c4d576b%3A0xe9af22788204c522!2sPlanic%20Design!5e0!3m2!1sen!2s!4v1732562858080!5m2!1sen!2s"
            className="w-full border-2 border-black"
            height="250"
            // style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>

        </div>


        <div className="flex justify-start md:flex-row flex-col md:mt-0 mt-5 md:space-x-3 md:space-y-0 space-y-3 space-x-0 w-full">
          <div className="flex flex-col items-start space-y-2 md:w-[40%]">
          <h1 className="font-bold text-3xl">London, UK</h1>
            <p className="textColor text-sm  ">UK: FL 3, 45 Albemarle St</p>
            <p className="textColor text-sm">planicdesign2@gmail.com</p>
            <p className="textColor text-sm">+44 7532813089</p>
          </div>
          <div className="md:w-[60%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.267871538449!2d-0.14393882414468312!3d51.50830141063844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760529dc531585%3A0xa9fbeb809edb727d!2s45%20Albemarle%20St%2C%20London%20W1S%204JL%2C%20UK!5e0!3m2!1sen!2s!4v1732562752536!5m2!1sen!2s"
            className="w-full border-2 border-black"
            height="250"
            // style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>

        </div>

      </div>
      {/* mongodb+srv://spearingsystems:h1MOS9jb8VG6GBjw@cluster0.wv8zu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */}
    </>
  );
};

export default Address;




          // <div className="flex justify-start md:flex-row flex-col md:mt-0 mt-5 md:space-x-3 md:space-y-0 space-y-3 space-x-0 md:w-full">
            // <h1 className="font-bold text-3xl">London, UK</h1>
            // <p className="textColor text-sm  ">UK: FL 3, 45 Albemarle St</p>
            // <p className="textColor text-sm">planicdesign2@gmail.com</p>
            // <p className="textColor text-sm">+44 7532813089</p>
          // </div>