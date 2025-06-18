'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 lg:py-32" style={{ backgroundColor: '#A2CCC4' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/ahmad.webp"
              alt="Ahmad Alawwad"
              fill
              className="object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <div className="space-y-6 lg:space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              About Me
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-black space-y-6"
            >
              <p>
                Ahmad is a final-year software engineering student at King Saud University. 
                He is passionate about frontend technologies like React and Next.js, as well as backend 
                frameworks like Node.js and NestJS.
              </p>
              <p>
                He&apos;s also interested in AI, computer vision, and building impactful applications. 
                Ahmad enjoys Arabic cultural media and creative writing.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
