import React from 'react';
import { FaMousePointer, FaDownload, FaHeart } from 'react-icons/fa';

const DemoImport = () => {
  const handleRedirect = () => {
    window.location.href = 'https://themeforest.net/checkout/109680722/create_account?clickid=3f7RyNzmxxycUKKQFXWM90G3UksTgjyUOyRRUE0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1289135&mp_value1=&utm_campaign=af_impact_radius_1289135&utm_medium=affiliate&utm_source=impact_radius';
  };

  return (
    <div className="flex items-center justify-between bg-gray-900 text-white min-h-[80vh] p-10">
      {/* Left Section */}
      <div className="flex flex-col items-start">
        <div className="mb-6">
          <span className="font-['Playfair_Display'] text-5xl font-bold text-gray-400">Demo</span>
          <span className="font-['Playfair_Display'] text-5xl font-bold italic text-gray-400">Import</span>
        </div>
        <div className="max-w-md">
          <h2 className="font-['Poppins'] text-2xl font-bold mb-4 text-white">ONE-CLICK DEMO INSTALL</h2>
          <p className="font-['Poppins'] text-sm font-light leading-relaxed mb-6 text-gray-400">
            Herion includes a One-Click Demo Importer, to allow you to import the demo content easily. It is the cool way to set up your theme in a couple of minutes from the starting point.
          </p>
          <button
            onClick={handleRedirect}
            className="bg-red-500 text-white font-['Poppins'] font-bold text-sm py-2 px-4 hover:bg-red-600 transition duration-300"
          >
            GET YOUR COPY
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center mx-auto relative">
        {/* Đường thẳng liên tục */}
        <div className=" absolute w-0.5 h-[192px] bg-white left-6 top-6"></div> {/* Đường thẳng kéo dài qua các icon */}

        {/* Step 1 */}
        <div className="flex mb-10 w-full h-16 items-center">
          <div className="w-12 h-12 border-2 border-white rounded-full flex justify-center items-center mr-4 z-10 bg-gray-900">
            <FaMousePointer className="text-white text-xl" />
          </div>
          <p className="font-['Poppins'] text-sm font-normal text-gray-400 ">INSTALL HERION</p>
        </div>

        {/* Step 2 */}
        <div className="flex mb-10 w-full h-16 items-center">
          <div className="w-12 h-12 border-2 border-white rounded-full flex justify-center items-center mr-4 z-10 bg-gray-900">
            <FaDownload className="text-white text-xl" />
          </div>
          <p className="font-['Poppins'] text-sm font-normal text-gray-400">IMPORT DEMO CONTENT</p>
        </div>

        {/* Step 3 */}
        <div className="flex mb-10 w-full h-16 items-center">
          <div className="w-12 h-12 border-2 border-white rounded-full flex justify-center items-center mr-4 z-10 bg-gray-900">
            <FaHeart className="text-red-500 text-xl" />
          </div>
          <p className="font-['Poppins'] text-sm font-normal text-gray-400">HAVE FUN!</p>
        </div>
      </div>
    </div>
  );
};

export default DemoImport;