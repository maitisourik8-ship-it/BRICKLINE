
import {
  Home,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();

    alert("Thank you for subscribing!");

    e.target.reset();
  };

  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand Section */}
        <div>
          <div className="mb-5 flex items-center gap-2">
            <Home size={30} className="text-orange-500" />

            <h2 className="text-2xl font-bold tracking-wide text-white">
              BRICKLINE
            </h2>
          </div>

          <p className="mb-6 text-sm leading-7 text-gray-400">
            Building better spaces and creating beautiful places
            for modern living. We turn your dream properties
            into reality.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-2xl text-[#E4405F] transition duration-300 hover:-translate-y-2 hover:scale-125"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-2xl text-[#1877F2] transition duration-300 hover:-translate-y-2 hover:scale-125"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-[#0A66C2] transition duration-300 hover:-translate-y-2 hover:scale-125"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-2xl text-white transition duration-300 hover:-translate-y-2 hover:scale-125"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-2xl text-[#FF0000] transition duration-300 hover:-translate-y-2 hover:scale-125"
            >
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm">
            {[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Projects", "#projects"],
              ["Testimonials", "#testimonials"],
              ["Contact", "#contact"],
            ].map(([item, link]) => (
              <li key={item}>
                <a
                  href={link}
                  className="flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-orange-500"
                >
                  <ArrowRight size={14} />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Our Services
          </h3>

          <ul className="space-y-4 text-sm">
            {[
              "Residential Properties",
              "Commercial Properties",
              "Property Development",
              "Interior Design",
              "Real Estate Consulting",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="transition duration-300 hover:text-orange-500"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-5 text-sm">

            <li className="flex items-start gap-3">
              <MapPin
                size={19}
                className="shrink-0 text-orange-500"
              />
              <span>
                Your Office Address,
                <br />
                Your City, India
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <a
                href="tel:+910000000000"
                className="transition hover:text-orange-500"
              >
                +91 00000 00000
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <a
                href="mailto:info@brickline.com"
                className="transition hover:text-orange-500"
              >
                info@brickline.com
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Subscribe to Our Newsletter
            </h3>

            <p className="text-sm text-gray-400">
              Get the latest property updates and news.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="min-w-0 flex-1 rounded-l-md border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="flex items-center gap-2 rounded-r-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              Subscribe
              <ArrowUpRight size={17} />
            </button>
          </form>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} BRICKLINE. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#privacy"
              className="transition hover:text-orange-500"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition hover:text-orange-500"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;



