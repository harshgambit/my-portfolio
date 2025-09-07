import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div variants={itemVariants} className="about-text">
            <motion.p className="about-paragraph">
              Hi, I'm <strong>Harshvardhan Verma</strong>, a recent Computer Science graduate from 
              <strong> RGPV University</strong> with a passion for creating innovative digital experiences. 
              I enjoy working on modern web technologies and building solutions that combine creativity 
              with functionality.
            </motion.p>

            <motion.p className="about-paragraph">
              Beyond coding, I'm also a <strong>state-level chess player</strong>, which has taught me 
              strategic thinking, patience, and problem-solving — qualities I bring into my work as a developer. 
              My goal is to keep learning, contribute to impactful projects, and grow as a full-stack developer.
            </motion.p>

            <motion.p className="about-paragraph">
              Currently, I'm preparing for competitive exams while continuing to build exciting web projects 
              and exploring the latest technologies in AI and web development.
            </motion.p>

            <motion.div className="about-highlights">
              <div className="highlight-item">
                <motion.div
                  className="highlight-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  💻
                </motion.div>
                <div>
                  <h4>Full-Stack Development</h4>
                  <p>React, JavaScript, Firebase, Node.js</p>
                </div>
              </div>

              <div className="highlight-item">
                <motion.div
                  className="highlight-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  ♔
                </motion.div>
                <div>
                  <h4>Strategic Thinking</h4>
                  <p>State-level chess player</p>
                </div>
              </div>

              <div className="highlight-item">
                <motion.div
                  className="highlight-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  🚀
                </motion.div>
                <div>
                  <h4>Innovation</h4>
                  <p>AI integration, Modern UI/UX</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="about-image">
            <motion.div
              className="image-container"
              whileHover={{ 
                scale: 1.05,
                rotate: 2
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="profile-placeholder">
                <motion.div
                  className="chess-king"
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
                  ♔
                </motion.div>
                <p>Harshvardhan Verma</p>
                <span>Web Developer & Chess Player</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
