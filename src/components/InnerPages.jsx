import React from 'react';

// Import images for Inner Pages (giả định đường dẫn, bạn cần thay bằng đường dẫn thực tế)
import AboutUs from '../assets/anh/InnerPages/AboutUs.jpg';
import ContactUs from '../assets/anh/InnerPages/ContactUs.jpg';
import AboutMe from '../assets/anh/InnerPages/AboutMe.jpg';
import AboutTheBand from '../assets/anh/InnerPages/AboutTheBand.jpg';
import ComingSoon from '../assets/anh/InnerPages/ComingSoon.jpg';
import GetInTouch from '../assets/anh/InnerPages/GetInTouch.jpg';
import Maintenance from '../assets/anh/InnerPages/Maintenance.jpg';
import OurTeam from '../assets/anh/InnerPages/OurTeam.jpg';
import WhatWeDo from '../assets/anh/InnerPages/WhatWeDo.jpg';

function InnerPages() {
    const templates = [
        { name: "About Us", img: AboutUs },
        { name: "About The Band", img: AboutTheBand },
        { name: "About Me", img: AboutMe },
        { name: "Our Team", img: OurTeam },
        { name: "What We Do", img: WhatWeDo },
        { name: "Get In Touch", img: GetInTouch },
        { name: "Contact Us", img: ContactUs },
        { name: "Coming Soon", img: ComingSoon },
        { name: "Maintenance", img: Maintenance },


    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-8">9 Templates</h1>
                <h2 className="text-2xl font-bold text-center mb-8">Inner Pages</h2>
                <p className="text-gray-600 text-center mb-8">
                    We also created pre-made inner page layouts to make your life easier and allows you to put your site online as quickly as
                    <span className="block text-center">possible</span>
                </p>
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

export default InnerPages;