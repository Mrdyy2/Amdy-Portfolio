import React from 'react';
import './assets/css/SkillGrid.css';
import { motion } from "framer-motion";

  // Liste des compétences
const skills = [
  { name: 'Laravel', icon: '/images/skills/logos--laravel.png' },
  { name: 'React', icon: '/images/skills/skill-icons--react-light.png' },
  { name: 'Python', icon: '/images/skills/python.png' },
  { name: 'HTML & CSS', icon: '/images/skills/html.png' },
  { name: 'Django', icon: '/images/skills/skill-icons--django.png' },
  { name: 'Postgres', icon: '/images/skills/postgre.png' },
];

const SkillsGrid = () => {
  return (
    <motion.section 
      id="skills"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsGrid;

