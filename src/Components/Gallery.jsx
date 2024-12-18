import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const galleryImages = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg",
    "9.jpg", "10.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <img
            src={galleryImages[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className="rounded-lg w-full max-h-[500px] object-cover"
          />
        </div>
        <div className="flex justify-between">
          <button onClick={handlePreviousImage} className="bg-gray-700 text-white p-3 rounded hover:bg-gray-600">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={handleNextImage} className="bg-gray-700 text-white p-3 rounded hover:bg-gray-600">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
