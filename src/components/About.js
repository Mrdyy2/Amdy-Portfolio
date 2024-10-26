import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="about"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
        <h2>À propos de moi</h2>
        <div className='details'>
          {/* <img src='/images/circle-profile.png'></img> */}

          <p>
            Fort d'une expérience dans le développement d'applications web (gestion de bibliothèques, gestion de stocks), je maîtrise les technologies python et php cote serveur.
            Enthousiaste et curieux, j'aime relever de nouveaux défis techniques et apprendre de nouvelles technologies.
            Mes qualités de rigueur et d'organisation me permettent de mener à bien mes projets dans les délais impartis.
            Je suis également un fervent défenseur de l'open-source et de la collaboration.
          </p>

        </div>
    </motion.section>
  );
};

export default About;
