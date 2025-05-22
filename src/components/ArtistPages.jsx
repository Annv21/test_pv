import React, { useState } from 'react';

// Import ảnh cho Artist Single Pages
import BandOriented from '../assets/anh/ArtistPages/ArtistSinglePages/BandOriented.jpg';
import Dark from '../assets/anh/ArtistPages/ArtistSinglePages/Dark.jpg';
import Default from '../assets/anh/ArtistPages/ArtistSinglePages/Default.jpg';
import DiscographyOriented from '../assets/anh/ArtistPages/ArtistSinglePages/DiscographyOriented.jpg';
import Minimal from '../assets/anh/ArtistPages/ArtistSinglePages/Minimal.jpg';
import StandardCustomLayout from '../assets/anh/ArtistPages/ArtistSinglePages/StandardCustomLayout.jpg';


// Import ảnh cho Artist Listing
import Carousel from '../assets/anh/ArtistPages/ArtistListing/Carousel.jpg';
import Gallery from '../assets/anh/ArtistPages/ArtistListing/Gallery.jpg';
import Label from '../assets/anh/ArtistPages/ArtistListing/Label.jpg';
import Masonry from '../assets/anh/ArtistPages/ArtistListing/Masonry.jpg';
import Metro from '../assets/anh/ArtistPages/ArtistListing/Metro.jpg';
import Standard from '../assets/anh/ArtistPages/ArtistListing/Standard.jpg';


function ArtistPages() {
  const [view, setView] = useState('single');

  const singlePages = [
    { name: 'Band Oriented', img: BandOriented },
    { name: 'Dark', img: Dark },
    { name: 'Default', img: Default },
    { name: 'Discography Oriented', img: DiscographyOriented },
    { name: 'Minimal', img: Minimal },
    { name: 'Standard Custom Layout', img: StandardCustomLayout },
 
  ];

  const listingPages = [
    { name: 'Carousel', img: Carousel },
    { name: 'Gallery', img: Gallery },
    { name: 'Label', img: Label },
    { name: 'Masonry', img: Masonry },
    { name: 'Metro', img: Metro },
    { name: 'Standard', img: Standard },
   
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container text-center mx-auto px-6">
        <h1
          className="text-5xl font-bold text-center mb-8"
          style={{ fontFamily: "'Great Vibes', cursive", color: '#d32f2f' }}
        >
          Artist Pages
        </h1>
        <h2 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          SIMPLE OR CUSTOM LAYOUTS
        </h2>
        <p className="text-center text-gray-400 mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Herion can be used for your record label website. You can create an unlimited number of pages for each artist and choose between simple default layouts, automatically generated from the release, videos and events artist category, or create a custom page. It's all up-to-you!
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <span
            onClick={() => setView('single')}
            className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition ${
              view === 'single' ? 'text-red-500' : 'text-gray-800 hover:text-gray-600'
            }`}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Artist Single Pages
          </span>
          <span
            onClick={() => setView('listing')}
            className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition ${
              view === 'listing' ? 'text-red-500' : 'text-gray-800 hover:text-gray-600'
            }`}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Artist Listing
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

export default ArtistPages;