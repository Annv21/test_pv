import React, { useState } from 'react';

// Import images from the correct path (check if these files exist)
import image1 from '../assets/anh/SellYourMerch/3-cols.jpg';
import image2 from '../assets/anh/SellYourMerch/cart.jpg';
import image3 from '../assets/anh/SellYourMerch/checkout.jpg';
import image4 from '../assets/anh/SellYourMerch/product-gallery.jpg';
import image5 from '../assets/anh/SellYourMerch/product-mp3.jpg';
import image6 from '../assets/anh/SellYourMerch/stor-sidebar.jpg';
import image7 from '../assets/anh/SellYourMerch/store-alt.jpg';

function SellYourMerch() {
  const [offset, setOffset] = useState(0); // Sử dụng offset để quay mãi
  const images = [image1, image2, image3, image4, image5, image6, image7]; // Array of images
  const imagesPerSlide = 3; // Each slide shows 3 images
  const totalSlides = Math.ceil(images.length / imagesPerSlide); // Total slides: 7 images / 3 = 3 slides

  // Tạo danh sách ảnh mở rộng để lặp lại mượt mà
  const extendedImages = [...images, ...images, ...images]; // Lặp lại danh sách 3 lần

  // Handle next slide (move continuously to the right)
  const handleNext = () => {
    setOffset((prevOffset) => prevOffset - 1); // Tăng offset âm để quay sang phải
  };

  // Handle previous slide (move continuously to the left)
  const handlePrev = () => {
    setOffset((prevOffset) => prevOffset + 1); // Giảm offset dương để quay sang trái
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-500 mb-2">Sell Your Merch</h2>
        <h3 className="text-2xl font-semibold text-gray-500 mb-6">WOOCOMMERCE SHOP</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Sell your merch online using the most powerful and secure e-commerce WordPress theme: WooCommerce. Herion is built to integrates WooCommerce smoothly in its design.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div className="flex items-center">
            {/* Nút trái (di chuyển slide sang trái mãi) */}
            <button
              onClick={handlePrev}
              className="absolute left-0 text-gray-500 hover:text-gray-700 focus:outline-none z-10 px-4 py-2 text-3xl"
            >
              &gt;
            </button>

            {/* Ảnh trong carousel */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${offset * (100 / imagesPerSlide)}%)`,
                width: `${extendedImages.length * (100 / imagesPerSlide)}%`,
              }}
            >
              {extendedImages.map((image, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    onError={(e) => {
                      console.error(`Image failed to load at index ${index}: ${image}`);
                      e.target.src = 'path/to/fallback-image.jpg'; // Thay bằng đường dẫn ảnh dự phòng nếu cần
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Nút phải (di chuyển slide sang phải mãi) */}
            <button
              onClick={handleNext}
              className="absolute right-0 text-gray-500 hover:text-gray-700 focus:outline-none z-10 px-4 py-2 text-3xl"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellYourMerch;