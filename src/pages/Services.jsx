import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
        <div className="bg-white dark:bg-dark-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-t-2xl flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="text-primary-50">{service.shortDescription}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Overview
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies We Use
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
              <button
                onClick={() => {
                  onClose();
                  navigate('/contact');
                }}
                className="btn-primary w-full text-center block"
              >
                Get Started with This Service
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO 
        title="Our Services - DevOps, Cloud Solutions & Software Development | Axle Solutions"
        description="Comprehensive technology services including DevOps consulting, cloud solutions, custom software development, mobile apps, security, and infrastructure management."
        keywords="DevOps services, cloud migration, AWS consulting, Azure services, custom software, mobile app development, infrastructure management, security consulting, database solutions"
        canonical="https://axle-solutions.vercel.app/services"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title animate-fade-in">Our Services</h1>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '100ms' }}>
            Comprehensive solutions to power your digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card p-8 cursor-pointer scroll-animate group"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedService(service)}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-2 transition-all duration-300">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title">Why Choose Our Services?</h2>
            <p className="section-subtitle">
              We deliver excellence through experience and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={index}
                className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg scroll-animate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us Today
          </button>
        </div>
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
