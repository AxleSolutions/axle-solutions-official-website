import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Server, Cloud, Database, GitBranch, Container } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import SEO from '../components/SEO';
import ParticleBackground from '../components/ParticleBackground';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';

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

const About = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const founders = [
    {
      name: 'Anushka Praveen',
      role: 'Co-Founder & Software Engineer',
      bio: 'Anushka is a skilled Software Engineer with extensive experience in full-stack development and building scalable, high-performance applications. He specializes in React, Node.js, and microservices architecture, with strong expertise in cloud-native development. His focus lies in crafting efficient, maintainable, and user-centric software solutions that drive real-world impact.',
      image: person1,
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL', 'Azure'],
      social: {
        github: 'https://github.com/AnushkaPraveen',
        linkedin: 'https://www.linkedin.com/in/anushka-praveen/',
        email: 'anushkapraveen98@gmail.com',
      },
    },
    {
      name: 'Pasidu Chamod',
      role: 'Co-Founder & DevOps Engineer',
      bio: 'Pasidu is an aspiring DevOps engineer passionate about cloud technologies, automation, and modern software delivery. Currently pursuing a Computer Science degree at the University of Jaffna, he’s gaining hands-on experience with Docker, Kubernetes, GitHub Actions, and CI/CD workflows to build scalable and reliable infrastructure solutions.',
      image: person2,
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Python'],
      social: {
        github: 'https://github.com/Pasiduchamod',
        linkedin: 'https://www.linkedin.com/in/pasidu-chamod/',
        email: 'jayaweera.pasindu123@gmail.com',
      },
    },
  ];

  const technologies = [
    { icon: Cloud, name: 'Cloud Platforms', description: 'AWS, Azure, GCP' },
    { icon: Server, name: 'Backend Development', description: 'Node.js, Python, Java' },
    { icon: Code, name: 'Frontend Development', description: 'React, Vue, Angular' },
    { icon: Database, name: 'Databases', description: 'MongoDB, PostgreSQL, Redis' },
    { icon: Container, name: 'Containerization', description: 'Docker, Kubernetes' },
    { icon: GitBranch, name: 'CI/CD', description: 'Jenkins, GitHub Actions, GitLab CI' },
  ];

  return (
    <>
      <SEO 
        title="About Us - Axle Solutions | Expert Software & DevOps Team"
        description="Meet the expert team at Axle Solutions. Passionate technologists specializing in DevOps, cloud infrastructure, and full-stack development. Learn about our mission and expertise."
        keywords="about axle solutions, DevOps experts, software development team, cloud engineers, full-stack developers, technology consultants"
      />
      <div className="min-h-screen pt-20 relative overflow-hidden bg-gray-50 dark:bg-black">
        
        {/* Interactive Particles Background */}
        <ParticleBackground />

        {/* Abstract animated blurred glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-500/10 dark:bg-primary-500/20 blur-[100px] -z-10 animate-float translate-z-0 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[120px] -z-10 animate-float translate-z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>

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
            About Axle Solutions
          </motion.h1>
          <motion.p 
            variants={elegantReveal}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Meet the team driving innovation and excellence
          </motion.p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-20 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-100 dark:border-dark-700/50 shadow-xl shadow-gray-200/20 dark:shadow-none translate-z-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-3xl -z-10 opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <motion.h2 variants={elegantReveal} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Story
            </motion.h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.p variants={elegantReveal} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Axle Solutions was founded with a clear vision: to help businesses navigate
                the complexities of modern technology and accelerate their digital
                transformation. What started as a partnership between two passionate
                technologists has grown into a trusted consultancy serving clients worldwide.
              </motion.p>
              <motion.p variants={elegantReveal} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We believe that great software is built on a foundation of solid DevOps
                practices, clean architecture, and continuous innovation. Our approach
                combines technical expertise with a deep understanding of business needs,
                ensuring that every solution we deliver creates real value.
              </motion.p>
              <motion.p variants={elegantReveal} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we're proud to work with startups and enterprises alike, helping them
                build, deploy, and scale applications that power their success.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={elegantReveal} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Founders</motion.h2>
            <motion.div variants={elegantReveal} className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></motion.div>
            <motion.p variants={elegantReveal} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The experts behind Axle Solutions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="h-full transform-gpu"
                >
                  <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl p-8 h-full shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100/50 dark:border-dark-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    {/* Profile Image */}
                    <motion.div variants={elegantReveal} className="flex justify-center mb-6 relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-dark-700 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg z-20 transform group-hover:rotate-12 transition-transform duration-500">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Info */}
                    <div className="text-center mb-6 relative z-10">
                      <motion.h3 variants={elegantReveal} className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {founder.name}
                      </motion.h3>
                      <motion.p variants={elegantReveal} className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                        {founder.role}
                      </motion.p>
                      <motion.p variants={elegantReveal} className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                        {founder.bio}
                      </motion.p>
                    </div>

                    {/* Skills */}
                    <motion.div variants={elegantReveal} className="mb-8 relative z-10">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wider text-center">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {founder.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-50/80 dark:bg-dark-900/80 backdrop-blur-md border border-gray-100 dark:border-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium group-hover:border-primary-500/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={elegantReveal} className="flex justify-center space-x-4 pt-6 border-t border-gray-100 dark:border-dark-700 relative z-10">
                      <a href={founder.social.github} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-primary-500 transition-colors bg-gray-50 dark:bg-dark-900 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 group/icon">
                        <Github className="w-5 h-5 transform group-hover/icon:scale-110 transition-transform" />
                      </a>
                      <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-primary-500 transition-colors bg-gray-50 dark:bg-dark-900 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 group/icon">
                        <Linkedin className="w-5 h-5 transform group-hover/icon:scale-110 transition-transform" />
                      </a>
                      <a href={`mailto:${founder.social.email}`} className="p-3 text-gray-400 hover:text-primary-500 transition-colors bg-gray-50 dark:bg-dark-900 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 group/icon">
                        <Mail className="w-5 h-5 transform group-hover/icon:scale-110 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={elegantReveal} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Technology Stack</motion.h2>
            <motion.div variants={elegantReveal} className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></motion.div>
            <motion.p variants={elegantReveal} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We work with cutting-edge technologies
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                variants={elegantReveal}
                whileHover={{ y: -5 }}
                className="flex items-start space-x-6 p-8 bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-100 dark:border-dark-700 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center text-primary-500 dark:text-primary-400 group-hover:scale-110 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-all duration-300">
                    <tech.icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/5"></div>
        
        {/* Animated background elements for Values section */}
        <div className="absolute inset-0 opacity-20">
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
            <motion.h2 variants={elegantReveal} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Our Values</motion.h2>
            <motion.div variants={elegantReveal} className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></motion.div>
            <motion.p variants={elegantReveal} className="text-xl text-primary-100/80 max-w-3xl mx-auto">
              The principles that guide everything we do
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
                title: 'Excellence',
                description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methodologies to provide cutting-edge solutions.',
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships with our clients, working together towards shared success.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={elegantReveal}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-6">
                  <span className="text-primary-300 font-bold text-xl">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
    </>
  );
};

export default About;
