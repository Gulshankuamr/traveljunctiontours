import React, { useState } from "react";
import { motion } from "framer-motion";
const Gallery = () => {
  // 🎥 Video list (16:9 ratio)
  const allVideos = [
    "public/video/WhatsApp Video 2025-11-04 at 15.59.04_9b8ac031.mp4",
    "public/video/WhatsApp Video 2025-11-04 at 15.59.04_35841809.mp4",
    "public/video/WhatsApp Video 2025-11-04 at 15.59.05_f4dcd9bc.mp4",
    "public/video/WhatsApp Video 2025-11-04 at 15.59.06_102cc1f4.mp4",
    "public/video/WhatsApp Video 2025-11-04 at 15.59.06_fd51ed36.mp4",
    "public/video/WhatsApp Video 2025-11-04 at 16.01.22_b38e915c.mp4",
    "public/video/WhatsApp Video 2025-11-04 at 16.01.22_c5882321.mp4",
    "public/video/WhatsApp Video 2025-11-04 at 16.01.22_cbac2d4d.mp4",
    "public/video/video 1.mp4",
    "public/video/video 2.mp4",
    "public/video/video 3.mp4",







  ];

  // 🖼️ Image list
  const allImages = [
    "public/gallery/1.jpg",
    "public/gallery/2.jpg",
    "public/gallery/3.jpg",
    "public/gallery/4.jpg",
    "public/gallery/5.jpg",
    "public/gallery/6.jpg",
    "public/gallery/7.jpg",
    "public/gallery/8.jpg",
    "public/gallery/9.jpg",
    "public/gallery/10.jpg",
    "public/gallery/11.jpg",
    "public/gallery/12.jpg",
    "public/gallery/13.jpg",
    "public/gallery/14.jpg",


    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg",
  ];

  const [visibleVideos, setVisibleVideos] = useState(5);
  const [visibleImages, setVisibleImages] = useState(12);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLoadMoreVideos = () => setVisibleVideos((prev) => prev + 5);

  return (
    <section className=" bg-gray-50">
      <div className="w-full min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/gallerybg.jpeg')" }} // 🔹 apni gallery image ka path
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

          <div className="relative flex flex-col items-center justify-center h-full text-center text-white z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg">
                Explore Our Travel Gallery
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Take a glimpse of our curated journeys, capturing unforgettable moments from around the world
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="w-full py-16 px-4">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Travel Reels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {allVideos.slice(0, visibleVideos).map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video)}
                className="relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:scale-105 transition-all duration-300"
              >
                <video
                  src={video}
                  className="w-full h-[220px] object-cover rounded-2xl"
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100">
                  ▶ Play
                </div>
              </div>
            ))}
          </div>

          {visibleVideos < allVideos.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMoreVideos}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold shadow-md transition-all duration-300"
              >
                More Videos
              </button>
            </div>
          )}
        </section>

        {/* Image Section */}
        <section className="w-full py-16 px-4 bg-gray-50">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Gallery Images</h3>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 min-w-[900px]">
              {allImages.slice(0, visibleImages).map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className="relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100">
                    View
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>


      {/* 🎬 Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelectedVideo(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* 🖼️ Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl transition-transform duration-300"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
