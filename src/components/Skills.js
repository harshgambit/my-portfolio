import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaPython, FaGitAlt, FaFigma, FaChessKnight, FaCode 
} from 'react-icons/fa';
import { 
  SiFirebase, SiMongodb, SiTailwindcss, SiFramer, 
  SiVercel, SiPostman 
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillsData = {
    "Frontend Development": [
      { name: "React", level: 90, Icon: FaReact, color: "#61dafb" },
      { name: "JavaScript", level: 85, Icon: FaJsSquare, color: "#f7df1e" },
      { name: "HTML5", level: 95, Icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", level: 88, Icon: FaCss3Alt, color: "#1572b6" },
      { name: "Tailwind CSS", level: 80, Icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Framer Motion", level: 75, Icon: SiFramer, color: "#0055ff" }
    ],
    "Backend & Database": [
      { name: "Node.js", level: 70, Icon: FaNodeJs, color: "#339933" },
      { name: "Firebase", level: 85, Icon: SiFirebase, color: "#ffca28" },
      { name: "MongoDB", level: 65, Icon: SiMongodb, color: "#47a248" },
      { name: "Python", level: 75, Icon: FaPython, color: "#3776ab" }
    ],
    "Tools & Technologies": [
      { name: "Git", level: 80, Icon: FaGitAlt, color: "#f05032" },
      { name: "VS Code", level: 90, Icon: FaCode, color: "#007acc" },
      { name: "Figma", level: 70, Icon: FaFigma, color: "#f24e1e" },
      { name: "Vercel", level: 85, Icon: SiVercel, color: "#000000" },
      { name: "Postman", level: 75, Icon: SiPostman, color: "#ff6c37" }
    ],
    "Soft Skills": [
      { name: "Strategic Thinking", level: 95, Icon: FaChessKnight, color: "#8b4513" },
      { name: "Problem Solving", level: 90, Icon: null, color: "#ff6b6b" },
      { name: "Communication", level: 85, Icon: null, color: "#4ecdc4" },
      { name: "Leadership", level: 80, Icon: null, color: "#45b7d1" },
      { name: "Team Work", level: 88, Icon: null, color: "#96ceb4" }
    ]
  };

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
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and skills I use to bring your ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        {skill.Icon && (
                          <motion.div
                            className="skill-icon"
                            style={{ color: skill.color }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <skill.Icon />
                          </motion.div>
                        )}
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color || '#00d4ff' }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="skills-summary">
          <div className="summary-item">
            <motion.h4
              animate={{ 
                color: ["#00d4ff", "#ff6b6b", "#4ecdc4", "#00d4ff"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity 
              }}
            >
              5+
            </motion.h4>
            <p>Technologies Mastered</p>
          </div>
          <div className="summary-item">
            <motion.h4
              animate={{ 
                color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#ff6b6b"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: 0.5 
              }}
            >
              10+
            </motion.h4>
            <p>Projects Completed</p>
          </div>
          <div className="summary-item">
            <motion.h4
              animate={{ 
                color: ["#4ecdc4", "#45b7d1", "#00d4ff", "#4ecdc4"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: 1 
              }}
            >
              2+
            </motion.h4>
            <p>Years Experience</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
