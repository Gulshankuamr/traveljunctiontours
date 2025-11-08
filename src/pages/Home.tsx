import { motion } from "framer-motion";
import Hero from "@/components/Hero";

import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { NavLink, Link } from "react-router-dom";
import package1 from "@/assets/package1.jpg";
import package2 from "@/assets/package2.jpg";
import package3 from "@/assets/package3.jpg";
import package4 from "@/assets/package4.jpg";
import aboutImage from "@/assets/about.jpg";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ServicesPage from "@/components/Services";

const Home = () => {
  // 🔹 Dham Packages Carousel State
  const dhamPackages = [
    { name: "Kedarnath Dham", image: "src/assets/dhame1 (1).jpg" },
    { name: "Badrinath Dham", image: "src/assets/dhame1 (2).jpg" },
    { name: "Gangotri Dham", image: "src/assets/dhame1 (3).jpg" },
    { name: "Yamunotri Dham", image: "src/assets/dhame1 (4).jpg" },
    { name: "Vaishno Devi", image: "src/assets/dhame1 (5).jpg" },
    { name: "Amarnath Dham", image: "src/assets/dhame1 (6).jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % dhamPackages.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [paused, dhamPackages.length]);

  // 🔹 Gallery Images
  const images = [
    "public/gallery/3.jpg",
    "public/gallery/4.jpg",
    "public/gallery/2.jpg",
    "public/gallery/6.jpg",
    "public/gallery/10.jpg",
  ];

  // 🔹 Featured Packages
  const featuredPackages = [
    {
      name: "Manali Escape",
      tagline: "❄️ Snow • Adventure • Serenity",
      image: package1,
      pdf: "/pdfs/manali.pdf",
    },
    {
      name: "Kashmir Paradise",
      tagline: "🏔️ Heaven on Earth Awaits You",
      image: package2,
      pdf: "/pdfs/kashmir.pdf",
    },
    {
      name: "Royal Udaipur",
      tagline: "👑 Lakes • Palaces • Culture",
      image: package3,
      pdf: "/pdfs/udaipur.pdf",
    },
    {
      name: "Valley of Flowers",
      tagline: "🌸 Nature’s Colorful Wonderland",
      image: package4,
      pdf: "/pdfs/valley.pdf",
    },
  ];

  const testimonials = [
    {
      name: "Gulshan Kumar",
      review:
        "Absolutely amazing! The team made every moment unforgettable. The Kedarnath trek was a life-changing experience with perfect arrangements and guidance.",
      rating: 5,
      location: "Uttar Pradesh, India",
    },
    {
      name: "Vikram Rao",
      review:
        "Professional, attentive, and extremely helpful guides. Thanks to Rahul sir, the spiritual tours were seamless, enriching, and highly memorable. Highly recommend!",
      rating: 5,
      location: "Bangalore, India",
    },
    {
      name: "Aarav Sharma",
      review:
        "Exceptional experience with this travel agency! Rahul bhaiya made the Himalayan trips perfectly organized, offering great value and memories to cherish forever.",
      rating: 5,
      location: "Delhi, India",
    },
  ];


  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* ✅ Featured Packages */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Featured Packages
          </motion.h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Click on any destination to explore its full travel guide (PDF)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 border border-border bg-card"
              >
                <a href={pkg.pdf} target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                </a>

                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-primary font-medium tracking-wide">
                    {pkg.tagline}
                  </p>

                  <div className="mt-3 text-xs text-muted-foreground">
                    📞 +91 7733094806 • ✉️ traveljunctionstours@gmail.com
                    <p className="text-[11px] text-primary mt-1 font-medium">
                      Travel Junction Tours
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink to="/packages">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Packages
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About Us
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-6">
              At <strong>Travel Junction Tours</strong>, we believe that travel
              is more than just ticking destinations off a list. It's about
              experiencing the world in its purest and most colorful form.
            </p>
            <p className="text-muted-foreground mb-6">
              Born from a passion for exploring hidden gems, connecting
              cultures, and creating unforgettable journeys, we specialize in
              curating personalized travel experiences that leave lasting
              impressions.
            </p>
            <NavLink to="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="About Travel Junction Tours"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ✅ Dham Packages Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-white overflow-hidden py-16"
        id="packages"
      >
        <div
          className="relative w-full h-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${dhamPackages.length * 100}%`,
            }}
          >
            {dhamPackages.map((pkg, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative group h-[80vh] flex items-center justify-center bg-black"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-4xl font-bold drop-shadow-lg bg-black/50 px-8 py-4 rounded-lg">
                    {pkg.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* 🔘 Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {dhamPackages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${current === index
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-400 hover:bg-gray-500"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ GALLERY SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Our Travel Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[280px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center"
          >
            What Our Travelers Say
          </motion.h2>
          <p className="text-muted-foreground text-lg text-center mb-12">
            Real experiences from real travelers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-10">
            <NavLink to="/testimonials">
              <Button variant="outline" size="lg">
                Read More Reviews
              </Button>
            </NavLink>
          </div>

        </div>
      </section>

      <ServicesPage />

    </div>
  );
};

export default Home;
