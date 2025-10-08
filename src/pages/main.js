import { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code, 
  Github, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Award, 
  Calendar, 
  Database, 
  Cpu, 
  Menu, 
  X, 
  FileUser, 
  Linkedin,
  Sun,
  Moon,
  ChevronRight,
  Play,
  Pause,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Coffee,
  GitBranch,
  Users,
  Trophy,
  Target,
  ChevronLeft
} from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { toast, ToastContainer } from 'react-toastify';
import { useTheme } from '../contexts/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';

const Portfolio = () => {
  const { isDark, toggleTheme, colors } = useTheme();
  const currentColors = isDark ? colors.dark : colors.light;
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState(null);
  const email = "fellah.slimene@gmail.com";

  // Initialize image indices for all projects
  useEffect(() => {
    const initialIndices = {};
    projects.forEach((_, index) => {
      initialIndices[index] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, []);

  const nextImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 
        ? projects[projectIndex].images.length - 1 
        : prev[projectIndex] - 1
    }));
  };

  const openLightbox = (projectIndex) => {
    setLightboxProjectIndex(projectIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxProjectIndex(null);
  };

  // Terminal animation effect
  useEffect(() => {
    const commands = [
      'npm install success',
      'git commit -m "life update"',
      'docker build -t developer .',
      'python train_model.py',
      'node server.js --port 3000'
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    let timeoutId;
    
    const typeCommand = () => {
      if (commandIndex < commands.length) {
        if (charIndex < commands[commandIndex].length) {
          setTerminalText(commands[commandIndex].substring(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(typeCommand, 100);
        } else {
          timeoutId = setTimeout(() => {
            setTerminalText('');
            charIndex = 0;
            commandIndex = (commandIndex + 1) % commands.length;
            timeoutId = setTimeout(typeCommand, 500);
          }, 2000);
        }
      }
    };
    
    typeCommand();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
    navigator.clipboard.writeText(email).then(() => {
      toast.success("Email copied to clipboard!", {
        style: {
          background: currentColors.cardBg,
          color: currentColors.text,
          border: `1px solid ${currentColors.border}`
        }
      });
    }).catch(() => {
      toast.error("Failed to copy email.");
    });
  };

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
      description: "AI-powered web app for personalized travel recommendations in Algeria include features like chatbot using RAG and agents recommendation system.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "NestJS", "PostgreSQL", "PyTorch"],
      status: "Ongoing",
      github: "https://github.com/orgs/myGuideSlimene/repositories",
      type: "Web app",
      icon: <Globe className="w-6 h-6" />,
      images: [
        "/assets/projects/myguide/myguide1.jpg",
        "/assets/projects/myguide/myguide2.jpg",
        "/assets/projects/myguide/myguide3.jpg",
        "/assets/projects/myguide/myguide4.jpg",
        "/assets/projects/myguide/myguide5.jpg",
        "/assets/projects/myguide/myguide6.jpg",
        "/assets/projects/myguide/myguide7.jpg",
        "/assets/projects/myguide/myguide8.jpg"
      ]
    },
    {
      title: "Agrisistance",
      description: "AI-driven application helping African farmers optimize land use and increase crop productivity",
      tech: ["React", "TypeScript", "ChakraUI", "NestJS", "PostgreSQL"],
      link: "https://agrisistance.netlify.app/",
      github: "https://github.com/orgs/AGRISISTANCE/repositories",
      type: "Web App",
      icon: <Target className="w-6 h-6" />,
      images: [
        "/assets/projects/agrisistance/agrisistance1.jpg",
        "/assets/projects/agrisistance/agrisistance2.jpg",
        "/assets/projects/agrisistance/agrisistance3.jpg",
        "/assets/projects/agrisistance/agrisistance4.jpg"
      ]
    },
    {
      title: "PDFinder",
      description: "Comprehensive search engine for scientific articles with microservices architecture",
      tech: ["React", "FastAPI", "Elasticsearch", "MySQL", "Tailwind CSS"],
      github: "https://github.com/orgs/TpIgl2023/repositories",
      type: "Web App",
      icon: <Database className="w-6 h-6" />,
      images: [
        "/assets/projects/pdfinder/pdfinder1.jpg"
      ]
    },
    {
      title: "Needy App",
      description: "Charity mobile application with complementary web platform for finding essential necessities",
      tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "https://needy.onrender.com/",
      github: "https://github.com/SlimenFellah/needy",
      type: "Web App",
      icon: <Users className="w-6 h-6" />,
      images: [
        "/assets/projects/needy/needy1.jpg",
        "/assets/projects/needy/needy2.jpg"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design and animations",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/SlimenFellah/portfolio",
      type: "Web App",
      icon: <Code className="w-6 h-6" />,
      images: [
        "/assets/projects/portfolio/Portfolio.png",
        "/assets/projects/portfolio/Portfolio2.png"
      ]
    }
  ];

  const achievements = [
    {
      title: "Winner – Yassir AI Hackathon",
      date: "Dec 2024",
      description: "Achieved 1st place by building an AI-driven system that optimizes driver-task assignments in real time, enhancing fleet efficiency and reducing response time.",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Semifinalist – A2SV AI Hackathon",
      date: "Jul–Oct 2024",
      description: "Selected among Africa's top AI talents with the project 'Agrisistance' — an AI-based solution empowering farmers through land optimization and crop yield prediction.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "2nd Place – GameCraft Game Jam",
      date: "Aug 2024",
      description: "Developed 'Catsu', a 2D puzzle-platformer game featuring innovative time-travel mechanics, designed and built within a limited time frame.",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "3rd Place – InnovDigital Competition",
      date: "Apr 2024",
      description: "Recognized for proposing a smart Electronic Document Management System (EDMS) solution to improve workflow automation and digital archiving efficiency.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const skills = {
    "Frontend": {
      items: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Chakra UI"],
      icon: <Monitor className="w-5 h-5" />
    },
    "Backend": {
      items: ["Node.js", "Express.js", "NestJS", "FastAPI", "Flask"],
      icon: <Terminal className="w-5 h-5" />
    },
    "Database": {
      items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Prisma ORM"],
      icon: <Database className="w-5 h-5" />
    },
    "AI/ML": {
      items: ["PyTorch", "scikit-learn", "TensorFlow", "OpenAI API", "Hugging Face"],
      icon: <Cpu className="w-5 h-5" />
    },
    "Tools": {
      items: ["Git", "Docker", "GitHub Actions", "CI/CD"],
      icon: <GitBranch className="w-5 h-5" />
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{ 
        background: currentColors.gradient,
        color: currentColors.text 
      }}
    >
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${currentColors.border} 1px, transparent 1px), linear-gradient(90deg, ${currentColors.border} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Navigation */}
      <nav 
        className="fixed top-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300"
        style={{ 
          backgroundColor: currentColors.navBg,
          borderColor: currentColors.border 
        }}
      >
        <ToastContainer position="top-center" autoClose={2000} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6" style={{ color: currentColors.text }} />
              <span className="text-xl font-mono font-bold" style={{ color: currentColors.text }}>
                ~/slimene-fellah
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-200 hover:scale-105 font-mono ${
                    activeSection === item.toLowerCase() 
                      ? 'border-b-2' 
                      : 'hover:opacity-70'
                  }`}
                  style={{ 
                    color: activeSection === item.toLowerCase() ? currentColors.text : currentColors.textSecondary,
                    borderColor: activeSection === item.toLowerCase() ? currentColors.text : 'transparent'
                  }}
                >
                  {item.toLowerCase()}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ 
                  backgroundColor: currentColors.accent,
                  color: currentColors.text 
                }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-300"
                style={{ 
                  backgroundColor: currentColors.accent,
                  color: currentColors.text 
                }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ color: currentColors.text }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t" style={{ borderColor: currentColors.border }}>
              {['About', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 font-mono transition-colors hover:opacity-70"
                  style={{ color: currentColors.textSecondary }}
                >
                  {item.toLowerCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto z-10">
          {/* Terminal Window */}
          <div 
            className="mb-8 mx-auto max-w-2xl rounded-lg border shadow-2xl overflow-hidden"
            style={{ 
              backgroundColor: currentColors.cardBg,
              borderColor: currentColors.border 
            }}
          >
            {/* Terminal Header */}
            <div 
              className="flex items-center justify-between px-4 py-2 border-b"
              style={{ 
                backgroundColor: currentColors.accent,
                borderColor: currentColors.border 
              }}
            >
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-sm" style={{ color: currentColors.textMuted }}>
                terminal
              </span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 font-mono text-left">
              <div className="flex items-center mb-2">
                <span style={{ color: currentColors.textMuted }}>$</span>
                <span className="ml-2" style={{ color: currentColors.text }}>
                  whoami
                </span>
              </div>
              <div className="mb-4" style={{ color: currentColors.textSecondary }}>
                slimene-fellah: full-stack developer & ai enthusiast
              </div>
              
              <div className="flex items-start mb-2">
                <span style={{ color: currentColors.textMuted }}>$</span>
                <span className="ml-2 break-all" style={{ color: currentColors.text }}>
                  {terminalText}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-8">
            <div className="flex justify-center">
              <img
                src="/assets/personalPicture.jpg"
                alt="Slimene Fellah"
                className="w-48 h-48 rounded-full border-4 object-cover transition-all duration-500 shadow-xl"
                style={{ 
                  borderColor: currentColors.text,
                  boxShadow: `0 0 30px ${currentColors.text}20`
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 font-mono">
            <span style={{ color: currentColors.text }}>
              Slimene Fellah
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl mb-6 font-mono" style={{ color: currentColors.textSecondary }}>
            <Typewriter
              words={[
                'Computer science student ...',
                'Full-Stack Web & AI Developer ...',
                'Cyber security enthusiast ...',
                'Freelancer ...'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={500}
            />
          </div>

          <p className="text-lg mb-8 max-w-2xl mx-auto font-mono" style={{ color: currentColors.textMuted }}>
            Building scalable applications with modern technologies and AI integration. 
            Passionate about clean code and innovative solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://github.com/SlimenFellah" 
              className="btn-animate flex items-center gap-2 px-6 py-3 rounded-lg font-mono border"
              style={{ 
                backgroundColor: currentColors.cardBg,
                borderColor: currentColors.border,
                color: currentColors.text 
              }}
            >
              <Github size={20} />
              github
            </a>
            
            <button
              onClick={handleEmailClick}
              className="btn-animate flex items-center gap-2 px-6 py-3 rounded-lg font-mono border"
              style={{ 
                backgroundColor: currentColors.cardBg,
                borderColor: currentColors.border,
                color: currentColors.text 
              }}
            >
              <Mail size={20} />
              email
            </button>

            <a 
              href="https://www.linkedin.com/in/slimene-fellah-25950a224/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-animate flex items-center gap-2 px-6 py-3 rounded-lg font-mono border"
              style={{ 
                backgroundColor: currentColors.cardBg,
                borderColor: currentColors.border,
                color: currentColors.text 
              }}
            >
              <Linkedin size={20} />
              linkedin
            </a>

            <a 
              href="https://drive.google.com/file/d/1aEEnkynjFdcL7v_p5bXIiNhGgIV94FQj/view?usp=sharing" 
              className="btn-animate flex items-center gap-2 px-6 py-3 rounded-lg font-mono"
              style={{ 
                backgroundColor: currentColors.text,
                color: currentColors.primary 
              }}
            >
              <FileUser size={20} />
              resume.pdf
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 font-mono" style={{ color: currentColors.textMuted }}>
            <MapPin size={16} />
            <span>Algeria</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono" style={{ color: currentColors.text }}>
              <span style={{ color: currentColors.textMuted }}>//</span> About Me
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: currentColors.text }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: currentColors.cardBg,
                borderColor: currentColors.border 
              }}
            >
              <h3 className="text-2xl font-bold mb-6 font-mono" style={{ color: currentColors.text }}>
                const developer = {'{'}
              </h3>
              <div className="space-y-4 font-mono text-lg ml-4" style={{ color: currentColors.textSecondary }}>
                <div>name: "Slimene Fellah",</div>
                <div>role: "Full-Stack Web & AI Developer",</div>
                <div>education: "Computer Science Engineering",</div>
                <div>passion: ["AI", "Web Development", "Problem Solving"],</div>
                <div>currentFocus: "Building scalable applications",</div>
                <div>coffee: "☕ Always brewing"</div>
              </div>
              <div className="font-mono text-lg mt-4" style={{ color: currentColors.text }}>{'}'}</div>
            </div>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, { items, icon }]) => (
                <div 
                  key={category}
                  className="p-6 rounded-lg border transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: currentColors.cardBg,
                    borderColor: currentColors.border 
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ color: currentColors.text }}>{icon}</div>
                    <h4 className="font-bold font-mono" style={{ color: currentColors.text }}>
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded text-sm font-mono border"
                        style={{ 
                          backgroundColor: currentColors.accent,
                          borderColor: currentColors.border,
                          color: currentColors.textSecondary 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono" style={{ color: currentColors.text }}>
              <span style={{ color: currentColors.textMuted }}>//</span> Projects
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: currentColors.text }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border transition-all duration-300 hover:scale-105 relative z-10"
                style={{ 
                  backgroundColor: currentColors.cardBg,
                  borderColor: currentColors.border 
                }}
              >
                {/* Project Images Carousel */}
                {project.images && project.images.length > 0 && (
                  <div className="relative mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.images[currentImageIndex[index] || 0]}
                      alt={`${project.title} screenshot ${(currentImageIndex[index] || 0) + 1}`}
                      className="w-full h-48 object-cover cursor-zoom-in"
                      onClick={() => openLightbox(index)}
                      onError={(e) => {
                        console.error(`Failed to load image: ${e.target.src}`);
                        e.target.style.display = 'block';
                        e.target.style.backgroundColor = currentColors.cardBg;
                        e.target.style.border = `1px solid ${currentColors.border}`;
                        e.target.alt = `Image not found: ${project.title}`;
                      }}
                    />
                    
                    {/* Navigation Buttons */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(index)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
                          style={{ 
                            backgroundColor: `${currentColors.cardBg}CC`,
                            color: currentColors.text 
                          }}
                        >
                          <ChevronLeft size={16} />
                        </button>
                        
                        <button
                          onClick={() => nextImage(index)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
                          style={{ 
                            backgroundColor: `${currentColors.cardBg}CC`,
                            color: currentColors.text 
                          }}
                        >
                          <ChevronRight size={16} />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                              className="w-2 h-2 rounded-full transition-all duration-200"
                              style={{ 
                                backgroundColor: imgIndex === (currentImageIndex[index] || 0) 
                                  ? currentColors.text 
                                  : `${currentColors.text}40`
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div style={{ color: currentColors.text }}>{project.icon}</div>
                  <h3 className="text-xl font-bold font-mono" style={{ color: currentColors.text }}>
                    {project.title}
                  </h3>
                  {project.status && (
                    <span 
                      className="px-2 py-1 rounded text-xs font-mono"
                      style={{ 
                        backgroundColor: currentColors.accent,
                        color: currentColors.textMuted 
                      }}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="mb-4 font-mono" style={{ color: currentColors.textSecondary }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-mono border"
                      style={{ 
                        backgroundColor: currentColors.accent,
                        borderColor: currentColors.border,
                        color: currentColors.textMuted 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono transition-colors hover:opacity-70"
                    style={{ color: currentColors.text }}
                  >
                    <Github size={16} />
                    code
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono transition-colors hover:opacity-70"
                      style={{ color: currentColors.text }}
                    >
                      <ExternalLink size={16} />
                      demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono" style={{ color: currentColors.text }}>
              <span style={{ color: currentColors.textMuted }}>//</span> Experience
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: currentColors.text }}></div>
          </div>

          <div className="space-y-8">
            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: currentColors.cardBg,
                borderColor: currentColors.border 
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-6 h-6" style={{ color: currentColors.text }} />
                <h3 className="text-xl font-bold font-mono" style={{ color: currentColors.text }}>
                  Freelance Developer
                </h3>
              </div>
              <p className="font-mono mb-2" style={{ color: currentColors.textSecondary }}>
                2023 - Present
              </p>
              <p className="font-mono" style={{ color: currentColors.textMuted }}>
                Building custom web applications and AI solutions for various clients. 
                Specializing in React, Node.js, and machine learning integrations.
              </p>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: currentColors.cardBg,
                borderColor: currentColors.border 
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-6 h-6" style={{ color: currentColors.text }} />
                <h3 className="text-xl font-bold font-mono" style={{ color: currentColors.text }}>
                  Computer Science Student
                </h3>
              </div>
              <p className="font-mono mb-2" style={{ color: currentColors.textSecondary }}>
                2021 - Present
              </p>
              <p className="font-mono" style={{ color: currentColors.textMuted }}>
                Pursuing Computer Science Engineering with focus on AI and software development. 
                Active in hackathons and competitive programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono" style={{ color: currentColors.text }}>
              <span style={{ color: currentColors.textMuted }}>//</span> Achievements
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: currentColors.text }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: currentColors.cardBg,
                  borderColor: currentColors.border 
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ color: currentColors.text }}>{achievement.icon}</div>
                  <h3 className="text-lg font-bold font-mono" style={{ color: currentColors.text }}>
                    {achievement.title}
                  </h3>
                </div>
                <p className="font-mono text-sm mb-2" style={{ color: currentColors.textSecondary }}>
                  {achievement.date}
                </p>
                <p className="font-mono text-sm" style={{ color: currentColors.textMuted }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono" style={{ color: currentColors.text }}>
              <span style={{ color: currentColors.textMuted }}>//</span> Get In Touch
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: currentColors.text }}></div>
          </div>

          <div 
            className="p-8 rounded-lg border mb-8"
            style={{ 
              backgroundColor: currentColors.cardBg,
              borderColor: currentColors.border 
            }}
          >
            <h3 className="text-2xl font-bold mb-6 font-mono" style={{ color: currentColors.text }}>
              Let's build something amazing together
            </h3>
            <p className="font-mono" style={{ color: currentColors.textSecondary }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/fellah-slimene/meet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-mono"
              style={{ 
                backgroundColor: currentColors.text,
                color: currentColors.primary 
              }}
            >
              <Calendar size={20} />
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: currentColors.border }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono" style={{ color: currentColors.textMuted }}>
            © 2026 Slimene Fellah. Built with React & ❤️
          </p>
          <p className="font-mono mt-2" style={{ color: currentColors.textMuted }}>
            Developed and maintained by Slimene Fellah — available for freelance work
          </p>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      {lightboxOpen && lightboxProjectIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm cursor-zoom-out"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="relative w-full max-w-[90vw] md:max-w-5xl px-4">
            <img
              src={projects[lightboxProjectIndex].images[currentImageIndex[lightboxProjectIndex] || 0]}
              alt={`${projects[lightboxProjectIndex].title} full image`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                console.error(`Failed to load image: ${e.target.src}`);
                e.target.style.backgroundColor = currentColors.cardBg;
                e.target.style.border = `1px solid ${currentColors.border}`;
              }}
            />

            {/* Navigation in Lightbox */}
            {projects[lightboxProjectIndex].images.length > 1 && (
              <>
                <button
                  onClick={(ev) => { ev.stopPropagation(); prevImage(lightboxProjectIndex); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: `${currentColors.cardBg}CC`, color: currentColors.text }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={(ev) => { ev.stopPropagation(); nextImage(lightboxProjectIndex); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: `${currentColors.cardBg}CC`, color: currentColors.text }}
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
                  {projects[lightboxProjectIndex].images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={(ev) => { ev.stopPropagation(); setCurrentImageIndex(prev => ({ ...prev, [lightboxProjectIndex]: imgIndex })); }}
                      className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                      style={{ backgroundColor: imgIndex === (currentImageIndex[lightboxProjectIndex] || 0) ? currentColors.text : `${currentColors.text}40` }}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Close button */}
            <button
              onClick={(ev) => { ev.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: `${currentColors.cardBg}CC`, color: currentColors.text }}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}


    </div>
  );
};

export default Portfolio;