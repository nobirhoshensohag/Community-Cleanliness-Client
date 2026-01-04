import { Fade, Slide } from "react-awesome-reveal";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-base-200 dark:to-base-300 py-16">
      <title>Clean Hub | Contact</title>

      <Fade triggerOnce>
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-green-600 mb-3">
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Have any questions, ideas, or want to collaborate with us?  
              Feel free to reach out anytime.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <Slide direction="left" triggerOnce>
              <div className="bg-white dark:bg-base-100 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Get in Touch
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  📍 Location: Bangladesh  
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  📧 Email: nobirhoshensohag708.com
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  📞 phone: +880 1306-030858
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://web.facebook.com/nobir.hoshen.sohag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                    href="https://x.com/nobirhoshen007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaXTwitter size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nobir-hoshen-sohag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
            </Slide>

            {/* Contact Form */}
            <Slide direction="right" triggerOnce>
              <div className="bg-white dark:bg-base-100 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-green-600 mb-6">
                  Send a Message
                </h2>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                  />

                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full h-32"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="btn btn-success w-full text-white hover:scale-[1.02] transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Slide>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
