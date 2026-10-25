import { FaFacebook, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";


function Footer() {
  useEffect(() => { AOS.init({ duration: 400 }); }, []);

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand Logo and Description */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0" data-aos="fade-up">
            <h2 className="text-2xl font-bold">OM Billiard</h2>
            <p className="mt-2 text-gray-400">
              Quality that fits your style. Crafting comfort and elegance for
              your play.
            </p>
          </div>
          {/* Navigation Links */}
          <div
            className="w-full lg:w-1/3 mb-6 lg:mb-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-white transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                {/* <a
                  id="#contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a> */}
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div
            className="w-full lg:w-1/3 mb-6 lg:mb-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/Ombilliardofficial?rdid=O8QRoFt0GJubO15Q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fx1KLXTqn7qVtUccS%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <FaFacebook size={24} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <FaTwitter size={24} />
              </a> */}
              <a
                href="https://www.instagram.com/ombilliardofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <FaInstagram size={24} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
              >
                <FaLinkedin size={24} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-gray-400 text-center">
          &copy; 2024 OM Billiards. All rights reserved.
        </div>
        <div className=" text-gray-400 text-center h-1">
          Developed & Maintained by
          <a
            style={{ color: "#BCB8B1", marginLeft: "5px" }}
            href="https://ankitsharma745.github.io"
            target="_blank"
          >
            Ankit Sharma
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

