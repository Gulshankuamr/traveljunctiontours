import { motion } from "framer-motion";
import PackageCard from "@/components/PackageCard";
import package1 from "@/assets/package1.jpg";
import package2 from "@/assets/package2.jpg";
import package3 from "@/assets/package3.jpg";
import package4 from "@/assets/package4.jpg";

const Packages = () => {
  const packages = [
    {
      title: "Kedarnath Yatra",
      description: "Embark on a spiritual journey to one of the holiest Shiva temples in the Himalayas with comfortable accommodation and experienced guides.",
      image: package1,
      duration: "5 Days / 6 Nights",

      location: "Uttarakhand, India",
    },
    {
      title: "Badrinath Dham",
      description: "Visit the sacred Badrinath temple amidst breathtaking mountain scenery. Includes visits to Mana village and other holy sites.",
      image: package2,
      duration: "4 Days / 5 Nights",
      price: "₹6,999",
      location: "Uttarakhand, India",
    },
    {
      title: "Tungnath Trek",
      description: "Trek to the world's highest Shiva temple with panoramic Himalayan views. Perfect for adventure seekers and nature lovers.",
      image: package3,
      duration: "3 Days / 4 Nights",
      price: "₹5,499",
      location: "Uttarakhand, India",
    },
    {
      title: "Valley of Flowers",
      description: "Explore the stunning alpine valley filled with rare and exotic flowers. A UNESCO World Heritage Site trek experience.",
      image: package4,
      duration: "6 Days / 7 Nights",
      price: "₹9,999",
      location: "Uttarakhand, India",
    },
    {
      title: "Complete Char Dham Yatra",
      description: "Experience all four sacred sites - Yamunotri, Gangotri, Kedarnath, and Badrinath in one comprehensive spiritual journey.",
      image: package1,
      duration: "10 Days / 11 Nights",
      price: "₹15,999",
      location: "Uttarakhand, India",
    },
    {
      title: "Kedarnath + Badrinath Combo",
      description: "Combine two of the most revered pilgrimage sites in one seamless journey with expert guidance and comfortable stays.",
      image: package2,
      duration: "7 Days / 8 Nights",
      price: "₹12,999",
      location: "Uttarakhand, India",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/about-bg-5.jpg')" }} // 🔹 apni image ka path yaha do
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg">
              Our Tour Packages
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated travel packages designed for unforgettable experiences
            </p>
          </motion.div>
        </div>
      </section>


      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What's Included</h2>
            <p className="text-muted-foreground text-lg">Every package comes with these benefits</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg text-center shadow-md"
            >
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="font-bold mb-2 text-foreground">Accommodation</h3>
              <p className="text-sm text-muted-foreground">Comfortable stays at selected hotels</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-6 rounded-lg text-center shadow-md"
            >
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold mb-2 text-foreground">Transportation</h3>
              <p className="text-sm text-muted-foreground">AC vehicle for all transfers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-lg text-center shadow-md"
            >
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-bold mb-2 text-foreground">Meals</h3>
              <p className="text-sm text-muted-foreground">Breakfast and dinner included</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-lg text-center shadow-md"
            >
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h3 className="font-bold mb-2 text-foreground">Expert Guide</h3>
              <p className="text-sm text-muted-foreground">Experienced local guides</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
