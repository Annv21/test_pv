import React from 'react';
import anh2 from '../assets/anh/anh2.png';

function EasyToUse() {
    return (
        <section className="py-16 bg-gray-900 text-white min-h-[80vh] flex items-center">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left Side: Image */}
                <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8 pl-0 mt-0 -ml-6">
                    <img
                        src={anh2}
                        alt="anh2"
                        className="w-full h-full rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Right Side: Text and Numbers */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4 text-gray-400" style={{ fontFamily: "'Dancing Script', cursive" }}>Easy To Use</h2>
                    <h3 className="text-2xl font-semibold mb-6 text-white-500">NO CODING REQUIRED</h3>
                    <p className="text-gray-400 mb-8">
                        Herion comes with an advanced drag and drop page builder to help you create your website easily and quickly.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-12">
                        <div>
                            <h4 className="text-4xl font-bold">
                                <span className="text-white">200</span>
                                <span className="text-red-500">+</span>
                            </h4>
                            <p className="text-gray-400">DEMO LAYOUTS</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold">
                                <span className="text-white">100</span>
                                <span className="text-red-500">+</span>
                            </h4>
                            <p className="text-gray-400">CONTENT ELEMENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EasyToUse;