import { NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import logo from "@/assets/logo.png"; // your company logo

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
              <span className="font-bold text-lg">Travel Junction Tours</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover the beauty of Rajasthan with <b>Travel Junction Tours</b>.
              Experience unforgettable journeys, explore rich heritage, and
              create lifelong memories with our expert travel services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold mb-4 text-foreground">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/packages"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Packages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-semibold mb-4 text-foreground">Contact Info</h6>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>
                  Near Junagarh Fort, Bikaner, Rajasthan <br />
                  <b>State:</b> 07-Rajasthan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:7733094806"
                  className="hover:text-primary transition-colors"
                >
                  +91 7733094806
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:traveljunctionstours@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  traveljunctionstours@gmail.com
                </a>
              </li>
              <li className="mt-2 text-sm">
                <b>GSTIN:</b> 08GCGPR6526A1ZJ
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="font-semibold mb-4 text-foreground">Follow Us</h6>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DWjJ8KDYL/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/traveljunctiontours?igsh=dTY0NDQ0ZXFoN2o5&utm_source=qr "
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-100 hover:bg-pink-600 text-pink-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917733094806"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-600 text-green-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()}{" "}
            <b>traveljunctiontours.com</b>. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Designed & Developed by <span className="text-primary font-semibold">Travel Junction Tours</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
