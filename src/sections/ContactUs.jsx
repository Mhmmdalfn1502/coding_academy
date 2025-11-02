import React, { useEffect } from "react";
import { FaWhatsapp, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {

  const contacts = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      info: "+62 838 0535 9466 (Nurul)",
    },
    {
      icon: <FaTiktok />,
      title: "Tiktok",
      info: "@codac_official",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      info: "@codac_official",
    },
    {
      icon: <FaLinkedin />,
      title: "Linkedin",
      info: "Codac",
    },
    {
      icon: <HiOutlineMail />,
      title: "Email",
      info: "hello@codac.id",
    },
    {
      icon: <HiLocationMarker />,
      title: "Glints",
      info: "Coding Academy",
    },
  ];

    useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" data-aos="fade-up" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h2>

          <div className="flex flex-col items-center text-gray-600 dark:text-gray-300">
            <HiLocationMarker className="text-blue-500 text-4xl mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Our Location</h3>
            <p className="max-w-sm text-center text-gray-600 dark:text-gray-300 leading-relaxed">
              ASHTA District 8
              <br />
              Kebayoran Baru
              <br />
              Kota Jakarta Selatan
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-stretch mb-10">
          {contacts.map((contact, index) => (
            <article
              key={index}
              className="w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center"
              aria-labelledby={`contact-${index}-title`}
            >
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 inline-flex items-center justify-center">
                <span className="text-3xl text-gray-700 dark:text-gray-100">{contact.icon}</span>
              </div>

              <h4 id={`contact-${index}-title`} className="font-bold text-gray-800 dark:text-white text-lg mt-4">
                {contact.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{contact.info}</p>
            </article>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm py-8 px-6 text-center max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">Get in touch with us through any of the channels above. Our team is ready to help you take the first step towards your web development career.</p>

          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-sm font-medium">Quick Response</span>
            <span className="px-4 py-1.5 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300 rounded-full text-sm font-medium">Free Consultation</span>
            <span className="px-4 py-1.5 bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300 rounded-full text-sm font-medium">Flexible Schedule</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
