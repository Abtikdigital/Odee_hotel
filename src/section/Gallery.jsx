import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryImage1 from "../assets/videos/gallery/Image1.JPG";
import GalleryImage2 from "../assets/videos/gallery/Image2.JPG";
import GalleryImage3 from "../assets/videos/gallery/Image3.JPG";
import GalleryImage4 from "../assets/videos/gallery/Image4.JPG";
import GalleryImage5 from "../assets/videos/gallery/Image5.JPG";
import GalleryVideo1 from "../assets/videos/gallery/Video1.mp4";
import GalleryVideo2 from "../assets/videos/gallery/Video2.mp4";
import GalleryVideo3 from "../assets/videos/gallery/Video3.mp4";
import GalleryVideo4 from "../assets/videos/gallery/Video4.mp4";
import GalleryVideo5 from "../assets/videos/gallery/Video5.mp4";

// Gallery items - mix of images and videos
const galleryItems = [
  {
    id: 1,
    type: "image",
    src: GalleryImage1,
    video: null,
    title: "Warm Ode Welcome Lobby",
    category: "Interior"
  },
  {
    id: 2,
    type: "image",
    src: GalleryImage2,
    video: null,
    title: "Premium Banquet Setup",
    category: "Events"
  },
  {
    id: 3,
    type: "image",
    src: GalleryImage3,
    video: null,
    title: "Elegant Dining Ambience",
    category: "Dining"
  },
  {
    id: 4,
    type: "image",
    src: GalleryImage4,
    video: null,
    title: "Signature Dessert Spread",
    category: "Dining"
  },
  {
    id: 5,
    type: "image",
    src: GalleryImage5,
    video: null,
    title: "Cozy Lounge Seating",
    category: "Interior"
  },
  {
    id: 6,
    type: "video",
    src: GalleryImage1,
    video: GalleryVideo1,
    title: "Ode Signature Experience",
    category: "Video"
  },
  {
    id: 7,
    type: "video",
    src: GalleryImage2,
    video: GalleryVideo2,
    title: "Chef Special Creations",
    category: "Video"
  },
  {
    id: 8,
    type: "video",
    src: GalleryImage3,
    video: GalleryVideo3,
    title: "Live Catering Moments",
    category: "Video"
  },
  {
    id: 9,
    type: "video",
    src: GalleryImage4,
    video: GalleryVideo4,
    title: "Festive Celebrations",
    category: "Video"
  },
  {
    id: 10,
    type: "video",
    src: GalleryImage5,
    video: GalleryVideo5,
    title: "Behind The Scenes",
    category: "Video"
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const galleryRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [videoSlide, setVideoSlide] = useState(0);
  const [imageSlide, setImageSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mediaWithIndex = galleryItems.map((item, index) => ({
    ...item,
    originalIndex: index,
  }));

  const videoItems = mediaWithIndex.filter((item) => item.type === "video");
  const imageItems = mediaWithIndex.filter((item) => item.type === "image");

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gallery-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  const navigateLightbox = (direction) => {
    if (selectedIndex === null) return;
    const totalItems = galleryItems.length;
    const newIndex =
      direction === "next"
        ? (selectedIndex + 1) % totalItems
        : (selectedIndex - 1 + totalItems) % totalItems;

    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const selectedItem =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const chunkItems = (items, size) => {
    if (size <= 0) return [items];
    const chunks = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
    return chunks;
  };

  const videoItemsPerSlide =
    viewportWidth < 640 ? 1 : viewportWidth < 1024 ? 2 : viewportWidth < 1280 ? 3 : 4;
  const imageItemsPerSlide =
    viewportWidth < 640 ? 1 : viewportWidth < 1024 ? 3 : 4;

  useEffect(() => {
    setVideoSlide(0);
  }, [videoItemsPerSlide]);

  useEffect(() => {
    setImageSlide(0);
  }, [imageItemsPerSlide]);

  const videoChunks = chunkItems(videoItems, videoItemsPerSlide);
  const imageChunks = chunkItems(imageItems, imageItemsPerSlide);

  return (
    <section className="section-wrapper bg-white space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 border-b border-[#D4A056]/30 overflow-hidden premium-fade-in">
      <div className="relative z-20 space-y-6 sm:space-y-8 md:space-y-10">
        <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="premium-badge">
              <span>ODE SIGNATURE GALLERY</span>
            </div>
          </div>
          <h2 className="heading-2">Where Moments Meet Atmosphere</h2>
          <p className="paragraph-1 font-2 text-muted-light leading-relaxed">
            Each frame is captured during actual Ode experiences—families arriving for brunch, chefs torching desserts, planners styling mandaps—so you can sense the energy of the property before stepping in.
          </p>
        </div>

        <div
          ref={galleryRef}
          className="space-y-10 sm:space-y-12 mt-4 sm:mt-6 md:mt-8"
        >
          {/* Video Row */}
          <section className="space-y-3 sm:space-y-4">
            <div className="text-left space-y-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#B28B5B] font-semibold">
                  Video Stories
                </p>
                <h3 className="heading-3 text-left">Immersive Motion Moments</h3>
              </div>
              <p className="paragraph-1 text-muted-light max-w-2xl">
                Short loops straight from the property — baristas at work, live
                catering counters, and the warm bustle that defines Ode.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#D4A056]/20 bg-white/40">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${videoSlide * 100}%)` }}
              >
                {videoChunks.map((chunk, chunkIndex) => (
                  <div
                    key={`video-chunk-${chunkIndex}`}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full flex-shrink-0 px-4 py-4"
                  >
                    {chunk.map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="gallery-item premium-fade-in group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-premium-card cursor-pointer"
                        style={{ animationDelay: `${index * 0.08}s` }}
                        onClick={() => openLightbox(item.originalIndex)}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          {item.video && (
                            <video
                              className="w-full h-full object-cover"
                              muted
                              loop
                              autoPlay
                              playsInline
                              preload="metadata"
                              poster={item.src}
                            >
                              <source src={item.video} type="video/mp4" />
                              <source src={item.video} type="video/webm" />
                            </video>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#5A3825]/80 via-[#5A3825]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 font-serif-elegant">
                              {item.title}
                            </h3>
                            <p className="text-[#D4A056] text-xs sm:text-sm font-medium">
                              Immersive video
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {videoChunks.length > 1 && (
              <div className="flex justify-center gap-2 pt-4">
                {videoChunks.map((_, index) => (
                  <button
                    key={`video-dot-${index}`}
                    onClick={() => setVideoSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      videoSlide === index
                        ? "w-10 bg-gradient-to-r from-[#5A3825] to-[#2C1A12] shadow-lg"
                        : "w-2.5 bg-[#C9B4A3] hover:bg-[#5A3825]"
                    }`}
                    aria-label={`Go to video slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            )}
          </section>

          {/* Image Row */}
          <section className="space-y-3 sm:space-y-4">
            <div className="text-left space-y-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#B28B5B] font-semibold">
                  Photo Highlights
                </p>
                <h3 className="heading-3 text-left">Timeless Still Frames</h3>
              </div>
              <p className="paragraph-1 text-muted-light max-w-2xl">
                Interiors, table settings, and curated corners that convey the
                warmth of our spaces without calling out any specific venue.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[#D4A056]/20 bg-white/40">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${imageSlide * 100}%)` }}
              >
                {imageChunks.map((chunk, chunkIndex) => (
                  <div
                    key={`image-chunk-${chunkIndex}`}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full flex-shrink-0 px-4 py-4"
                  >
                    {chunk.map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="gallery-item premium-fade-in group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-premium-card cursor-pointer"
                        style={{ animationDelay: `${index * 0.08}s` }}
                        onClick={() => openLightbox(item.originalIndex)}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#5A3825]/80 via-[#5A3825]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 font-serif-elegant">
                              {item.title}
                            </h3>
                            <p className="text-[#D4A056] text-xs sm:text-sm font-medium">
                              Lifestyle capture
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {imageChunks.length > 1 && (
              <div className="flex justify-center gap-2 pt-4">
                {imageChunks.map((_, index) => (
                  <button
                    key={`image-dot-${index}`}
                    onClick={() => setImageSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      imageSlide === index
                        ? "w-10 bg-gradient-to-r from-[#5A3825] to-[#2C1A12] shadow-lg"
                        : "w-2.5 bg-[#C9B4A3] hover:bg-[#5A3825]"
                    }`}
                    aria-label={`Go to image slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl lg:max-w-6xl w-full max-h-[90vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-10 sm:-top-12 right-0 z-10 bg-white/90 backdrop-blur-md text-[#5A3825] p-2.5 sm:p-3 rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110 border-2 border-[#D4A056]/50"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4A056]/50">
              {selectedItem.type === "video" && selectedItem.video ? (
                selectedItem.video.includes('youtube.com') || selectedItem.video.includes('youtu.be') ? (
                  <div className="w-full aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={selectedItem.video}
                      title={selectedItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>
                ) : (
                  <video
                    className="w-full max-h-[80vh] object-contain"
                    controls
                    playsInline
                    preload="auto"
                    poster={selectedItem.src}
                  >
                    <source src={selectedItem.video} type="video/mp4" />
                    <source src={selectedItem.video} type="video/webm" />
                  </video>
                )
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6">
                <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 font-serif-elegant">
                  {selectedItem.title}
                </h3>
                <p className="text-[#D4A056] font-medium text-sm sm:text-base">{selectedItem.category}</p>
              </div>
            </div>

            {/* Navigation in Lightbox */}
            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox("prev");
                  }}
                  className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-xl text-[#5A3825] p-3 sm:p-3.5 md:p-4 rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110 border-2 border-[#D4A056]/50"
                >
                  <ChevronLeft size={24} className="sm:w-7 sm:h-7" strokeWidth={2.5} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox("next");
                  }}
                  className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-xl text-[#5A3825] p-3 sm:p-3.5 md:p-4 rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110 border-2 border-[#D4A056]/50"
                >
                  <ChevronRight size={24} className="sm:w-7 sm:h-7" strokeWidth={2.5} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

