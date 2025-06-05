import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Award, Calendar, Code, Database, Cpu, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "myGuide - AI Travel Assistant",
      description: "AI-powered web app for personalized travel recommendations in Algeria with chatbot integration",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "NestJS", "PostgreSQL", "PyTorch"],
      status: "Ongoing",
      github: "https://github.com/SlimenFellah/myGuide",
      type: "Web app",
      images: ["./assets/projects/myguide/myguide1.jpg", "./assets/projects/myguide/myguide2.jpg", "./assets/projects/myguide/myguide3.jpg", "./assets/projects/myguide/myguide4.jpg", "./assets/projects/myguide/myguide5.jpg", "./assets/projects/myguide/myguide6.jpg", "./assets/projects/myguide/myguide7.jpg", "./assets/projects/myguide/myguide8.jpg"]
    },
    {
      title: "Agrisistance",
      description: "AI-driven application helping African farmers optimize land use and increase crop productivity",
      tech: ["React", "TypeScript", "ChakraUI", "NestJS", "PostgreSQL"],
      link: "https://agrisistance.netlify.app",
      github: "#",
      type: "Web App",
      images: ["./assets/projects/agrisistance/agrisistance1.jpg", "./assets/projects/agrisistance/agrisistance2.jpg", "./assets/projects/agrisistance/agrisistance3.jpg", "./assets/projects/agrisistance/agrisistance4.jpg"]
    },
    {
      title: "PDFinder",
      description: "Comprehensive search engine for scientific articles with microservices architecture",
      tech: ["React", "FastAPI", "Elasticsearch", "MySQL", "Tailwind CSS"],
      github: "#",
      type: "Web App",
      images: ["/assets/projects/pdfinder/pdfinder1.jpg"]
    },
    {
      title: "Needy App",
      description: "Charity mobile application with complementary web platform for finding essential necessities",
      tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "https://needy.onrender.com",
      github: "#",
      type: "Web App",
      images: ["/assets/projects/needy/needy1.jpg", "/assets/projects/needy/needy2.jpg"]
    }
  ];

  const achievements = [
    {
      title: "Winner - Yassir AI Hackathon",
      date: "Dec 2024",
      description: "1st place developing AI-powered driver assignment optimization system"
    },
    {
      title: "Semifinalist - A2SV AI Hackathon",
      date: "Jul-Oct 2024",
      description: "Africa's biggest AI hackathon with 'Agrisistance' project"
    },
    {
      title: "2nd Place - GameCraft Gamejam",
      date: "Aug 2024",
      description: "Created 'Catsu' - puzzle-solving 2D game with time-travel mechanics"
    },
    {
      title: "3rd Place - InnovDigital Competition",
      date: "Apr 2024",
      description: "Electronic Document Management Systems optimization solution"
    }
  ];

  const skills = {
    "Frontend": ["React.js/TS", "Next.js", "TailwindCSS", "Chakra UI"],
    "Backend": ["Node.js", "Express", "NestJS", "FastAPI"],
    "Database": ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
    "AI/ML": ["PyTorch", "Machine Learning", "Deep Learning", "MLIR"],
    "Tools": ["Git", "Docker", "GitHub Actions", "Elasticsearch"]
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


   const [currentIndexes, setCurrentIndexes] = useState(
    projects.map(() => 0) // one index per project
  );

  const handlePrev = (projectIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === projectIndex
          ? (val - 1 + projects[i].images.length) % projects[i].images.length
          : val
      )
    );
  };

  const handleNext = (projectIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === projectIndex
          ? (val + 1) % projects[i].images.length
          : val
      )
    );
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Slimene Fellah
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['About', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="mt-24 w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
              <img
                src={require('./assets/personalPicture.jpg')}
                alt="Personal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Slimene Fellah
              </span>
            </h1>
            {/* <h2 className="text-xl sm:text-2xl text-white/80 mb-6">
              Full Stack Developer & AI Enthusiast
            </h2> */}
            <h2 className="text-xl sm:text-2xl text-white/80 mb-6">
              <Typewriter
                words={[
                  'Computer science student',
                  'Full stack developer',
                  'AI and cyber security enthusiast',
                  'Freelancer',
                ]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Computer Science Engineering Student specializing in Full stack development. 
              Building scalable applications with modern technologies and machine learning integration.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://github.com/SlimenFellah" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Github size={20} />
              GitHub
            </a>
            <a href="mailto:fellah.slimene@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Mail size={20} />
              Email
            </a>
            <a href="https://drive.google.com/file/d/1sKA8N26qfJQGuPOVSGA8Iy0N2ed_Z9sF/view?usp=sharing" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Globe size={20} />
              Resume/CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/60">
            <MapPin size={16} />
            <span>Algiers, Algeria</span>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={24} className="mx-auto text-white/60" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education & Experience</h3>
              <div className="space-y-4 text-white/80">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white">Computer Science Engineering</h4>
                  <p className="text-sm">ESI (ex-INI), Algiers • 2021-Present</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white">Freelance Web Developer</h4>
                  <p className="text-sm">Upwork Inc. • Jan 2024-Present</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white">Research Intern</h4>
                  <p className="text-sm">NYU Abu Dhabi • Jul-Oct 2024</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, techs]) => (
                  <div key={category} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-blue-400 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">

              {/* Image with buttons */}
              <div className="relative mb-4">
                <img
                  src={project.images[currentIndexes[index]]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePrev(index)}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/60"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => handleNext(index)}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/60"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Title & type */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs">
                  {project.type}
                </span>
              </div>

              <p className="text-white/70 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience & Activities
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Community Involvement</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-400">GDG Algiers</h4>
                  <p className="text-white/70">Development Department Member</p>
                  <p className="text-white/60">Event websites, training, hackathons</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">School of AI Algiers</h4>
                  <p className="text-white/70">Technical Department Member</p>
                  <p className="text-white/60">Mentorship and community support</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">Shellmates Club</h4>
                  <p className="text-white/70">Cybersecurity Contributor</p>
                  <p className="text-white/60">CTF challenges and workshops</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Workshops & Talks</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white">Version Control Workshop (Git & GitHub)</span>
                  <span className="text-white/60">Aug 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Regression Algorithms Workshop</span>
                  <span className="text-white/60">Feb 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Multi-disciplinary Project Guide</span>
                  <span className="text-white/60">Dec 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <Award className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{achievement.title}</h3>
                    <div className="flex items-center gap-2 text-yellow-400 text-sm mb-2">
                      <Calendar size={16} />
                      {achievement.date}
                    </div>
                    <p className="text-white/70 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:fellah.slimene@gmail.com" className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/70 text-sm">fellah.slimene@gmail.com</p>
            </a>

            <a href="https://github.com/SlimenFellah" className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Github className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-white/70 text-sm">@SlimenFellah</p>
            </a>

            <a href="https://slimenefellah.vercel.app" className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Globe className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold mb-2">Portfolio</h3>
              <p className="text-white/70 text-sm">slimenefellah.vercel.app</p>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/60">
            <MapPin size={16} />
            <span>Based in Algiers, Algeria</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Slimene Fellah. Built with React and passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;