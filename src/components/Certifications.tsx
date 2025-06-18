'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      id: 1,
      title: "Introduction to Internet of Things (IoT)",
      issuer: "Tuwaiq academy",
      date: "2025",
      image: "/c1.webp",
      alt: "safcsp Certification"
    },
    {
      id: 2,
      title: "operate a drone using AI algorithms",
      issuer: "Safcsp",
      date: "2025",
      image: "/c2.webp",
      alt: "Google Cloud Certification"
    }
  ];

  return (
    <section id="certifications" className="py-20" style={{ backgroundColor: '#D9CEBA' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Certifications
            </h2>
            <p className="mt-4 text-lg text-black">
              Professional certifications and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-copper-100 hover:border-copper-300"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-black">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
