import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Server, Cloud, Database, GitBranch, Container } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
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

  const founders = [
    {
      name: 'Anushka Praveen',
      role: 'Co-Founder & Software Engineer',
      bio: 'Anushka is a skilled Software Engineer with extensive experience in full-stack development and building scalable, high-performance applications. He specializes in React, Node.js, and microservices architecture, with strong expertise in cloud-native development. His focus lies in crafting efficient, maintainable, and user-centric software solutions that drive real-world impact.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGyVKCdgXdmNg/profile-displayphoto-shrink_800_800/B56ZS4pRcPGUAc-/0/1738264615891?e=1764201600&v=beta&t=2hizGDijVeYI1pnv8dgNGmDPhATYQwghTSUSDbS-EFI',
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
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFcCyVTqw6L9Q/profile-displayphoto-shrink_800_800/B56ZWWSIJ2GQAg-/0/1741983090059?e=1764201600&v=beta&t=4uzMIztIvlwH5G9oYmFw6UH_KwCia_hmwT2RB6mARgA',
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
        canonical="https://axle-solutions.vercel.app/about"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title animate-fade-in">About Axle Solutions</h1>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '100ms' }}>
            Meet the team driving innovation and excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Axle Solutions was founded with a clear vision: to help businesses navigate
                the complexities of modern technology and accelerate their digital
                transformation. What started as a partnership between two passionate
                technologists has grown into a trusted consultancy serving clients worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We believe that great software is built on a foundation of solid DevOps
                practices, clean architecture, and continuous innovation. Our approach
                combines technical expertise with a deep understanding of business needs,
                ensuring that every solution we deliver creates real value.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we're proud to work with startups and enterprises alike, helping them
                build, deploy, and scale applications that power their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title">Meet Our Founders</h2>
            <p className="section-subtitle">
              The experts behind Axle Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="card p-8 scroll-animate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-primary-500 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-dark-700">
                  <a
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700 hover:bg-primary-500 dark:hover:bg-primary-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700 hover:bg-primary-500 dark:hover:bg-primary-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${founder.social.email}`}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700 hover:bg-primary-500 dark:hover:bg-primary-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title">Our Technology Stack</h2>
            <p className="section-subtitle">
              We work with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="card p-6 scroll-animate hover:border-primary-500 dark:hover:border-primary-400 border-2 border-transparent transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-primary-50 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 scroll-animate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-primary-50">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
