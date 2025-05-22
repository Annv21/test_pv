import React from 'react';
import ArtistMetro from '../assets/anh/HomePage/ArtistMetro.jpg';
import ArtistSlider from '../assets/anh/HomePage/ArtistSlider.jpg';
import BandHome from '../assets/anh/HomePage/BandHome.jpg';
import BlogHome from '../assets/anh/HomePage/BlogHome.jpg';
import DiscographyHome from '../assets/anh/HomePage/DiscographyHome.jpg';
import DJEvent from '../assets/anh/HomePage/DJEvent.jpg';
import Festival from '../assets/anh/HomePage/Festival.jpg';
import HomeAlt from '../assets/anh/HomePage/HomeAlt.jpg';
import InteractiveLinks from '../assets/anh/HomePage/InteractiveLinks.jpg';
import MainHome from '../assets/anh/HomePage/MainHome.jpg';
import Minimal from '../assets/anh/HomePage/Minimal.jpg';
import OnePage from '../assets/anh/HomePage/OnePage.jpg';
import RecordStudio from '../assets/anh/HomePage/RecordStudio.jpg';
import ShopHome from '../assets/anh/HomePage/ShopHome.jpg';
import VideosHome from '../assets/anh/HomePage/VideosHome.jpg';

function HomePage() {
  const templates = [
    { name: "Main Home", img: MainHome },
    { name: "One-Page", img: OnePage },
    { name: "Band Home", img: BandHome },
    { name: "Home Alt", img: HomeAlt },
    { name: "Minimal", img: Minimal },
    { name: "DJ/Event", img: DJEvent },
    { name: "Festival", img: Festival },
    { name: "Record Studio", img: RecordStudio },
    { name: "Interactive Links", img: InteractiveLinks },
    { name: "Artist Slider", img: ArtistSlider },
    { name: "Shop Home", img: ShopHome },
    { name: "Discography Home", img: DiscographyHome },
    { name: "Videos Home", img: VideosHome },
    { name: "Blog Home", img: BlogHome },
    { name: "Artist Metro", img: ArtistMetro },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8">15 Herion Templates</h1>
        <h2 className="text-2xl font-bold text-center mb-8">HomePages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div key={index} className="relative">
              <div
                className="bg-cover bg-center h-64 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundImage: `url(${template.img})` }}
              ></div>
              <div className="mt-2 text-center">
                <p className="text-lg font-normal">{template.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;