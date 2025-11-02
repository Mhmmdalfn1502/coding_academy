import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Siapa saja yang bisa ikut program di CODAC?",
      answer: "Program CODAC terbuka untuk para siswa SMA/SMK/SLTA sederajat",
    },
    {
      question: "Apakah harus punya basic IT dulu?",
      answer: "Tidak harus. Beberapa program CODAC memang dimulai dari dasar, sehingga peserta tanpa latar belakang IT pun tetap bisa mengikuti.",
    },
    {
      question: "Biaya untuk mengikuti program CODAC?",
      answer: "Biaya program bervariasi tergantung jenis kelas yang diambil. Ada juga program gratis atau beasiswa tertentu yang bisa diikuti.",
    },
    {
      question: "Syarat dan ketentuan mengikuti program CODAC?",
      answer: "Peserta wajib memiliki komitmen belajar, perangkat pendukung (laptop/PC), serta mengikuti aturan dan jadwal yang ditetapkan oleh tim CODAC.",
    },
    {
      question: "Alur pendaftaran program saat ini?",
      answer: "Pendaftaran dilakukan secara online melalui website resmi CODAC. Setelah mengisi formulir, peserta akan dihubungi untuk proses seleksi dan konfirmasi jadwal.",
    },
    {
      question: "Ada berapa pertemuan dalam 1 batch?",
      answer: "Setiap batch biasanya berlangsung selama 4–6 minggu dengan total 8–12 kali pertemuan tergantung program yang diambil.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full min-h-screen bg-light dark:bg-dark text-dark dark:text-white py-16 lg:px-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }} className="py-20 px-10">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 dark:border-gray-600 rounded-2xl overflow-hidden">
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none">
                  <span>{faq.question}</span>
                  <FaChevronDown className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} />
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"}`}>
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
