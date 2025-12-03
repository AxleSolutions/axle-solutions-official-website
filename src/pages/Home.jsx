import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Target, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import logo from "../assets/logo.svg"; // dark mode logo
import logolight from "../assets/logo_light.svg"; // light mode logo

const Home = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
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
        canonical="https://axle-solutions.vercel.app/"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl animate-bounce-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src={theme === 'dark' ? logo : logolight}
                alt="Logo"
                className="w-[320px] h-[320px]"
              />
            </div>

            {/* Slogan */}
            <p className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-semibold mb-8">
              Powering Your Digital Drive
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              We are a dynamic software company specializing in DevOps consulting and
              custom software development. Our mission is to accelerate your digital
              transformation with innovative solutions and expert guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20">
              <a href="#features" className="inline-block animate-bounce">
                <div className="w-8 h-12 rounded-full border-2 border-primary-600 dark:border-primary-400 flex items-start justify-center p-2">
                  <div className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full animate-pulse"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">
              We deliver excellence through innovation and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center scroll-animate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-primary-50">
              To empower businesses with cutting-edge technology solutions that drive
              growth, efficiency, and innovation. We believe in building lasting
              partnerships and delivering measurable results.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-700 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Axle Solutions can help you achieve your digital goals.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
