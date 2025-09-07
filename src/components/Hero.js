import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaChess } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="home" className="hero">
      <div className="hero-bg">
        <motion.div
          className="hero-grid"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          <span className="greeting-text">Hi there! I'm</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="hero-name"
        >
          Harshvardhan Verma
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="hero-roles"
        >
          <motion.span
            className="role"
            animate={{
              color: ["#00d4ff", "#ff6b6b", "#4ecdc4", "#45b7d1", "#00d4ff"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Web Developer
          </motion.span>
          <span className="role-separator">|</span>
          <motion.span
            className="role"
            animate={{
              color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#00d4ff", "#ff6b6b"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            Chess Player
          </motion.span>
          <span className="role-separator">|</span>
          <motion.span
            className="role"
            animate={{
              color: ["#4ecdc4", "#45b7d1", "#00d4ff", "#ff6b6b", "#4ecdc4"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            Tech Enthusiast
          </motion.span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="hero-tagline"
        >
          Crafting digital experiences with strategic thinking and creative code.
          <br />
          Bringing ideas to life through modern web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-cta"
        >
          <motion.button
            className="cta-primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="cta-secondary"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#00d4ff"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hero-social"
        >
          {[
            { Icon: FaGithub, href: "#", label: "GitHub" },
            { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
            { Icon: FaTwitter, href: "#", label: "Twitter" },
            { Icon: FaChess, href: "#", label: "Chess.com" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="social-link"
              whileHover={{ 
                scale: 1.3,
                color: "#00d4ff",
                rotate: 360
              }}
              transition={{ duration: 0.3 }}
              aria-label={social.label}
            >
              <social.Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-chess-piece"
        animate={{
          y: [-10, 10, -10],
          rotateY: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ♔
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="scroll-arrow">↓</div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
