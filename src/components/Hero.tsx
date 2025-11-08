import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/herovideo.mp4"; // 👈 your looping background video

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* 🔹 Centered Animated Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* 🌍 Heading with line animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-3xl font-extrabold text-white mb-6 leading-tight tracking-wide drop-shadow-lg"
        >
          Discover the World with{" "}
          <span className="text-primary drop-shadow-[0_0_10px_#00bfff]">
            Travel Junction
          </span>
        </motion.h1>

        {/* ✨ Subheading with fade delay */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-10 italic tracking-wide"
        >
          “Dream it, plan it, live it — your next journey starts here.”
        </motion.p>

        {/* 🌈 Button with slight bounce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        >
          <NavLink to="/packages">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-10 py-6 shadow-xl rounded-full transition-all duration-300 hover:scale-105"
            >
              ✈️ Explore Now
            </Button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
