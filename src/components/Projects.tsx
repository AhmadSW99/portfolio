'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		title: 'Mosque Water Platform',
		description:
			'Full-stack application using Next.js, ExpressJS, and MongoDB to monitor and optimize water usage in mosques.',
		image: '/p1.webp',
		tech: ['Next.js', 'ExpressJS', 'MongoDB'],
		link: 'https://suqia.vercel.app/login',
	},
	{
		title: 'Drone Person Detection',
		description:
			'Used YOLO & OpenCV for search and rescue operations, enabling real-time person detection from aerial footage.',
		image: '/p2.webp',
		tech: ['Python', 'YOLO', 'OpenCV'],
		link: 'https://ai-sar-frontend-react.onrender.com/',
	},
];

export default function Projects() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section
			id="projects"
			className="py-24 lg:py-32"
			style={{ backgroundColor: '#A2CCC4' }}
		>
			<div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
					className="space-y-12 lg:space-y-20"
				>
					<div className="text-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
						>
							Recent Projects
						</motion.h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
						{projects.map((project, index) => (
							<Link
								key={project.title}
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="block group"
							>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{
										duration: 0.8,
										delay: index * 0.2 + 0.4,
										ease: [0.6, -0.05, 0.01, 0.99],
									}}
									className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
								>
									<div className="relative h-48 lg:h-56 overflow-hidden">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transform transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
									<div className="p-6 lg:p-8 space-y-4">
										<h3 className="text-xl lg:text-2xl font-semibold text-black">
											{project.title}
										</h3>
										<p className="text-black text-base lg:text-lg">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 pt-2">
											{project.tech.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-sm text-black bg-orange-400 rounded-full"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</motion.div>
							</Link>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
