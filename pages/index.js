import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Gallery from '../components/Gallery'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Calendar,
  ExternalLink,
  ChevronRight,
  User,
  Briefcase,
  FolderOpen,
  Phone,
  Star,
  Zap,
  Building,
  GraduationCap,
  Camera,
} from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact']
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = {
    backend: [
      'Ruby on Rails',
      'Laravel',
      'Go (Golang)',
      'Node.js',
      'Express.js',
    ],
    frontend: [
      'React.js',
      'Next.js',
      'Polymer.js',
      'Lit Element',
      'Nuxt.js',
      'TypeScript',
    ],
    database: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'SQL Server',
      'Firebase',
      'Oracle',
      'MariaDB',
      'Redis',
    ],
    devops: [
      'Docker',
      'Kubernetes',
      'Nginx',
      'CI/CD',
      'GitHub Actions',
      'Jenkins',
      'AWS',
      'Datadog',
      'ELK Stack',
    ],
    tools: [
      'Git',
      'Portainer',
      'Twilio',
      'PayPal API',
      'Midtrans',
      'Jasper Reports',
      'GTM',
      'Power Builder',
      'Laravel Horizon',
    ],
  }

  const skillIcons = {
    backend: Server,
    frontend: Globe,
    database: Database,
    devops: Code,
    tools: Code,
  }

  const experiences = [
    {
      company: 'Hyperscal, PT SOD TECHNOLOGY INDONESIA',
      position: 'Software Engineer',
      period: 'August 2024 - Present',
      location: 'Jakarta, Indonesia',
      description:
        'Software Engineer responsible for gathering user requirements from Philippines telco clients and providing technical solutions. Currently working on warehouse management system and upcoming BSS/billing system for Philippines telco company.',
      tech: [
        'Laravel',
        'MariaDB',
        'Oracle',
        'Docker',
        'Go',
        'React',
        'Power Builder',
        'Horizon',
        'Redis',
      ],
      achievements: [
        'Gathering user requirements from Philippines telco clients and providing technical solutions',
        'Successfully migrated millions of records from MySQL and Oracle with zero data loss',
        'Currently developing Inventory Management System for warehouse partners (ongoing)',
        'Leading development of new BSS/billing system end-to-end for Philippines telco company (upcoming)',
        'Enhanced warehouse fulfillment efficiency and traceability',
      ],
    },
    {
      company: 'ALODOKTER, PT ALODOKTER TEKNOLOGI SOLUSI',
      position: 'Fullstack Developer',
      period: 'April 2022 - July 2024',
      location: 'Jakarta, Indonesia',
      description:
        'Led a team of 3 developers to build online pharmacy platform and insurance management dashboard. Optimized cart routing logic achieving 40-50% performance improvement.',
      tech: [
        'Ruby on Rails',
        'Polymer JS',
        'Kubernetes',
        'Datadog',
        'Elastic Search',
        'MongoDB',
        'VIDA',
      ],
      achievements: [
        'Led team of 3 developers in building complete online pharmacy platform',
        'Achieved 40-50% performance improvement in cart routing logic',
        'Built order tracking system for partner pharmacies to manage order lifecycle',
        'Developed insurance dashboard for admin management with employee registration and claims',
        'Integrated VIDA face detection for registration validation on frontend',
        'Built real-time order management dashboard for pharmacy partners',
      ],
    },
    {
      company: 'PT GRAHA CITRA PRATAMA',
      position: 'Fullstack Developer',
      period: 'March 2018 - April 2022',
      location: 'Jakarta, Indonesia',
      description:
        'Developed HRIS/Payroll system with fingerprint integration, implemented Microsoft Dynamics NAV, and created Credit Memo Approval system with Accurate Online API integration.',
      tech: [
        'PHP',
        'Laravel',
        'Java',
        'MySQL',
        'SQL Server',
        'Microsoft Dynamics NAV',
      ],
      achievements: [
        'Built comprehensive HRIS/Payroll system with fingerprint integration',
        'Implemented Microsoft Dynamics NAV for accounting department',
        'Created Credit Memo Approval system with Accurate Online API',
        'Generated automated PPH21 CSV forms and performance reports',
      ],
    },
  ]

  const projects = [
    {
      title: 'CaterFood - Catering CRM Platform',
      description:
        'CRM system for catering companies to manage customers, orders, and daily meal adjustments. Handled complete DevOps implementation including deployment and CI/CD pipeline.',
      tech: [
        'Laravel',
        'React.js',
        'Jenkins',
        'Docker',
        'CI/CD',
        'Domain Management',
      ],
      features: [
        'Customer management',
        'Daily meal adjustments',
        'Order tracking',
        'Analytics dashboard',
        'Jenkins CI/CD',
        'Domain setup',
      ],
      url: 'https://caterfood.startner.id',
      type: 'CRM Platform',
      role: 'DevOps',
    },
    {
      title: 'Startner.id - Digital Marketing Platform',
      role: 'Full-Stack Development & Integration',
      description:
        'Full-stack e-commerce platform for digital marketing products with payment gateway integration and comprehensive admin panel.',
      tech: ['Laravel', 'MySQL', 'Docker', 'Nginx', 'CI/CD'],
      features: [
        'E-commerce functionality',
        'Payment gateway (Midtrans)',
        'Partner dashboard',
        'Unit testing',
        'CI/CD pipeline',
      ],
      url: 'https://startner.id',
      type: 'E-commerce',
    },
    {
      title: 'Startner Partner Dashboard',
      role: 'Backend Development & DevOps',
      description:
        'Developed a dedicated dashboard for partners to view and accept incoming project offers, manage ongoing campaigns, and track performance metrics.',
      tech: ['Go', 'MySQL', 'Docker', 'Next.js', 'CI/CD', 'React.js'],
      features: [
        'Project offer management',
        'Campaign tracking',
        'Real-time notifications',
        'Secure partner login',
      ],
      type: 'Internal Tool',
    },
    {
      title: 'Alodokter Online Pharmacy',
      role: 'Full-Stack Development & Integration',
      description:
        "As PIC, led development of the web version of Alodokter's pharmacy commerce platform - previously available only on Android and iOS. Integrated real-time order management and partner tracking features.",
      tech: ['Ruby on Rails', 'Polymer JS', 'MongoDB'],
      features: ['E-commerce platform'],
      url: 'https://alodokter.com/aloshop',
      type: 'Healthcare Platform',
    },
    {
      title: 'Partner Order Management Dashboard',
      role: 'Full-Stack Development',
      description:
        'Built an internal dashboard for partners to track, manage, and fulfill incoming pharmacy orders efficiently with role-based access.',
      tech: ['Ruby on Rails', 'PostgreSQL'],
      features: [
        'Order tracking and filtering',
        'Role-based access control',
        'Performance analytics',
      ],
      type: 'Internal Tool',
    },
    {
      title: 'Insurance Management Dashboard',
      role: 'Frontend & Integration',
      description:
        'Admin dashboard for insurance company partners to manage employees, registrations, and claims with face detection validation.',
      tech: ['Ruby on Rails', 'Polymer JS', 'VIDA', 'Face Detection'],
      features: [
        'Employee registration with face detection',
        'Claims management',
        'User deactivation',
        'Document validation',
      ],
      type: 'Internal Tool',
    },
    {
      title: 'BDA Group - Company Profile',
      role: 'Full-Stack Development & DevOps',
      description:
        'Multi-page company website with AWS infrastructure setup and automated deployment pipeline.',
      tech: [
        'Laravel',
        'React',
        'MySQL',
        'AWS S3',
        'CloudFront',
        'EC2',
        'CI/CD',
      ],
      features: [
        'Company catalog',
        'AWS infrastructure',
        'Automated deployment',
        'Content management',
      ],
      url: 'https://bdagroup.co.id',
      type: 'Company Website',
    },
    {
      title: 'Snuffle - Dog Walking Platform',
      description:
        'Enhanced dog walking platform with real-time features and payment integration.',
      tech: ['Laravel', 'PHP', 'WebSockets', 'PayPal API'],
      role: 'Backend Development',
      features: [
        'Voucher management',
        'Real-time location tracking',
        'PayPal integration',
        'Mobile-first design',
      ],
      url: 'https://snuffle.app',
      type: 'Mobile Platform',
    },
  ]

  const currentProjects = [
    {
      title: 'Learning Management System',
      description:
        'School management system for student registration, curriculum management, classroom organization, and administrative tasks.',
      tech: ['React'],
      features: [
        'Student registration',
        'Curriculum management',
        'Classroom organization',
        'Building management',
        'Transportation',
        'Payroll system',
      ],
      status: 'In Progress',
      role: 'Frontend Development',
    },
    {
      title: 'Trip Manager Expense (Concept)',
      description:
        'Expense management system for group trips with AI integration and social media connectivity to improve user experience.',
      tech: ['Go', 'React', 'LLM Integration', 'Social Media APIs'],
      features: [
        'Expense tracking',
        'Bill splitting',
        'LLM integration',
        'Social media connectivity',
        'Trip collaboration',
      ],
      status: 'Planning Phase',
      role: 'Full-Stack Development',
    },
  ]

  // Sample gallery data - you can add more images here
  const galleryImages = [
    {
      src: './jonathan-chang-photo.jpg',
      alt: 'Jonathan Chang - Professional Photo',
      caption: 'Jonathan Chang - Software Engineer',
    },
    // Add more images here in the future
    {
      src: '/project-screenshot-1.jpg',
      alt: 'Project Screenshot 1',
      caption: 'Online Pharmacy Platform Dashboard',
    },
    {
      src: '/project-screenshot-2.jpg',
      alt: 'Project Screenshot 2',
      caption: 'E-commerce Admin Panel',
    },
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Generate schema markup for projects
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Jonathan Chang's Software Projects",
    description: 'Portfolio of software engineering projects by Jonathan Chang',
    itemListElement: projects.map((project, index) => ({
      '@type': 'CreativeWork',
      position: index + 1,
      name: project.title,
      description: project.description,
      creator: {
        '@type': 'Person',
        name: 'Jonathan Chang',
      },
      url: project.url || 'https://jonathan-chang.dev',
      keywords: project.tech.join(', '),
    })),
  }

  return (
    <>
      <Head>
        <title>
          Jonathan Chang - Software Engineer & Full-Stack Developer | Jakarta,
          Indonesia
        </title>
        <meta
          name="description"
          content="Experienced Software Engineer with 6+ years expertise in Go, Ruby on Rails, Laravel, React, Next.js. Specialized in healthcare, fintech, telco solutions. Available for blockchain opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Projects Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectsSchema),
          }}
        />
      </Head>

      <div
        className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <nav
          className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-slate-800 dark:text-white">
                <a
                  href="#home"
                  onClick={() => scrollToSection('home')}
                  aria-label="Jonathan Chang - Home"
                >
                  Jonathan Chang
                </a>
              </div>
              <div className="hidden md:flex space-x-8" role="menubar">
                {[
                  { id: 'home', label: 'Home', icon: User },
                  { id: 'about', label: 'About', icon: User },
                  { id: 'experience', label: 'Experience', icon: Briefcase },
                  { id: 'projects', label: 'Projects', icon: FolderOpen },
                  { id: 'gallery', label: 'Gallery', icon: Camera },
                  { id: 'contact', label: 'Contact', icon: Phone },
                ].map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      role="menuitem"
                      aria-current={
                        activeSection === section.id ? 'page' : undefined
                      }
                      className={`flex items-center gap-2 transition-colors ${
                        activeSection === section.id
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <Icon size={16} aria-hidden="true" />
                      {section.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content">
          {/* Hero Section */}
          <section
            id="home"
            className="pt-24 pb-20 px-4 sm:px-6 lg:px-8"
            aria-labelledby="hero-heading"
          >
            <div className="max-w-7xl mx-auto">
              <header className="text-center">
                <div className="mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                    <Image
                      src="./jonathan-chang-photo.jpg"
                      alt="Jonathan Chang - Software Engineer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <h1
                  id="hero-heading"
                  className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6"
                >
                  Jonathan Chang
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
                  Software Engineer & Full-Stack Developer
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                  Experienced Software Engineer with 6+ years of expertise in
                  backend (Golang, Ruby on Rails, Laravel) and frontend (React,
                  Next.js) technologies. Specialized in building scalable
                  applications with modern DevOps practices and client
                  requirement analysis.
                </p>
                <address className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 not-italic">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <MapPin size={18} aria-hidden="true" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <a
                    href="mailto:jonathanchang96@gmail.com"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="Email Jonathan Chang"
                  >
                    <Mail size={18} aria-hidden="true" />
                    <span>jonathanchang96@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/jonathanch96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="Jonathan Chang's GitHub profile (opens in new tab)"
                  >
                    <Github size={18} aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jonathan-chang-25901910b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="Jonathan Chang's LinkedIn profile (opens in new tab)"
                  >
                    <Linkedin size={18} aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~01661e7ba037134fe4?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="Jonathan Chang's Upwork profile (opens in new tab)"
                  >
                    <Star size={18} aria-hidden="true" />
                    <span>Upwork</span>
                  </a>
                </address>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                    aria-label="View Jonathan's work and projects"
                  >
                    <FolderOpen size={18} aria-hidden="true" />
                    View My Work
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    aria-label="Get in touch with Jonathan"
                  >
                    <Mail size={18} aria-hidden="true" />
                    Get In Touch
                  </button>
                </div>
              </header>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
            aria-labelledby="about-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h2
                id="about-heading"
                className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16"
              >
                About Me
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <article>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    With over 6 years of experience in software engineering and
                    full-stack development, I specialize in building scalable
                    web applications across healthcare, finance, logistics, and
                    telecommunications industries. I have a proven track record
                    of leading development teams, gathering user requirements,
                    and delivering complex projects from conception to
                    production.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    Currently working as a Software Engineer at Hyperscal,
                    gathering requirements from Philippines telco clients and
                    providing technical solutions. I&apos;m also exploring
                    opportunities in the Blockchain industry to apply my skills
                    in emerging technologies while continuing to grow my
                    expertise in modern development practices.
                  </p>

                  <section className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap
                        className="text-blue-600 dark:text-blue-400"
                        size={20}
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                        Education
                      </h3>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-slate-800 dark:text-white">
                        Bachelor of Computer Science
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Universitas Bina Nusantara (2014-2018)
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        GPA: 3.43
                      </p>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-4">
                      <Award
                        className="text-blue-600 dark:text-blue-400"
                        size={20}
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                        Certifications
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        'Certified Ethical Hacker',
                        'Tokopedia Tech Workshop - Build Scalable APIs with gRPC',
                        'The Complete Guide to Becoming a Software Architect',
                        'Google Tag Manager (GTM) Training Course',
                      ].map((cert, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                        >
                          <ChevronRight
                            size={16}
                            className="text-blue-600 dark:text-blue-400"
                            aria-hidden="true"
                          />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </section>
                </article>

                <aside>
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                    Technical Skills
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(skills).map(([category, skillList]) => {
                      const Icon = skillIcons[category] || Code
                      return (
                        <section key={category}>
                          <div className="flex items-center gap-2 mb-3">
                            <Icon
                              size={20}
                              className="text-blue-600 dark:text-blue-400"
                              aria-hidden="true"
                            />
                            <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 capitalize">
                              {category === 'devops'
                                ? 'DevOps & Infrastructure'
                                : category}
                            </h4>
                          </div>
                          <div
                            className="flex flex-wrap gap-2"
                            role="list"
                            aria-label={`${category} skills`}
                          >
                            {skillList.map((skill) => (
                              <span
                                key={skill}
                                role="listitem"
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </section>
                      )
                    })}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8"
            aria-labelledby="experience-heading"
          >
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <h2
                  id="experience-heading"
                  className="text-4xl font-bold text-slate-800 dark:text-white mb-4"
                >
                  Professional Experience
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Over 6 years of building scalable applications across multiple
                  industries
                </p>
              </header>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <article
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <header className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} aria-hidden="true" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} aria-hidden="true" />
                            <time>{exp.period}</time>
                          </div>
                        </div>
                      </div>
                    </header>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      {exp.description}
                    </p>

                    <section className="mb-6">
                      <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                          >
                            <ChevronRight
                              size={16}
                              className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                        Technologies Used
                      </h5>
                      <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-label="Technologies used"
                      >
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            role="listitem"
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
            aria-labelledby="projects-heading"
          >
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <h2
                  id="projects-heading"
                  className="text-4xl font-bold text-slate-800 dark:text-white mb-4"
                >
                  Featured Projects
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  A showcase of applications I&apos;ve built across different
                  industries
                </p>
              </header>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {projects.map((project, index) => (
                  <article
                    key={index}
                    className="bg-slate-50 dark:bg-slate-700 rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <header className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm mb-2">
                          {project.type}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                          {project.title}
                        </h3>
                        {project.role && (
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Role: {project.role}
                          </p>
                        )}
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label={`Visit ${project.title} (opens in new tab)`}
                        >
                          <ExternalLink size={20} aria-hidden="true" />
                        </a>
                      )}
                    </header>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      {project.description}
                    </p>

                    <section className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                          >
                            <ChevronRight
                              size={14}
                              className="text-blue-600 dark:text-blue-400"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
                        Tech Stack
                      </h4>
                      <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-label="Project technologies"
                      >
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            role="listitem"
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>
                  </article>
                ))}
              </div>

              {/* Current Projects Section */}
              <section
                className="mb-8"
                aria-labelledby="current-projects-heading"
              >
                <header className="flex items-center gap-2 mb-8">
                  <Zap
                    className="text-yellow-600 dark:text-yellow-400"
                    size={24}
                    aria-hidden="true"
                  />
                  <h3
                    id="current-projects-heading"
                    className="text-3xl font-bold text-slate-800 dark:text-white"
                  >
                    Current Projects
                  </h3>
                </header>
                <div className="grid lg:grid-cols-2 gap-8">
                  {currentProjects.map((project, index) => (
                    <article
                      key={index}
                      className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-lg p-8 border-l-4 border-yellow-500"
                    >
                      <header className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                project.status === 'In Progress'
                                  ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                                  : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <h4 className="text-2xl font-bold text-slate-800 dark:text-white">
                            {project.title}
                          </h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Role: {project.role}
                          </p>
                        </div>
                      </header>

                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {project.description}
                      </p>

                      <section className="mb-6">
                        <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
                          Key Features
                        </h5>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                            >
                              <ChevronRight
                                size={14}
                                className="text-yellow-600 dark:text-yellow-400"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
                          Tech Stack
                        </h5>
                        <div
                          className="flex flex-wrap gap-2"
                          role="list"
                          aria-label="Project technologies"
                        >
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              role="listitem"
                              className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </section>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </section>

          {/* Gallery Section */}
          {galleryImages.length > 0 && false && (
            <section
              id="gallery"
              className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
              aria-labelledby="gallery-heading"
            >
              <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                  <h2
                    id="gallery-heading"
                    className="text-4xl font-bold text-slate-800 dark:text-white mb-8"
                  >
                    Gallery
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    A collection of photos and project screenshots. Click on any
                    image to view it in full size.
                  </p>
                </header>

                <div className="max-w-4xl mx-auto">
                  <Gallery
                    images={galleryImages}
                    title="Example of my work"
                    columns={3}
                  />
                </div>
              </div>
            </section>
          )}

          {/* Contact Section */}
          <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
          >
            <div className="max-w-7xl mx-auto text-center">
              <h2
                id="contact-heading"
                className="text-4xl font-bold text-slate-800 dark:text-white mb-8"
              >
                Let&apos;s Connect
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                I&apos;m always interested in discussing new opportunities,
                especially in the Blockchain industry. Let&apos;s talk about how
                we can work together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="mailto:jonathanchang96@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                  aria-label="Send email to Jonathan Chang"
                >
                  <Mail size={20} aria-hidden="true" />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://github.com/jonathanch96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors shadow-lg"
                  aria-label="Visit Jonathan's GitHub profile (opens in new tab)"
                >
                  <Github size={20} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathan-chang-25901910b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                  aria-label="Visit Jonathan's LinkedIn profile (opens in new tab)"
                >
                  <Linkedin size={20} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01661e7ba037134fe4?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg"
                  aria-label="Visit Jonathan's Upwork profile (opens in new tab)"
                >
                  <Star size={20} aria-hidden="true" />
                  <span>Upwork</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          className="bg-slate-800 dark:bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-300">
              © 2024 Jonathan Chang. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
