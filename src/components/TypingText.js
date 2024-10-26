import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearInterval(interval); // Nettoyage de l'intervalle en cas de démontage du composant
    }
  }, [currentIndex, text, speed]);

  return (
    <h1 className="typing-text">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default TypingText;
