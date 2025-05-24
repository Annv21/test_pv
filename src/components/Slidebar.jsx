import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShareFromSquare, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import clix from '../assets/anh/Slidebar/clix.jpg';
import decibel from '../assets/anh/Slidebar/decibel.jpg';
import loud from '../assets/anh/Slidebar/loud.jpg';
import morvan from '../assets/anh/Slidebar/morvan.jpg';
import notescape from '../assets/anh/Slidebar/notescape.jpg';
import overable from '../assets/anh/Slidebar/overable.jpg';
import phase from '../assets/anh/Slidebar/phase.jpg';
import poize from '../assets/anh/Slidebar/poize.jpg';
import spectacle from '../assets/anh/Slidebar/spectacle.jpg';
import unimata from '../assets/anh/Slidebar/unimate.jpg';
import yor from '../assets/anh/Slidebar/yor.jpg';

// Thêm các icon vào library
library.add(faShareFromSquare, faCartShopping);

function Sidebar() {
  const [isImageVisible, setIsImageVisible] = useState(false); // Trạng thái hiển thị/ẩn ảnh

  // Danh sách ảnh cùng với tên
  const images = [
    { src: clix, name: 'clix' },
    { src: decibel, name: 'decibel' },
    { src: loud, name: 'loud' },
    { src: morvan, name: 'morvan' },
    { src: notescape, name: 'notescape' },
    { src: overable, name: 'overable' },
    { src: phase, name: 'phase' },
    { src: poize, name: 'poize' },
    { src: spectacle, name: 'spectacle' },
    { src: unimata, name: 'unimata' },
    { src: yor, name: 'yor' },
  ];

  const handleCartClick = () => {
    window.open(
      'https://themeforest.net/checkout/109712568/create_account?clickid=3f7RyNzmxxycUKKQFXWM90G3UksTHsVgOyRRUE0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1289135&mp_value1=&utm_campaign=af_impact_radius_1289135&utm_medium=affiliate&utm_source=impact_radius',
      '_blank'
    );
  };


  // Toggle trạng thái khi nhấn biểu tượng
  const toggleImage = () => {
    setIsImageVisible((prev) => !prev);
  };
 
  return (
    <div className="fixed top-0 right-0 h-full z-40 flex items-start">
      {/* Container ảnh (hiển thị/ẩn dựa trên trạng thái, cho phép cuộn) */}
      <div
        className={`transition-all duration-300 ease-in-out bg-black overflow-y-auto ${
          isImageVisible ? 'w-64 opacity-100' : 'w-0 opacity-0'
        }`}
        style={{ height: '100vh' }}
      >
        <div className="p-4 flex flex-col h-full">
          {images.map((image, index) => (
            <div key={index} className="mb-4">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-40 object-cover rounded-lg"
                onError={(e) => {
                  console.error(`Image failed to load: ${image.name}`);
                }}
              />
              <p className="text-gray-300 text-sm mt-2 text-center">{image.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Biểu tượng fa-share-from-square (bên phải, giữa cạnh) */}
      <button
        onClick={handleCartClick}
        className="fixed right-0 top-2/3 -translate-y-1/3 bg-gray-800 text-white p-3 focus:outline-none hover:bg-gray-700 transition-all duration-300"
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-2xl"
        />
      </button>
      <button
        onClick={toggleImage}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 focus:outline-none hover:bg-gray-700 transition-all duration-300"
      >
        <FontAwesomeIcon
          icon={faShareFromSquare}
          className="text-2xl transition-transform duration-300"
          style={{ transform: isImageVisible ? 'rotate-180' : 'none' }}
        />
      </button>
      
    </div>
  );
}

export default Sidebar;