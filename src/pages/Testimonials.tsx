import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const allTestimonials = [
    {
      name: "Rohit Mehta",
      review:
        "Amazing experience! The Manali trek was unforgettable. Rahul Sir's guidance made the journey seamless and memorable.",
      rating: 5,
      location: "Lucknow, Uttar Pradesh, India",
    },
    {
      name: "Priya Kapoor",
      review:
        "Royal Udaipur tour exceeded all expectations. Rahul Bhaiya ensured our family was comfortable and arrangements were flawless.",
      rating: 5,
      location: "Delhi, India",
    },
    {
      name: "Aarav Sharma",
      review:
        "Kashmir valley was breathtaking! Rahul Sir's tips and recommendations made the trip perfect. Highly recommend Travel Junction Tours.",
      rating: 5,
      location: "Amritsar, Punjab, India",
    },
    {
      name: "Neha Gupta",
      review:
        "The Manali adventure was smooth and stress-free. Rahul Bhaiya took care of every detail. Loved the local culture experience!",
      rating: 5,
      location: "Kanpur, Uttar Pradesh, India",
    },
    {
      name: "Emily Watson",
      review:
        "I loved the Manali and Royal Udaipur trips. Rahul Sir's guidance and friendly approach made the experience amazing for an international traveler.",
      rating: 5,
      location: "London, UK",
    },
    {
      name: "Vikram Rao",
      review:
        "Kashmir tour was magical! Rahul Bhaiya's suggestions for sightseeing were spot on. Professional and fun experience.",
      rating: 5,
      location: "Bengaluru, Karnataka, India",
    },
    {
      name: "Aanya Desai",
      review:
        "Royal Udaipur heritage tour was stunning. Rahul Sir ensured our family enjoyed every moment. Highly recommend for Indian travelers.",
      rating: 5,
      location: "Mumbai, Maharashtra, India",
    },
    {
      name: "Sanjay Patel",
      review:
        "Char Dham Yatra was spiritually uplifting. Rahul Bhaiya handled everything perfectly. Truly unforgettable!",
      rating: 5,
      location: "Ahmedabad, Gujarat, India",
    },
    {
      name: "Ritika Mehta",
      review:
        "Kashmir and Manali tours were beyond expectations. Rahul Sir's attention to detail made all the difference. Amazing experience!",
      rating: 5,
      location: "Chandigarh, Punjab, India",
    },
    {
      name: "Kavya Reddy",
      review:
        "Tungnath trek was challenging yet rewarding. Rahul Bhaiya ensured safety and shared valuable tips. Very professional and friendly!",
      rating: 5,
      location: "Hyderabad, Telangana, India",
    },
  ];


  const [visible, setVisible] = useState(9);

  const handleShowMore = () => {
    setVisible((prev) => prev + 9);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Traveler Testimonials
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Hear from travelers who experienced unforgettable journeys with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.slice(0, visible).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {visible < allTestimonials.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-semibold shadow-md transition-all duration-300"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                1000+
              </div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Destinations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                5★
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
