'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaPython, 
  FaGitAlt, 
  FaGithub,
  FaDatabase,
  FaRobot
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFastapi, 
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiGithubactions,
  SiLangchain,
  SiChromadb
} from 'react-icons/si';
import { TbApi, TbBrain } from 'react-icons/tb';
import Image from 'next/image';

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
    name: 'AI & Multi-Agent Systems',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'LangGraph', icon: TbBrain, color: '#10B981' },
      { name: 'Multi-Agent AI', icon: FaRobot, color: '#8B5CF6' },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: TbApi, color: '#FF6B6B' },
      { name: 'SQL', icon: FaDatabase, color: '#336791' },
      { name: 'ChromaDB', icon: SiChromadb, color: '#FF6F61' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    ],
  },
];

interface Experience {
  company: string;
  logo: string;
  positions: {
    title: string;
    duration: string;
    description: string[];
  }[];
}

const experiences: Experience[] = [
  {
    company: 'Elm',
    logo: '/elm.png',
    positions: [
      { 
        title: 'AI Engineer & DevOps Trainee', 
        duration: 'Oct 2025 - Present · 4 mos',
        description: [
          'Contributed to cloud infrastructure management on GCP for fleet tracking system across multiple environments',
          'Developed multi-agent automation system using LangChain, LangGraph, and DSPy for Jira-Bitbucket integration',
          'Built RFP-to-SRS conversion system with IBM DocLing and specialized agents',
          'Created GitHub repository code quality analyzer with human-in-the-loop workflows',
        ]
      },
      { 
        title: 'Account Manager Trainee', 
        duration: 'Aug 2025 - Sep 2025 · 2 mos',
        description: [
          'Participated in stakeholder meetings with government ministry representatives',
          'Searched Etimad platform for opportunities (RFPs) and coordinated proposal submissions',
          'Prepared and submitted opportunity proposals with comprehensive supporting documentation',
        ]
      },
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

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
              <div className="lg:w-1/4">
                <h3 className="text-2xl font-bold text-black relative inline-block">
                  Work Experience
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-0 left-0 h-1 bg-orange-400"
                  />
                </h3>
              </div>
              
              <div className="lg:w-3/4">
                {experiences.map((exp) => (
                  <div key={exp.company} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden p-2">
                        <Image 
                          src={exp.logo} 
                          alt={exp.company} 
                          width={48} 
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-black">{exp.company}</h4>
                    </div>
                    <div className="ml-15 space-y-4 pl-4 border-l-2 border-orange-400/50">
                      {exp.positions.map((pos, idx) => (
                        <div key={idx} className="bg-white/70 rounded-lg p-5 shadow-sm">
                          <p className="font-semibold text-black text-lg">{pos.title}</p>
                          <p className="text-sm text-gray-600 mb-3">{pos.duration}</p>
                          <ul className="space-y-2">
                            {pos.description.map((desc, descIdx) => (
                              <li key={descIdx} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-orange-400 mt-1">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

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
