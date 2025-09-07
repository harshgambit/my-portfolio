import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaCertificate, FaChess, FaMedal } from 'react-icons/fa';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const achievements = [
    {
      id: 1,
      category: "Chess",
      title: "State-Level Chess Player",
      description: "Competed at state championship level, demonstrating strategic thinking and competitive excellence.",
      icon: FaChess,
      color: "#8b4513",
      year: "2024"
    },
    {
      id: 2,
      category: "Education",
      title: "Computer Science Graduate",
      description: "Successfully completed Bachelor's degree in Computer Science from RGPV University.",
      icon: FaCertificate,
      color: "#4ecdc4",
      year: "2024"
    },
    {
      id: 3,
      category: "Development",
      title: "Full-Stack Projects",
      description: "Built and deployed multiple React applications with modern tech stack integration.",
      icon: FaTrophy,
      color: "#ff6b6b",
      year: "2024"
    },
    {
      id: 4,
      category: "Competitive",
      title: "Chess Tournament Participation",
      description: "Regular participation in competitive chess tournaments with consistent performance.",
      icon: FaMedal,
      color: "#45b7d1",
      year: "Ongoing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="achievements" className="achievements">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Milestones and accomplishments that reflect my journey and growth
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="achievement-card"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="achievement-icon"
                style={{ backgroundColor: `${achievement.color}20`, borderColor: achievement.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon style={{ color: achievement.color }} />
              </motion.div>

              <div className="achievement-content">
                <div className="achievement-header">
                  <span className="achievement-category" style={{ color: achievement.color }}>
                    {achievement.category}
                  </span>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
