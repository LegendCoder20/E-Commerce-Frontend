import React from "react";
import {Link} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-gray-800 text-white py-2 pt-5">
        <div className="container mx-auto flex flex-wrap justify-between gap-8">
          {/* Contact Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h3 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
              Contact Me
            </h3>
            <p>
              Email:{" "}
              <a
                href="mailto:aryan.manjarekar.22@gmail.com.com"
                className="text-blue-400 hover:underline"
              >
                aryan.manjarekar.22@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:7718070610"
                className="text-blue-400 hover:underline"
              >
                +91 7718070610
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/7718070610"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                +91 7718070610
              </a>
            </p>
            <p>
              <Link
                to="/admin"
                // target="_blank"
                className="text-gray-800 cursor-default"
              >
                Admin
              </Link>
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/aryan-manjarekar-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-700"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/legend_martial.arts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Visit Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h3 className="text-xl font-semibold border-b-2 border-white pb-2 mb-4">
              Visit Me
            </h3>
            <div className="mapouter relative text-right w-full h-24">
              <div className="gmap_canvas overflow-hidden bg-none w-full h-36">
                <iframe
                  className="gmap_iframe w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Goregaon East, Vanrai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Map of Goregaon East, Vanrai"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Attribution */}
        <div className="text-center mt-8">
          <p>
            <b>Website Developed by Aryan Manjarekar</b>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
