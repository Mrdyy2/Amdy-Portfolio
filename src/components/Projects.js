import React from 'react';
import ProjectCarousel from './Carousel';
import { motion } from "framer-motion";


const projectsData = [
  { title: 'Projet 1', description: 'Description du projet 1', image: "/images/B-library.png" },
  { title: 'Projet 2', description: 'Description du projet 2', image: '/images/gestion_produits.png' },
  { title: 'Projet 3', description: 'Description du projet 3', image: '/images/Mbr-folio.png' },
  // Ajoute d'autres projets ici
];

const Portfolio = () => {
  return (
    <motion.section
     id="projects"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2>Mes Projets</h2>
      <ProjectCarousel projects={projectsData} />
    </motion.section>
  );
};

export default Portfolio;












// import React from 'react';
// import { motion } from 'framer-motion';

// const Projects = () => {
//   return (
//     <motion.section
//       id="projects"
//       className="projects"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <h2>Mes Projets</h2>
//       <div className="project-list">
//         <motion.div
//           className="project-item"
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3>Projet 1</h3>
//           <p>Description du projet 1...</p>
//         </motion.div>
//         <motion.div
//           className="project-item"
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <h3>Projet 2</h3>
//           <p>Description du projet 2...</p>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;
