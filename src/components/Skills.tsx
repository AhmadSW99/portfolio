'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaGitAlt, 
  FaGithub,
  FaDatabase,
  FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNestjs, 
  SiMongodb, 
  SiFastapi, 
  SiTensorflow, 
  SiPostman
} from 'react-icons/si';

import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: FaNode, color: '#339933' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    ],
  },
  {
    name: 'Development Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#181717' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: FaCode, color: '#007ACC' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="min-h-screen flex items-center" style={{ backgroundColor: '#A2CCC4' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Experience & Skills
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid gap-20">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/4">
                    <h3 className="text-2xl font-bold text-black relative inline-block">
                      {category.name}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : { width: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                        className="absolute bottom-0 left-0 h-1 bg-orange-400"
                      />
                    </h3>
                  </div>
                  
                  <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 justify-items-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="flex flex-col items-center group"
                      >
                        <div 
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:scale-110 bg-white shadow-lg group-hover:shadow-xl"
                          style={{ 
                            background: `linear-gradient(135deg, white, ${skill.color}15)`,
                            border: `2px solid ${skill.color}30`
                          }}
                        >
                          {skill.icon && React.createElement(skill.icon, {
                            style: { color: skill.color },
                            className: "w-8 h-8 md:w-10 md:h-10"
                          })}
                        </div>
                        <p className="text-sm md:text-base font-medium text-black text-center whitespace-nowrap">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
