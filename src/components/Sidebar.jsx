import React from 'react';
function Sidebar() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url('../../public/assets/anh/HomePage/Main Home.png')" }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Music WordPress Theme
        </h1>
        <p className="text-2xl md:text-4xl font-bold mb-2">
          DEDICATED TO BANDS, LABELS,
        </p>
        <p className="text-2xl md:text-4xl font-bold mb-4">
          FESTIVALS, MUSIC STORE AND MORE...
        </p>
        <p className="text-sm md:text-base uppercase mb-6">No coding required</p>
        <button className="border-2 border-black text-black px-6 py-2 uppercase font-semibold hover:bg-black hover:text-white transition">
          View Demos
        </button>
      </div>
    </section>
  );
}

export default Sidebar;