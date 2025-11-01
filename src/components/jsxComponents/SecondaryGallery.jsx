import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * @param {{ images: string[] }} props
 */
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-8">
          {/* Flèche gauche */}
          <button
            onClick={prevImage}
            className="absolute left-8 bg-white/10 hover:bg-orange-500/80 text-white p-4 rounded-full backdrop-blur-md transition-all shadow-lg"
            aria-label="Image précédente"
          >
            <ChevronLeft size={34} />
          </button>

          {/* Image principale */}
          <div className="relative max-w-5xl w-full">
            <img
              src={images[currentIndex]}
              alt={`Selected image ${currentIndex + 1}`}
              className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Bouton de fermeture */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-red-500/80 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg"
              aria-label="Fermer la galerie"
            >
              <X size={26} />
            </button>
          </div>

          {/* Flèche droite */}
          <button
            onClick={nextImage}
            className="absolute right-8 bg-white/10 hover:bg-orange-500/80 text-white p-4 rounded-full backdrop-blur-md transition-all shadow-lg"
            aria-label="Image suivante"
          >
            <ChevronRight size={34} />
          </button>
        </div>
      )}
    </div>
  );
}
