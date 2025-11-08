import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Custom Trip Planning",
    subtitle: "Tailored itineraries for your dream vacation",
    icon: "🌍",
    desc: "We design personalized trips with curated destinations, stays, and experiences that match your mood, budget, and travel goals.",
  },
  {
    id: 2,
    title: "Hotel & Stay Booking",
    subtitle: "Comfort meets convenience",
    icon: "🏨",
    desc: "From cozy homestays to premium resorts — we handpick the best stays for you at exclusive prices.",
  },
  {
    id: 3,
    title: "Local Experiences",
    subtitle: "Travel like a local, not a tourist",
    icon: "🧭",
    desc: "Enjoy authentic local food, cultural walks, and unique adventures guided by trusted local experts.",
  },
  {
    id: 4,
    title: "Transport & Transfers",
    subtitle: "Smooth rides everywhere",
    icon: "🚖",
    desc: "Airport pickup, intercity transfers, and private vehicles — we make every journey seamless and worry-free.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-muted/30" id="services">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Our Services
        </motion.h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Everything you need to make your travel smooth, exciting, and truly memorable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{s.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-5">{s.desc}</p>

              {/* ✅ Book Now button navigates to /contact */}
              <NavLink to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                  Book Now
                </Button>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* ✅ Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary text-white rounded-2xl py-10 px-6 flex flex-col md:flex-row items-center justify-between shadow-lg"
        >
          <div className="text-left md:text-start">
            <h3 className="text-2xl font-bold">Ready to Explore?</h3>
            <p className="text-white/90 mt-2">
              Let's create a personalized journey you'll remember forever.
            </p>
          </div>

          {/* ✅ "Start Your Journey" button navigates to /contact */}
          <NavLink to="/contact">
            <Button
              size="lg"
              className="mt-6 md:mt-0 bg-white text-primary font-semibold hover:bg-white/90"
            >
              Start Your Journey
            </Button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}
