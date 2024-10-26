import  React from 'react'
import { motion } from "framer-motion";
import TypingText from './TypingText';

const HeroSection = ()=> {
    return(
        <motion.section
            
        id="hero"
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <h1>Bonjour, <div id='intro'><TypingText text={'je suis Amdy Baro'}/></div> </h1>
            <p>Développeur Web Backend Junior</p>
            <button><a href="#projects">Voir mes projets</a></button>
        
        </motion.section>
        
    )
}

export default HeroSection