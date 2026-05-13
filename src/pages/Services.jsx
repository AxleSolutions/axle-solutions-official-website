import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import SEO from '../components/SEO';
import ParticleBackground from '../components/ParticleBackground';
import { 
  Server, 
  Code, 
  Cloud, 
  GitBranch, 
  Shield, 
  Smartphone,
  Database,
  Settings,
  X,
  Check
} from 'lucide-react';

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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Create engaging mobile experiences for iOS and Android platforms.',
      longDescription: 'We build native and cross-platform mobile applications that deliver exceptional user experiences. Our apps are performant, secure, and designed with your users in mind.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'API Integration',
        'Push Notifications',
        'App Store Deployment',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      shortDescription: 'Build scalable, high-performance applications tailored to your business needs.',
      longDescription: 'We develop custom software solutions using modern technologies and best practices. From web applications to enterprise systems, we deliver solutions that drive business growth and efficiency.',
      features: [
        'Full-Stack Web Development',
        'RESTful API Development',
        'Microservices Architecture',
        'Database Design & Optimization',
        'Third-party Integration',
        'Legacy System Modernization',
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'TypeScript', 'GraphQL'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      shortDescription: 'Migrate, optimize, and manage your infrastructure on leading cloud platforms.',
      longDescription: 'Our cloud services help you leverage the power of AWS, Azure, and GCP. We design scalable architectures, manage migrations, and optimize costs while ensuring security and reliability.',
      features: [
        'Cloud Migration Strategy',
        'Architecture Design',
        'Cost Optimization',
        'Multi-Cloud Management',
        'Disaster Recovery Planning',
        'Cloud Security Implementation',
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'CloudFormation', 'ARM Templates', 'Cloud Functions'],
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      shortDescription: 'Reliable infrastructure management and automation for optimal performance.',
      longDescription: 'We provide comprehensive infrastructure management services, from server provisioning to monitoring and maintenance. Our automated approach ensures high availability and performance.',
      features: [
        'Server Provisioning & Configuration',
        'Load Balancing & Scaling',
        'Network Configuration',
        'Backup & Recovery',
        'Security Hardening',
        '24/7 Monitoring',
      ],
      technologies: ['Linux', 'Windows Server', 'Nginx', 'HAProxy', 'Prometheus', 'Grafana'],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      shortDescription: 'Protect your applications and data with comprehensive security solutions.',
      longDescription: 'Security is at the core of everything we do. We implement robust security measures, conduct audits, and ensure compliance with industry standards and regulations.',
      features: [
        'Security Audits & Assessment',
        'Vulnerability Scanning',
        'Penetration Testing',
        'Compliance Management',
        'Identity & Access Management',
        'Security Training',
      ],
      technologies: ['OWASP', 'OAuth', 'JWT', 'SSL/TLS', 'WAF', 'SIEM'],
    },
    {
      icon: Database,
      title: 'Database Solutions',
      shortDescription: 'Design, optimize, and manage databases for peak performance and reliability.',
      longDescription: 'Our database experts help you choose the right database technology, design efficient schemas, and optimize queries for maximum performance and scalability.',
      features: [
        'Database Architecture Design',
        'Performance Tuning',
        'Migration Services',
        'Backup & Recovery',
        'Replication Setup',
        'Database Security',
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Cassandra'],
    },
    {
      icon: Settings,
      title: 'Technical Consulting',
      shortDescription: 'Expert guidance on technology strategy, architecture, and best practices.',
      longDescription: 'Get strategic technology advice from experienced professionals. We help you make informed decisions about technology stack, architecture patterns, and development practices.',
      features: [
        'Technology Stack Selection',
        'Architecture Review',
        'Code Review & Audit',
        'Performance Analysis',
        'Scalability Planning',
        'Best Practices Training',
      ],
      technologies: ['Architecture Patterns', 'Design Patterns', 'Agile/Scrum', 'DevOps', 'Microservices', 'Event-Driven'],
    },
    {
      icon: GitBranch,
      title: 'DevOps Consulting',
      shortDescription: 'Transform your development workflow with expert DevOps practices and automation.',
      longDescription: 'Our DevOps consulting services help you streamline your development and deployment processes. We implement CI/CD pipelines, automate infrastructure provisioning, and establish best practices for continuous delivery.',
      features: [
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code (IaC)',
        'Container Orchestration',
        'Monitoring & Logging Setup',
        'Security & Compliance',
        'Performance Optimization',
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    },
  ];

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div 
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-dark-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 dark:border-dark-700 relative"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-600 dark:to-indigo-600 text-white p-6 md:p-8 rounded-t-3xl flex justify-between items-start z-10">
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-md pointer-events-none rounded-t-3xl"></div>
              <div className="relative z-10 w-full">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{service.title}</h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 bg-white/10 backdrop-blur-sm rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-primary-50 text-lg">{service.shortDescription}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Description */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-primary-500 rounded-full mr-3"></span>
                  Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-indigo-500 rounded-full mr-3"></span>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-3 bg-gray-50 dark:bg-dark-900/50 p-4 rounded-xl border border-gray-100 dark:border-dark-700/50"
                    >
                      <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
                  Technologies We Use
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-4 py-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold shadow-sm hover:border-primary-500/50 hover:text-primary-500 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-gray-100 dark:border-dark-700">
                <button
                  onClick={() => {
                    onClose();
                    navigate('/contact');
                  }}
                  className="w-full relative group overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl py-4 sm:py-5 px-8 font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1 block text-center"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get Started with This Service</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <SEO 
        title="Our Services - DevOps, Cloud Solutions & Software Development | Axle Solutions"
        description="Comprehensive technology services including DevOps consulting, cloud solutions, custom software development, mobile apps, security, and infrastructure management."
        keywords="DevOps services, cloud migration, AWS consulting, Azure services, custom software, mobile app development, infrastructure management, security consulting, database solutions"
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
            Our Services
          </motion.h1>
          <motion.p 
            variants={elegantReveal}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive solutions to power your digital transformation
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={elegantReveal}
                className="h-full"
              >
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  perspective={1500}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div
                    className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 h-full cursor-pointer shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-dark-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div className="absolute inset-0 bg-primary-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 w-16 h-16"></div>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg relative z-20">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed relative z-10 flex-grow">
                      {service.shortDescription}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all duration-300 relative z-10 mt-auto">
                      <span>Learn More</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/5"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-primary-500 blur-[80px] animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-indigo-500 blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={elegantReveal} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Why Choose Our Services?</motion.h2>
            <motion.div variants={elegantReveal} className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></motion.div>
            <motion.p variants={elegantReveal} className="text-xl text-primary-100/80 max-w-3xl mx-auto">
              We deliver excellence through experience and expertise
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Proven Expertise',
                description: 'Years of experience delivering successful projects across various industries and technologies.',
              },
              {
                title: 'Agile Approach',
                description: 'Flexible methodology that adapts to your needs and delivers results quickly.',
              },
              {
                title: 'Ongoing Support',
                description: 'We don\'t just deliver and disappear. We provide continuous support and maintenance.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={elegantReveal}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-6">
                  <span className="text-primary-300 font-bold text-xl">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={elegantReveal} className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={elegantReveal} className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </motion.p>
          <motion.div variants={elegantReveal}>
            <button
              onClick={() => navigate('/contact')}
              className="relative group overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full py-4 sm:py-5 px-10 font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1 inline-block"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Contact Us Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
      </div>
    </>
  );
};

export default Services;
