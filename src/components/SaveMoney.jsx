import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import icon1 from '../assets/anh/Icon/Icon1.jpg';
import icon2 from '../assets/anh/Icon/Icon2.jpg';
import icon3 from '../assets/anh/Icon/Icon3.png';

function SaveMoney() {
  const tips = [
    {
      title: "WPBakery Page Builder",
      highlight: "Save $74",
      description: "• Full Version Included\n• Unlimited design options\n• Easy to use, no coding\n• Fast & Easy",
      icon: icon1,
      heightClass: "h-[500px]",
    },
    {
      title: "Slider Revolution",
      highlight: "Save $109",
      description: "• Full Version Included\n• Powerful visual editor\n• Advanced Animations\n• For Sliders, Headers and more",
      icon: icon2,
      heightClass: "h-[450px]",
    },
    {
      title: "Wolf Page Builder Extension",
      highlight: "Exclusive",
      description: "• Only Available with our Themes\n• Extends WPBakery Page Builder\n• Adds Tons of Elements and Options",
      icon: icon3,
      heightClass: "h-[500px]",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-500">Save Money</h2>
          <p className="text-lg text-gray-600">$90 OF PREMIUM PLUGINS INCLUDED</p>
          <p className="text-sm text-gray-500">
            Includes WPBakery Page Builder and Slider Revolution premium plugins. Save money and start building your website
            using the best tools available on the market today.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-12 shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50 transition-all duration-300 text-center ${tip.heightClass || 'h-[500px]'}`}
            >
              <img src={tip.icon} alt={tip.title} className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{tip.title}</h3>
              <p className="text-red-600 font-semibold mb-4">{tip.highlight}</p>
              <div className="text-gray-600 whitespace-pre-line text-center">
                {tip.description.split('\n').map((line, i) => (
                  <p key={i} className="flex items-center  space-x-4 py-2">
                    {line.startsWith('•') ? (
                      <>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ color: 'red' }}
                          className="w-6 h-6"
                        />
                        <span className="text-left">{line.replace('•', '').trim()}</span>
                      </>
                    ) : (
                      <span className="text-left">{line}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <img src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/george-mihaila-j-LdPn1YFGA-unsplash.jpg" alt="anh4" className="mx-auto" />
      </div>
    </section>
  );
}

export default SaveMoney;