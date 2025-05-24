import React, { useState, useEffect } from 'react';

// Import images from the correct path (check if these files exist)
import image1 from '../assets/anh/SellYourMerch/3-cols.jpg';
import image2 from '../assets/anh/SellYourMerch/cart.jpg';
import image3 from '../assets/anh/SellYourMerch/checkout.jpg';
import image4 from '../assets/anh/SellYourMerch/product-gallery.jpg';
import image5 from '../assets/anh/SellYourMerch/product-mp3.jpg';
import image6 from '../assets/anh/SellYourMerch/stor-sidebar.jpg';
import image7 from '../assets/anh/SellYourMerch/store-alt.jpg';

function SellYourMerch() {
  const [currentSlide, setCurrentSlide] = useState(0); // Theo dõi slide hiện tại
  const images = [image1, image2, image3, image4, image5, image6, image7]; // Array of images
  const totalSlides = 3; // Tổng số slide cố định: 3 slide (123, 345, 567)

  // Định nghĩa các slide cố định
  const slides = [
    [image1, image2, image3], // Slide 1: 123
    [image3, image4, image5], // Slide 2: 345
    [image5, image6, image7], // Slide 3: 567
  ];

  // Handle next slide (move to the right in a circular manner)
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Chuyển sang slide tiếp theo, quay lại 0 khi đến cuối
  };

  // Handle previous slide (move to the left in a circular manner)
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides); // Chuyển sang slide trước, quay lại cuối khi ở đầu
  };

  // Tự động chạy slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Tự động gọi handleNext để chuyển slide
    }, 3000); // Chuyển slide mỗi 3 giây (3000ms)

    // Dọn dẹp interval khi component unmount hoặc khi người dùng tương tác
    return () => clearInterval(interval);
  }, []); // Rỗng để chỉ chạy một lần khi component mount

  // Dừng tự động chạy khi người dùng nhấn nút và khởi động lại sau 3 giây
  const handleUserInteraction = () => {
    clearInterval(window.autoSlideInterval); // Dừng interval hiện tại
    window.autoSlideInterval = setInterval(() => {
      handleNext();
    }, 3000); // Khởi động lại interval
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-500 mb-2">Sell YourMerch</h2>
        <h3 className="text-2xl font-semibold text-gray-500 mb-6">WOOCOMMERCE SHOP</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Sell your merch online using the most powerful and secure e-commerce WordPress theme: WooCommerce. Herion is built to integrates WooCommerce smoothly in its design.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div className="flex items-center">
            {/* Nút trái (di chuyển slide sang trái theo vòng tròn) */}
            <button
              onClick={() => {
                handlePrev();
                handleUserInteraction(); // Gọi khi người dùng tương tác
              }}
              className="absolute left-0 text-gray-500 hover:text-gray-700 focus:outline-none z-10 px-4 py-2 text-3xl"
            >
              &gt;
            </button>

            {/* Ảnh trong carousel */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`, // Dịch chuyển 100% mỗi slide
                width: `${totalSlides * 100}%`, // Chiều rộng tổng cộng của tất cả slide
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex w-full flex-shrink-0"
                >
                  {slide.map((image, index) => (
                    <div key={index} className="w-1/3 px-4">
                      <img
                        src={image}
                        alt={`Product ${slideIndex * 3 + index + 1}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                        onError={(e) => {
                          console.error(`Image failed to load at index ${slideIndex * 3 + index}: ${image}`);
                          e.target.src = 'path/to/fallback-image.jpg'; // Thay bằng đường dẫn ảnh dự phòng nếu cần
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Nút phải (di chuyển slide sang phải theo vòng tròn) */}
            <button
              onClick={() => {
                handleNext();
                handleUserInteraction(); // Gọi khi người dùng tương tác
              }}
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