import React, { useState } from 'react';

// Import ảnh cho Release Single Pages
import Compact from '../assets/anh/ReleasePages/ReleaseSinglePage/Compact.jpg';
import CustomHeader from '../assets/anh/ReleasePages/ReleaseSinglePage/CustomHeader.jpg';
import CustomLayout from '../assets/anh/ReleasePages/ReleaseSinglePage/CustomLayout.jpg';
import InfoAtLeft from '../assets/anh/ReleasePages/ReleaseSinglePage/InfoAtLeft.jpg';
import InfoAtRight from '../assets/anh/ReleasePages/ReleaseSinglePage/InfoAtRight.jpg';
import Minimal from '../assets/anh/ReleasePages/ReleaseSinglePage/Minimal.jpg';
import TextOriented from '../assets/anh/ReleasePages/ReleaseSinglePage/TextOriented.jpg';
import WideWidth from '../assets/anh/ReleasePages/ReleaseSinglePage/WideWidth.jpg';
import AndMore from '../assets/anh/ReleasePages/andmore.png';

// Import ảnh cho Release Listing
import AnimatedCover from '../assets/anh/ReleasePages/ReleaseListing /AnimatedCover.jpg';
import BrokenGrid from '../assets/anh/ReleasePages/ReleaseListing /BrokenGrid.jpg';
import Carousel from '../assets/anh/ReleasePages/ReleaseListing /Carousel.jpg';
import Filtered from '../assets/anh/ReleasePages/ReleaseListing /Filtered.jpg';
import Gallery from '../assets/anh/ReleasePages/ReleaseListing /Gallery.jpg';
import Label from '../assets/anh/ReleasePages/ReleaseListing /Label.jpg';
import Metro from '../assets/anh/ReleasePages/ReleaseListing /Metro.jpg';
import Standard from '../assets/anh/ReleasePages/ReleaseListing /Standard.jpg';

function ReleasePages() {
    const [view, setView] = useState('single');
  
    const singlePages = [
      { name: "Info at Right", img: InfoAtRight },
      { name: "Info at Left", img: InfoAtLeft },
      { name: "Wide Width", img: WideWidth },
      { name: "Custom Header", img: CustomHeader },
      { name: "Custom Layout", img: CustomLayout },
      { name: "Text Oriented", img: TextOriented },
      { name: "Compact", img: Compact },
      { name: "Minimal", img: Minimal },
      { name: "", img: AndMore },
    ];
  
    const listingPages = [
      { name: "Standard", img: Standard },
      { name: "Gallery", img: Gallery },
      { name: "Label", img: Label },
      { name: "Broken Grid", img: BrokenGrid },
      { name: "Animated Cover", img: AnimatedCover },
      { name: "Metro", img: Metro },
      { name: "Filtered", img: Filtered },
      { name: "Carousel", img: Carousel },
      { name: "And More", img: AndMore },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container text-center mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-gray-400 mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Discography
          </h1>
          <h2 className="text-2xl font-bold text-center mb-8" >
            Release Pages
          </h2>
          <p className="text-center text-gray-400 mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system IF you want all release pages with the same custom layout.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span
              onClick={() => setView('single')}
              className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition ${
                view === 'single' ? 'text-red-500' : 'text-gray-800 hover:text-gray-600'
              }`}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Release Single Pages
            </span>
            <span
              onClick={() => setView('listing')}
              className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition ${
                view === 'listing' ? 'text-red-500' : 'text-gray-800 hover:text-gray-600'
              }`}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Release Listing
            </span>
          </div>
          {view && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(view === 'single' ? singlePages : listingPages).map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="bg-cover bg-center h-64 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div className="mt-2 text-center">
                    <p className="text-lg font-normal" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="mt-4 text-lg text-gray-400" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            and more...
          </p>
        </div>
      </section>
    );
  }

export default ReleasePages;