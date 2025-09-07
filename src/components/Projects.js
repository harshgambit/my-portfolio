import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion featuring smooth animations and interactive elements.",
      technologies: [
        { name: "React", Icon: FaReact, color: "#61dafb" },
        { name: "JavaScript", Icon: FaJsSquare, color: "#f7df1e" },
        { name: "Framer Motion", Icon: null, color: "#0055ff" }
      ],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "Civic Reporting App",
      description: "A React-based civic reporting application that allows users to report community issues with real-time tracking and mapping features.",
      technologies: [
        { name: "React", Icon: FaReact, color: "#61dafb" },
        { name: "Firebase", Icon: SiFirebase, color: "#ffca28" },
        { name: "JavaScript", Icon: FaJsSquare, color: "#f7df1e" }
      ],
      github: "https://github.com/yourusername/civic-app",
      live: "https://civicapp.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Chess Analysis Tool",
      description: "A web-based chess analysis tool with Stockfish engine integration for game analysis and improvement.",
      technologies: [
        { name: "React", Icon: FaReact, color: "#61dafb" },
        { name: "JavaScript", Icon: FaJsSquare, color: "#f7df1e" },
        { name: "Tailwind", Icon: SiTailwindcss, color: "#06b6d4" }
      ],
      github: "https://github.com/yourusername/chess-analysis",
      live: "https://chessanalysis.com",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Some of my recent work that showcases my skills and passion for development
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <motion.div
                    className="project-icon"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    💻
                  </motion.div>
                </div>
                <div className="project-status">
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="tech-item"
                      style={{ color: tech.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech.Icon && <tech.Icon />}
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
