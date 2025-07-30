'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-[#84A7BA] items-center px-6 py-16 text-white scroll-mt-24 "
    >
      <motion.h2
        className="text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let&apos;s Collaborate and build Something Exciting
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/puniti-web"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BFCBCE] text-blue-900 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
        >
          <FaGithub size={40} className="mx-auto mb-3" />
          <p className="text-lg font-semibold">GitHub</p>
          <p className="text-sm break-all">https://github.com/puniti-web</p>
        </a>

        {/* Email */}
        <a
          href="mailto:punitijodhwani29@gmail.com"
          className="bg-[#BFCBCE] text-blue-900 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
        >
          <FaEnvelope size={40} className="mx-auto mb-3" />
          <p className="text-lg font-semibold">Email</p>
          <p className="text-sm break-all">punitijodhwani29@gmail.com</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/puniti-jodhwani-73155a28b"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BFCBCE] text-blue-900 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
        >
          <FaLinkedin size={40} className="mx-auto mb-3" />
          <p className="text-lg font-semibold">LinkedIn</p>
          <p className="text-sm break-all">www.linkedin.com/in/puniti-jodhwani-73155a28b</p>
        </a>
      </motion.div>

      {/* Footer Line */}
      <p className="mt-16 text-sm text-white/80 text-center">
        © {new Date().getFullYear()} Puniti Jodhwani. All rights reserved.
      </p>
    </section>
  );
}
