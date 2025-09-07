import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBriefcase, FaCalendarAlt, FaMapMarkerAlt,
  FaReact, FaJsSquare, FaChess, FaCode, FaUsers, FaStar
} from 'react-icons/fa';
import { SiFirebase, SiTailwindcss, SiFramer } from 'react-icons/si';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      title: "Full-Stack Web Developer",
      company: "Freelancer",
      type: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      duration: "1+ Years",
      description: "Developing modern web applications for clients worldwide, specializing in React-based solutions with focus on performance and user experience.",
      achievements: [
        "Built 10+ responsive web applications using React and modern JavaScript",
        "Integrated Firebase authentication and real-time database solutions",
        "Implemented advanced animations using Framer Motion for enhanced UX",
        "Achieved 95%+ client satisfaction rate with on-time project delivery",
        "Specialized in portfolio websites, business apps, and e-commerce solutions"
      ],
      technologies: [
        { name: "React", Icon: FaReact, color: "#61dafb" },
        { name: "JavaScript", Icon: FaJsSquare, color: "#f7df1e" },
        { name: "Firebase", Icon: SiFirebase, color: "#ffca28" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" },
        { name: "Framer Motion", Icon: SiFramer, color: "#0055ff" }
      ],
      projects: [
        {
          name: "Portfolio Websites",
          count: "5+",
          description: "Modern, animated portfolio sites for professionals"
        },
        {
          name: "Business Applications",
          count: "3+",
          description: "Custom web apps for local businesses and startups"
        },
        {
          name: "React Components",
          count: "20+",
          description: "Reusable UI components and interactive elements"
        }
      ],
      status: "active",
      rating: 4.9
    },
    {
      id: 2,
      title: "Chess Strategy Consultant",
      company: "Independent",
      type: "Part-time",
      location: "indore, MP",
      period: "2020 - Present",
      duration: "5+ Years",
      description: "Providing chess coaching and strategic guidance to players of various skill levels, combining analytical thinking with practical game improvement.",
      achievements: [
        "Coached 15+ students to improve their chess ratings significantly",
        "Developed custom training programs based on individual playing styles",
        "Organized local chess tournaments and community events",
        "Created chess analysis content and strategic guides",
        "Built chess analysis tools using web technologies"
      ],
      technologies: [
        { name: "Strategic Analysis", Icon: FaChess, color: "#8b4513" },
        { name: "Teaching", Icon: FaUsers, color: "#4ecdc4" },
        { name: "Problem Solving", Icon: FaCode, color: "#ff6b6b" }
      ],
      projects: [
        {
          name: "Students Coached",
          count: "15+",
          description: "Players improved by average 200+ rating points"
        },
        {
          name: "Analysis Sessions",
          count: "100+",
          description: "Game reviews and strategic planning sessions"
        },
        {
          name: "Tournaments Organized",
          count: "5+",
          description: "Local community chess events and competitions"
        }
      ],
      status: "active",
      rating: 4.8
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "Tech Solutions",
      type: "Internship",
      location: "indore, MP",
      period: "Jan 2023 - Jun 2023",
      duration: "6 Months",
      description: "Gained hands-on experience in full-stack development while contributing to real-world projects and learning industry best practices.",
      achievements: [
        "Contributed to 3 major client projects during internship period",
        "Learned advanced React patterns and state management techniques",
        "Collaborated with senior developers using Git and Agile methodologies",
        "Participated in code reviews and technical discussions",
        "Received excellent performance evaluation and recommendation"
      ],
      technologies: [
        { name: "React", Icon: FaReact, color: "#61dafb" },
        { name: "JavaScript", Icon: FaJsSquare, color: "#f7df1e" },
        { name: "Firebase", Icon: SiFirebase, color: "#ffca28" }
      ],
      projects: [
        {
          name: "Client Projects",
          count: "3",
          description: "E-commerce and business websites"
        },
        {
          name: "Code Commits",
          count: "150+",
          description: "Regular contributions to team repositories"
        },
        {
          name: "Features Developed",
          count: "10+",
          description: "UI components and functionality implementations"
        }
      ],
      status: "completed",
      rating: 4.7
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My journey as a freelance developer and chess strategist, building solutions and mentoring minds
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-marker">
                <motion.div
                  className="timeline-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaBriefcase />
                </motion.div>
              </div>

              <motion.div
                className="experience-card"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="exp-header">
                  <div className="exp-title-section">
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-company">
                      <span>{exp.company}</span>
                      <span className={`exp-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                    </div>
                  </div>
                  
                  <div className="exp-meta">
                    <div className="exp-period">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <div className="exp-location">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <div className="exp-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="exp-technologies">
                  <h4>Technologies Used</h4>
                  <div className="tech-list">
                    {exp.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        className="tech-item"
                        style={{ color: tech.color }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <tech.Icon />
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="exp-projects">
                  <h4>Project Highlights</h4>
                  <div className="project-stats">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="project-stat">
                        <div className="stat-number">{project.count}</div>
                        <div className="stat-info">
                          <div className="stat-name">{project.name}</div>
                          <div className="stat-desc">{project.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="exp-footer">
                  <div className="exp-rating">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(exp.rating) ? 'star-filled' : 'star-empty'}
                        />
                      ))}
                    </div>
                    <span className="rating-text">{exp.rating} Rating</span>
                  </div>
                  
                  <div className={`exp-status ${exp.status}`}>
                    <div className="status-indicator"></div>
                    <span>{exp.status === 'active' ? 'Currently Active' : 'Completed'}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div variants={itemVariants} className="experience-summary">
          <h3>Experience Summary</h3>
          <div className="summary-stats">
            <div className="summary-stat">
              <motion.div
                className="stat-value"
                animate={{ 
                  color: ["#00d4ff", "#ff6b6b", "#4ecdc4", "#00d4ff"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity 
                }}
              >
                2+
              </motion.div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="summary-stat">
              <motion.div
                className="stat-value"
                animate={{ 
                  color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#ff6b6b"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 0.5 
                }}
              >
                15+
              </motion.div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="summary-stat">
              <motion.div
                className="stat-value"
                animate={{ 
                  color: ["#4ecdc4", "#45b7d1", "#00d4ff", "#4ecdc4"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 1 
                }}
              >
                95%
              </motion.div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="summary-stat">
              <motion.div
                className="stat-value"
                animate={{ 
                  color: ["#45b7d1", "#00d4ff", "#ff6b6b", "#45b7d1"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 1.5 
                }}
              >
                20+
              </motion.div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
