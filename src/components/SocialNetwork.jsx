import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube, faInstagram, faXTwitter, faFacebook, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';

function SocialNetwork() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/People-Watching-Concert-FREE-STOCK-FOOTAGE-1080p-FULL-HD.mp4" type="video/mp4" />
      </video>
      <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Social Integration</h1>
        <h2 className="text-2xl mb-6">SOCIAL NETWORK & MUSIC PLATFORM ORIENTED</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Embed your music and social feeds seamlessly with Herion. Display your media and content directly from Spotify, YouTube, Instagram, Bandsintown, Twitter and more...
        </p>
        <div className="flex justify-center space-x-8">
          <FontAwesomeIcon icon={faSpotify} className="text-4xl" /> {/* Spotify */}
          <FontAwesomeIcon icon={faYoutube} className="text-4xl" /> {/* YouTube */}
          <FontAwesomeIcon icon={faInstagram} className="text-4xl" /> {/* Instagram */}
          <FontAwesomeIcon icon={faGuitar} className="text-4xl" /> {/* Bandsintown */}
          <FontAwesomeIcon icon={faXTwitter} className="text-4xl" /> {/* Twitter (X) */}
          <FontAwesomeIcon icon={faFacebook} className="text-4xl" /> {/* Facebook */}
          <FontAwesomeIcon icon={faMailchimp} className="text-4xl" /> {/* Mailchimp */}
        </div>
        <p className="mt-4 text-lg">and more...</p>
      </div>
    </section>
  );
}

export default SocialNetwork;