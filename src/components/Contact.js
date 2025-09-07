import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, 
  FaGithub, FaTwitter, FaChess, FaPaperPlane, FaUser,
  FaCommentDots, FaInstagram
} from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "erharshvardhanverma@email.com",
      link: "mailto:erharshvardhanverma@email.com",
      color: "#ff6b6b"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+91 741*******",
      link: "tel:+91 741*******",
      color: "#4ecdc4"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Indore , Madhya Pradesh, India",
      link: "https://maps.google.com/?q=Bhopal,India",
      color: "#45b7d1"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/harshvardhanverma",
      color: "#0077b5"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/harshgambit",
      color: "#333"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/harshvardhan",
      color: "#1da1f2"
    },
    {
      icon: FaChess,
      name: "Chess.com",
      url: "https://chess.com/member/colharshvardhan",
      color: "#8b4513"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://instagram.com/harshvardhanchess",
      color: "#e4405f"
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
    <section id="contact" className="contact">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's discuss opportunities, collaborate on projects, or just have a strategic conversation
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="contact-info">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: `0 10px 30px ${info.color}20`
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="contact-icon"
                  style={{ backgroundColor: `${info.color}20`, color: info.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon />
                </motion.div>
                <h3 className="contact-title">{info.title}</h3>
                <p className="contact-content">{info.content}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="contact-form-container">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser className="form-icon" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope className="form-icon" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FaCommentDots className="form-icon" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaCommentDots className="form-icon" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="loading-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="social-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: social.color
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon />
                <span className="social-tooltip">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Availability Status */}
        <motion.div variants={itemVariants} className="availability-section">
          <div className="availability-card">
            <motion.div
              className="status-indicator"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="availability-content">
              <h4>Currently Available</h4>
              <p>I'm open to new opportunities and exciting projects. Let's create something amazing together!</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
