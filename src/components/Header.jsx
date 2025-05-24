import React from 'react';

function Header() {
  return (
    <div className="fixed top-0 w-full z-50"> {/* Thêm fixed, top-0, w-full, z-50 để cố định header */}
      <div className="bg-gray-900 text-white h-16 flex justify-between items-center px-6 relative">
        <div className="flex items-center space-x-1">
          <span className="text-green-500 text-2xl">🌱</span>
          <span className="font-semibold text-xl tracking-tight">envato market</span>
        </div>
        <div>
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg flex justify-end">
            Buy now
          </button>
        </div>
      </div>
      <div className="bg-transparent h-16 hover:bg-white hover:text-gray-900 text-white flex justify-between items-center px-6 relative transition-all duration-300">
        <div className="flex items-center space-x-1">
          <span className="text-green-500 text-2xl group-hover:text-gray-900">H</span> {/* Thêm group-hover để đổi màu khi hover */}
        </div>
        <div>
          <span className="text-green-500 font-semibold py-2 px-6 rounded-lg flex justify-end group-hover:text-gray-900">
            Buy now
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;