import { useState } from "react";

export default function SecondaryGallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openImage = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-white shadow-md rounded-3xl p-6 space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">
        Galerie secondaire
      </h4>

      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Secondary design image ${idx + 1}`}
            className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openImage(idx)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <img
              src={images[currentIndex]}
              alt={`Selected image ${currentIndex + 1}`}
              className="w-full h-auto rounded-xl shadow-lg"
            />

            {/* Navigation */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-2xl p-3 bg-black/50 rounded-r-full hover:bg-black/70 transition"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl p-3 bg-black/50 rounded-l-full hover:bg-black/70 transition"
              onClick={nextImage}
            >
              ›
            </button>

            {/* Close */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold p-2 hover:text-orange-400"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
