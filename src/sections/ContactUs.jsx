import React from "react";
import { FaWhatsapp, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const ContactUs = () => {
  const contacts = [
    {
      icon: <FaWhatsapp className="text-green-500 text-4xl" />,
      title: "WhatsApp",
      info: "+62 838 0535 9466 (Nurul)",
    },
    {
      icon: <FaTiktok className="text-black text-4xl" />,
      title: "Tiktok",
      info: "+62 838 0535 9466 (Nurul)",
    },
    {
      icon: (
        <FaInstagram
          className="text-4xl"
          style={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      ),
      title: "Instagram",
      info: "+62 838 0535 9466 (Nurul)",
    },
    {
      icon: <FaLinkedin className="text-blue-600 text-4xl" />,
      title: "Linkedin",
      info: "+62 838 0535 9466 (Nurul)",
    },
    {
      icon: <HiOutlineMail className="text-blue-500 text-4xl" />,
      title: "Email",
      info: "+62 838 0535 9466 (Nurul)",
    },
    {
      icon: <HiLocationMarker className="text-blue-500 text-4xl" />,
      title: "Glints",
      info: "+62 838 0535 9466 (Nurul)",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>

        <div className="flex flex-col items-center text-gray-600">
          <HiLocationMarker className="text-blue-500 text-4xl mb-2" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Our Location
          </h3>
          <p className="max-w-sm text-center text-gray-600 leading-relaxed">
            ASHTA District 8
            <br />
            Kebayoran Baru
            <br />
            Kota Jakarta Selatan
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center p-6 w-[280px] h-[180px]"
          >
            {contact.icon}
            <h4 className="font-bold text-gray-800 text-lg mt-4">
              {contact.title}
            </h4>
            <p className="text-sm text-gray-600 mt-2">{contact.info}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bg-white rounded-2xl shadow-sm py-8 px-6 text-center max-w-3xl">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Ready to Start Your Journey?
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Get in touch with us through any of the channels above. Our team is
          ready to help you take the first step towards your web development
          career.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Quick Response
          </span>
          <span className="px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-medium">
            Free Consultation
          </span>
          <span className="px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
            Flexible Schedule
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
