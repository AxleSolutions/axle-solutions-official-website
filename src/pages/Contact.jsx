import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import SEO from '../components/SEO';
import ParticleBackground from '../components/ParticleBackground';

const elegantReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (validateForm()) {
      setIsSubmitting(true);

      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Hide success message after 6 seconds
        setTimeout(() => setIsSubmitted(false), 6000);
      } catch (error) {
        console.error('EmailJS error:', error);
        setIsSubmitting(false);
        setSubmitError('Failed to send your message. Please try again or email us directly at axlesolutionsinfo@gmail.com');
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'axlesolutionsinfo@gmail.com',
      link: 'mailto:axlesolutionsinfo@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(+94) 71 25 29942',
      link: 'tel:+94712529942',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '366/7 Saliya MW, Yanthampalawa, Kurunegala, Sri Lanka',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
  ];

  return (
    <>
      <SEO
        title="Contact Us - Get In Touch | Axle Solutions"
        description="Ready to transform your business? Contact Axle Solutions for DevOps consulting, cloud solutions, and custom software development. Let's discuss your project today."
        keywords="contact axle solutions, get quote, software consultation, DevOps inquiry, project discussion, technology consulting"
        type="website"
      />
      <div className="min-h-screen pt-20 relative overflow-hidden bg-gray-50 dark:bg-black">
        
        {/* Interactive Particles Background */}
        <ParticleBackground />

        {/* Abstract animated blurred glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-500/10 dark:bg-primary-500/20 blur-[100px] -z-10 animate-float translate-z-0 pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[120px] -z-10 animate-float translate-z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>

        {/* Hero Section */}
        <section className="py-20 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h1 
              variants={elegantReveal}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              variants={elegantReveal}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We'd love to hear from you. Let's start a conversation.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Contact Form */}
              <motion.div variants={elegantReveal} className="h-full">
                <Tilt
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                  perspective={1500}
                  scale={1.01}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 h-full border border-gray-100 dark:border-dark-700/50 shadow-xl shadow-gray-200/50 dark:shadow-none group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
                      Send Us a Message
                    </h2>

                    {isSubmitted && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-md border border-green-500 rounded-2xl flex items-center space-x-3 relative z-10"
                      >
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <p className="text-green-800 dark:text-green-200">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </motion.div>
                    )}

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-100/80 dark:bg-red-900/30 backdrop-blur-md border border-red-500 rounded-2xl flex items-start space-x-3 relative z-10"
                      >
                        <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-red-800 dark:text-red-200 text-sm">{submitError}</p>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input-field ${
                            errors.name ? 'border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-field ${
                            errors.email ? 'border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`input-field ${
                            errors.subject ? 'border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="How can we help you?"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="6"
                          className={`input-field resize-none ${
                            errors.message ? 'border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="Tell us about your project..."
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full relative group overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl py-4 flex items-center justify-center font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'
                        }`}
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center space-x-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                      </button>
                    </form>
                  </div>
                </Tilt>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={elegantReveal} className="space-y-8">
                <Tilt
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                  perspective={1500}
                  scale={1.01}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="flex flex-col gap-8 h-full">
                    <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 dark:border-dark-700/50 shadow-xl shadow-gray-200/50 dark:shadow-none relative overflow-hidden group flex-grow flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
                        Contact Information
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 relative z-10">
                        Reach out to us through any of these channels. We're here to help!
                      </p>

                      <div className="space-y-6 relative z-10">
                        {contactInfo.map((info, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                                <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {info.title}
                              </h3>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                >
                                  {info.content}
                                </a>
                              ) : (
                                <p className="text-gray-600 dark:text-gray-400">
                                  {info.content}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 dark:border-dark-700/50 shadow-xl shadow-gray-200/50 dark:shadow-none relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">
                        Follow Us
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                        Stay connected with us on social media for updates and insights.
                      </p>
                      <div className="flex space-x-4 relative z-10">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-4 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                            aria-label={social.label}
                          >
                            <social.icon className="w-6 h-6" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-3xl p-8 shadow-xl shadow-primary-500/20 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      <h2 className="text-2xl font-bold mb-6 relative z-10">Office Hours</h2>
                      <div className="space-y-3 relative z-10">
                        <div className="flex justify-between">
                          <span className="font-semibold">Monday - Friday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Saturday</span>
                          <span>9:00 AM - 12:30 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                      <p className="mt-6 text-primary-50 text-sm relative z-10">
                        * Response time may vary. We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Map Section (Embedded Google Map) */}
        <section className="py-20 bg-gray-50 dark:bg-dark-800 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-animate">
              <div className="card overflow-hidden">
                {/* Responsive iframe wrapper: maintains 16:9 ratio */}
                <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.23135968434454!2d80.34800091979064!3d7.498142255374775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1762849457319!5m2!1sen!2slk"
                    title="Axle Solutions Location"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
