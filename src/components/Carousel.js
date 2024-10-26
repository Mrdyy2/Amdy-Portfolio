import React, { useState, useEffect } from 'react';
import './assets/css/carrousel.css';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-3d">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentIndex ? 'active' : 'inactive'}`}
          >
            <img src={project.image} alt={project.title} className="carousel-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
