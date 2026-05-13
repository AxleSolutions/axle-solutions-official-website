import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Target, TrendingUp, ChevronDown, Code, Server, Shield } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import ParticleBackground from '../components/ParticleBackground';
import logo from "../assets/logo.svg";
import logolight from "../assets/logo_light.svg";

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

const Home = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid development and deployment with cutting-edge DevOps practices.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in software development.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on achieving your business objectives with precision.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Build applications that grow with your business needs.',
    },
  ];

  return (
    <>
      <SEO 
        title="Axle Solutions - DevOps Consulting & Custom Software Development"
        description="Transform your business with professional DevOps consulting, cloud solutions, and custom software development. Expert team delivering scalable, innovative technology solutions."
        keywords="DevOps consulting, software development, cloud solutions, web development, mobile apps, AWS, Azure, custom software, IT consulting, digital transformation"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50/10 via-transparent to-primary-100/10 dark:from-primary-900/10 dark:via-black dark:to-primary-900/5">
        
        {/* Interactive Particles Background */}
        <ParticleBackground />

        {/* Elegant Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            style={{ y: yBg, willChange: "transform" }}
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-primary-500/20 rounded-full blur-[80px] md:blur-[120px]"
          />
          <motion.div 
            style={{ y: yBg, willChange: "transform" }}
            animate={{ 
              scale: [1, 1.15, 1], 
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px]"
          />
        </div>

        <motion.div 
          style={{ opacity: opacityHero, willChange: "opacity, transform" }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Logo */}
            <motion.div variants={elegantReveal} className="flex justify-center mb-10 relative">
              <motion.img
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                whileInView={{ y: [0, -10, 0] }}
                viewport={{ once: true }}
                src={theme === 'dark' ? logo : logolight}
                alt="Logo"
                className="w-[280px] h-[280px] relative z-10 will-change-transform"
                style={{ 
                  animation: 'float 8s ease-in-out infinite' 
                }}
              />
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                  100% { transform: translateY(0px); }
                }
              `}} />
            </motion.div>

            {/* Slogan */}
            <motion.h1 
              variants={elegantReveal}
              className="text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white font-bold tracking-tight mb-8"
            >
              Powering Your <br/>
              <span className="relative inline-block text-primary-600 dark:text-white border-b-4 border-primary-500 pb-2">
                Digital Drive
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={elegantReveal}
              className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
            >
              A dynamic software company specializing in premium DevOps consulting and
              custom product development. Accelerate your modern digital
              transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={elegantReveal} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <span className="relative flex items-center gap-3">
                  <span>Explore Engineering</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 font-bold text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all hover:scale-105 backdrop-blur-md">
                Talk to an Expert
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              variants={elegantReveal}
              className="mt-24 flex justify-center"
            >
              <motion.a 
                href="#features" 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex flex-col items-center gap-3 text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative overflow-hidden bg-white dark:bg-black/90">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        {/* Glow behind grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-500/5 dark:bg-primary-900/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={elegantReveal}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Built for Scale</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Delivering absolute excellence through modern engineering discipline, security, and world-class innovation.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={elegantReveal}>
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={2000}
                  gyroscope={true}
                  className="h-full"
                >
                  <div className="group h-full p-8 rounded-3xl bg-white dark:bg-dark-900/60 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-xl transition-colors duration-500 relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-8 shadow-inner relative z-10 group-hover:bg-primary-500 group-hover:border-primary-400 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium relative z-10">
                      {feature.description}
                    </p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section / Showreel Alternative */}
      <section className="py-32 relative overflow-hidden bg-black text-white border-y border-gray-800">
        <motion.div 
          className="absolute inset-0 opacity-40 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-600/30 via-black to-black"></div>
          {/* Animated Tech Data Grid */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            animation: 'grid-scroll 20s linear infinite'
          }}></div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes grid-scroll {
              0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
              100% { transform: perspective(500px) rotateX(60deg) translateY(50px) translateZ(-200px); }
            }
          `}} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 mb-8 backdrop-blur-md">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Unrelenting Performance</span>
            </div>
            
            <p className="text-4xl md:text-6xl font-extrabold leading-tight mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Transforming complex problems into elegant, scalable digital reality.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-bold text-white transition-all backdrop-blur-lg">
                <span>Discover Our DNA</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="p-16 md:p-24 rounded-[3rem] text-center bg-gradient-to-br from-gray-900 to-black dark:border-gray-800 dark:border relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#0f172a] opacity-50 z-0"></div>
            
            {/* CTA glowing orb */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/40 rounded-full blur-[100px] z-0 pointer-events-none"
            />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                Ready to dominate your market?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                Join top-tier companies scaling infrastructure and building flawless products with Axle Solutions.
              </p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link to="/contact" className="group flex items-center gap-4 px-12 py-6 text-xl font-bold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
                  Launch Your Project
                  <div className="bg-gray-900 text-white p-2 rounded-full group-hover:rotate-45 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
