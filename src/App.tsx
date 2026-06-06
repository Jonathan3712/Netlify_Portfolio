import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ChevronDown,
  Code,
  Database,
  Cloud,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  Rocket,
  Target,
  TrendingUp,
  Users,
  FileText,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    'Programming & Development': [
      'Python', 'Java', 'JavaScript/TypeScript', 'React.js', 'Node.js', 'Next.js', 'PHP', 'C++'
    ],
    'AI/ML & Automation': [
      'Machine Learning', 'Large Language Models', 'LangChain', 'AWS SageMaker', 'NLP', 'RAG Pipelines', 'N8N Automation'
    ],
    'Cloud & Infrastructure': [
      'AWS (S3, EC2, Lambda)', 'Azure Functions', 'Docker', 'CI/CD', 'GitHub Actions', 'Vercel'
    ],
    'Data & Analytics': [
      'MongoDB', 'MySQL', 'Power BI', 'Data Warehousing', 'OpenSearch', 'Big Data Analytics'
    ]
  };

  const experiences = [
    {
      role: 'Volunteer Software Engineer',
      company: 'Hendricks Chapel, Syracuse University',
      period: 'February 2025 — Present',
      achievements: [
        'Enhanced database functionality achieving 25% improvement in data retrieval speeds',
        'Implemented CI/CD practices reducing deployment time by 30 hours per month',
        'Maintained rigorous documentation standards in Agile environments'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Multiplier AI Solutions, India',
      period: 'May 2022 — August 2022',
      achievements: [
        'Reduced project file transfer time from 8 hours to 5 hours per week across 10 projects',
        'Implemented CRM integration improving project management efficiency',
        'Delivered responsive web applications with 95% client satisfaction'
      ]
    }
  ];

  const projects = [
    {
      title: 'Smart Trigger AI Agent',
      description: 'Engineered autonomous AI agents using LLMs and N8N automation',
      impact: '40% reduction in routine task processing, 60% reduction in manual operations',
      tech: ['LLM', 'N8N', 'Automation', 'AI Agents']
    },
    {
      title: 'Azure-Based Agent Orchestration',
      description: 'Enterprise-grade AI agents with Digital Twin chatbots for NLP-to-SQL conversions',
      impact: 'Scalable RAG pipelines with Azure Blob Storage integration',
      tech: ['Azure Functions', 'LangChain', 'NLP', 'RAG']
    },
    {
      title: 'MERN Stack Applications',
      description: 'Developed three scalable web applications with role-based access control',
      impact: '95% positive user feedback, 20% reduction in API redundancy',
      tech: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'Big Data Analytics Framework',
      description: 'Sophisticated analytical framework processing 30+ years of breach data',
      impact: 'Identified three primary causes of security breaches through advanced visualization',
      tech: ['Python', 'Data Analytics', 'Visualization', 'Security']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-[#131D4F]">JRK</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#254D70] ${
                    activeSection === item.toLowerCase() ? 'text-[#254D70]' : 'text-[#131D4F]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-[#131D4F]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-[#131D4F] hover:text-[#254D70]"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-[#EFE4D2] via-white to-[#EFE4D2]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold text-[#131D4F] mb-6">
              Jonathan Raj <span className="text-[#254D70]">Katikala</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#131D4F]/80 mb-8 max-w-3xl mx-auto">
              Full Stack Software Engineer | AI/ML Specialist | Enterprise Application Developer
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-[#131D4F]/70">
                <MapPin size={20} />
                <span>Syracuse, NY</span>
              </div>
              <div className="flex items-center gap-2 text-[#131D4F]/70">
                <Phone size={20} />
                <span>(315)-880-5752</span>
              </div>
              <div className="flex items-center gap-2 text-[#131D4F]/70">
                <Mail size={20} />
                <span>jonathanraj5678@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-16">
              <a href="https://www.linkedin.com/in/jonathan-katikala" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 bg-[#254D70] text-white px-6 py-3 rounded-lg hover:bg-[#254D70]/90 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/Jonathan3712" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-[#131D4F] text-white px-6 py-3 rounded-lg hover:bg-[#131D4F]/90 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ChevronDown size={32} className="text-[#254D70]" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#131D4F] mb-4">About Me</h2>
            <div className="w-24 h-1 bg-[#254D70] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#131D4F]/80 leading-relaxed mb-8">
              Motivated Associate Software Engineer with a Master's in Computer Science and comprehensive hands-on experience 
              spanning enterprise application development, AI/ML solutions, and full-stack web development. Demonstrated expertise 
              in developing, deploying, and maintaining secure, scalable business applications using modern cloud technologies, 
              data analytics, and automation tools.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#EFE4D2] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-[#254D70]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#131D4F]">Problem Solver</h3>
                <p className="text-[#131D4F]/70">Critical thinking approach to algorithm design and system optimization</p>
              </div>
              <div className="text-center">
                <div className="bg-[#EFE4D2] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-[#954C2E]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#131D4F]">Performance Driven</h3>
                <p className="text-[#131D4F]/70">Proven track record of optimizing systems and improving efficiency</p>
              </div>
              <div className="text-center">
                <div className="bg-[#EFE4D2] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#254D70]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#131D4F]">Collaborative</h3>
                <p className="text-[#131D4F]/70">Cross-functional collaboration with diverse teams and stakeholders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#EFE4D2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#131D4F] mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-[#254D70] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const icons = [Code, Brain, Cloud, Database];
              const Icon = icons[index];
              const colors = ['#254D70', '#954C2E', '#254D70', '#954C2E'];
              const bgColors = ['#EFE4D2', '#EFE4D2', '#EFE4D2', '#EFE4D2'];
              const color = colors[index];
              const bgColor = bgColors[index];
              
              return (
                <div key={category} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-4" style={{ backgroundColor: bgColor }}>
                    <Icon style={{ color }} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-[#131D4F]">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span key={skill} className="bg-[#EFE4D2] text-[#131D4F] px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#131D4F] mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-[#254D70] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className="flex items-start">
                  <div className="bg-[#254D70] rounded-full w-4 h-4 mt-2 mr-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[#131D4F]">{exp.role}</h3>
                          <p className="text-[#254D70] font-medium">{exp.company}</p>
                        </div>
                        <span className="text-[#131D4F]/60 text-sm mt-1 md:mt-0">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Briefcase size={16} className="text-[#954C2E] mr-2 mt-1 flex-shrink-0" />
                            <span className="text-[#131D4F]/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-2 top-16 w-0.5 h-12 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#EFE4D2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#131D4F] mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-[#254D70] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#131D4F]">{project.title}</h3>
                  <Rocket className="text-[#254D70]" size={24} />
                </div>
                <p className="text-[#131D4F]/80 mb-4">{project.description}</p>
                <div className="bg-[#EFE4D2] border-l-4 border-[#954C2E] p-4 mb-4">
                  <p className="text-[#131D4F] font-medium">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-[#EFE4D2]/50 text-[#131D4F] px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#131D4F] mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-[#254D70] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#EFE4D2] to-[#EFE4D2]/70 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-[#254D70] mr-3" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#131D4F]">Master of Science</h3>
                    <p className="text-[#254D70]">Computer Science</p>
                  </div>
                </div>
                <p className="text-[#131D4F]/80 mb-2">State University of New York Polytechnic Institute</p>
                <p className="text-[#131D4F]/60 text-sm">January 2023 — December 2024 | GPA: 3.4</p>
              </div>
              <div className="bg-gradient-to-br from-[#EFE4D2] to-[#EFE4D2]/70 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-[#954C2E] mr-3" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#131D4F]">Bachelor of Engineering</h3>
                    <p className="text-[#954C2E]">Computer Science</p>
                  </div>
                </div>
                <p className="text-[#131D4F]/80 mb-2">Sri Indu College of Engineering and Technology</p>
                <p className="text-[#131D4F]/60 text-sm">July 2018 — April 2022 | GPA: 3.0</p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-[#131D4F] mb-6 flex items-center">
                <Award className="text-[#954C2E] mr-3" size={24} />
                Professional Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#EFE4D2] rounded p-2 mr-4">
                    <FileText className="text-[#254D70]" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#131D4F]">Machine Learning Specialization</h4>
                    <p className="text-[#131D4F]/70">Coursera (DeepLearning.AI & Stanford University)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#EFE4D2] rounded p-2 mr-4">
                    <FileText className="text-[#254D70]" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#131D4F]">Full-Stack Web Development (MERN Stack)</h4>
                    <p className="text-[#131D4F]/70">Verzeo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#EFE4D2] rounded p-2 mr-4">
                    <FileText className="text-[#254D70]" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#131D4F]">Artificial Intelligence Workshop</h4>
                    <p className="text-[#131D4F]/70">IIT Hyderabad (WAC & Kyrion Technologies)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#131D4F] via-[#131D4F] to-[#254D70] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to contribute to organizations focused on digital transformation, automation, and scalable software solutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone size={32} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-white/80">(315)-880-5752</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail size={32} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-white/80">jonathanraj5678@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin size={32} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-white/80">Syracuse, NY<br />Ready to relocate</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="https://www.linkedin.com/in/jonathan-katikala" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#954C2E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#954C2E]/90 transition-colors">
                <Linkedin size={20} />
                Connect on LinkedIn
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131D4F] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">
            © 2025 Jonathan Raj Katikala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;