import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, IndianRupee } from "lucide-react";

interface PackageCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  location: string;
  delay?: number;
}

const PackageCard = ({ title, description, image, duration, price, location, delay = 0 }: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />

          {/* price button */}

          {/* <div className="absolute top-4 right-4  text-secondary-foreground px-3 py-1 rounded-full font-semibold text-sm">
            {price}
          </div> */}
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{duration}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary hover:bg-primary/90">View Details</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PackageCard;
