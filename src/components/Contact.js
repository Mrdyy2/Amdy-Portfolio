import React from 'react';
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section
     id="contact" 
     className="contact"
     initial={{ scale: 0.8, opacity: 0 }}
     whileInView={{ scale: 1, opacity: 1 }}
     viewport={{ once: true }}
     transition={{ duration: 1 }}
    >
      <h2>Contactez-moi</h2>
      <form>
        <label>Nom:</label>
        <input type="text" placeholder="Votre nom" required className='infoContact' />

        <label>Email:</label>
        <input type="email" placeholder="Votre email" required className='infoContact'/>

        <label>Message:</label>
        <textarea placeholder="Votre message" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </motion.section>
  );
};

export default Contact;
