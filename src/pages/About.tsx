import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import heroBg from "@/assets/aboutbg.jpg"; // 🖼️ add an attractive travel image here (2560x1440 recommended)

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create meaningful travel experiences that connect people with cultures, nature, and themselves.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted travel partner, inspiring wanderlust and making the world more accessible.",
    },
    {
      icon: Heart,
      title: "Our Passion",
      description:
        "We are passionate about discovering hidden gems and sharing the beauty of every destination.",
    },
    {
      icon: Award,
      title: "Our Commitment",
      description:
        "Excellence in service, sustainable tourism, and creating lasting memories for every traveler.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">
              Discover the Soul of Travel
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              At <span className="font-semibold text-primary">Travel Junction Tours</span>, every journey is more than just a destination —
              it’s an emotion, a story, and a lifetime memory waiting to unfold.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold shadow-lg hover:bg-primary/80 transition-all"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Travel Junction Tours</strong> isn’t just a travel company — it’s a movement to rediscover
                  the magic of this planet. From tranquil Himalayan treks to royal Rajasthani tours, we craft stories that stay forever.
                </p>
                <p>
                  Our team of passionate explorers ensures every itinerary feels personalized, every trip meaningful, and every traveler connected
                  to the spirit of adventure.
                </p>
                <p>
                  Whether it’s spiritual journeys, adventure trails, or cultural experiences — we bring you closer to the heart of the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutImage}
                alt="Our Team"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <value.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We go above and beyond to ensure your travel experience is exceptional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">24/7</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock assistance for all your travel needs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-secondary">100%</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Best Price Guarantee</h3>
              <p className="text-muted-foreground">Competitive prices without compromising on quality</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-accent">5★</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Expert Guides</h3>
              <p className="text-muted-foreground">Experienced and knowledgeable local guides</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
