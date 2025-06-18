'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#D9CEBA' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Let&apos;s Connect
            </h2>
          </div>
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="text-center space-y-4">
              <p className="text-lg text-black">
                Feel free to reach out for collaboration opportunities or just to say hello!
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:ahmad.alawwad1999@gmail.com"
                  className="block text-black hover:text-orange-400"
                >
                  ahmad.alawwad1999@gmail.com
                </a>
                <a
                  href="https://github.com/AhmadSW99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-black hover:text-orange-400"
                >
                  github.com/AhmadSW99
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-black bg-orange-400 hover:bg-copper-500 hover:border-copper-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
