export const resumeData = {
  hero: {
    name: 'Rohit Singh',
    title: 'Full-Stack Software Developer | R&D Engineer',
    tagline: 'AI-Assisted Development | Building Scalable Web Solutions',
    email: 'itsrohitsingh31@gmail.com',
    phone: '+91-8240275783',
    linkedin: 'https://linkedin.com/in/rohit-singh-ml31',
    twitter: '',
    github: 'https://github.com/RohitSinghMcKvian/Rohits-Portfolio',
    location: 'New Delhi – 110003 / Kolkata – 700059'
  },

  about: {
    bio: `Results-driven Full-Stack Software Developer with 5+ years of hands-on experience architecting, developing, and deploying scalable web applications across real estate ERP, cargo logistics and revenue management domains. Proficient in Angular 18, ASP.NET Core 8, C#, Microsoft SQL Server, and MongoDB, with a strong command of RESTful API design, component-driven front-end architecture, and relational and SQL database optimization. Experienced in AI-assisted development workflows using Claude Code and Claude Chat to accelerate user story implementation, automate code scaffolding, and resolve production defects with greater velocity. Adept at translating complex business requirements into maintainable, high-performance solutions. Proven ability to thrive in fast-paced R&D and product engineering environments while collaborating effectively across cross-functional teams.`,
    name: 'Rohit Singh',
    location: 'New Delhi – 110003 / Kolkata – 700059',
    languages: ['English', 'Hindi', 'Bengali'],
    profileImage: 'profile-compressed.jpg',
    resumeUrl: 'Rohit_Singh_Resume.pdf'
  },

  experience: [
    {
      company: 'Gamut Infosystem Pvt. Limited',
      role: 'Full-Stack Software Developer',
      period: 'Mar 2025 – Present',
      location: 'Kolkata',
      description: 'Real Estate ERP – Property Management System',
      projects: [
        {
          name: 'Real Estate ERP Platform',
          description: 'Large-scale ERP platform managing property acquisitions, leasing workflows, tenant lifecycle, maintenance ticketing, and financial reporting across multi-branch environments.',
          technologies: ['Angular 18', 'ASP.NET Core 8', 'SSMS', 'MongoDB']
        },
        {
          name: 'Angular Architecture',
          description: 'Architected reusable Angular 18 standalone components with reactive forms, RxJS observables, and lazy-loaded feature modules.',
          technologies: ['Angular 18', 'Reactive Forms', 'RxJS', 'Lazy Loading']
        },
        {
          name: 'RESTful API Integration',
          description: 'Developed and integrated RESTful APIs in ASP.NET Core 8 (C#) following clean architecture and SOLID principles with dual-database strategy.',
          technologies: ['ASP.NET Core 8', 'Clean Architecture', 'SOLID', 'SQL Server', 'MongoDB']
        },
        {
          name: 'AI-Assisted Development',
          description: 'Utilized Claude Code (AI-assisted agentic CLI) to autonomously generate boilerplate, scaffold Angular modules, and implement user stories from ticket descriptions.',
          technologies: ['Claude Code', 'Claude Chat', 'AI-Assisted Development']
        },
        {
          name: 'Production Debugging',
          description: 'Identified, debugged, and resolved critical live production defects using Chrome DevTools and server-side logging.',
          technologies: ['Chrome DevTools', 'Server Logging', 'Production Support']
        }
      ]
    },
    {
      company: 'CargoFlash',
      role: 'Software Developer – R&D Engineer',
      period: 'Jul 2020 – Feb 2025 (4 Years 7 Months)',
      location: 'Gurgaon',
      description: 'Built enterprise cargo management and logistics platforms',
      projects: [
        {
          name: 'OctoGen – Cargo Management Platform',
          description: 'Next-generation cargo management system with real-time tracking, booking, and analytics dashboard built from the ground up.',
          technologies: ['Angular 18', 'ASP.NET', 'MS SQL Server', 'SignalR']
        },
        {
          name: 'Angular Module Architecture',
          description: 'Designed modular Angular 18 feature modules with reactive forms, route guards, interceptors, and service-based architecture.',
          technologies: ['Angular 18', 'Route Guards', 'Interceptors', 'RxJS']
        },
        {
          name: 'T-SQL Optimization',
          description: 'Authored optimized T-SQL stored procedures, indexed views, and query plans for high-concurrency transaction processing.',
          technologies: ['T-SQL', 'Stored Procedures', 'Query Optimization', 'Indexed Views']
        },
        {
          name: 'nGen D2D – Door-to-Door Delivery System',
          description: 'Last-mile delivery management system enabling real-time shipment tracking, route assignment, and delivery confirmation.',
          technologies: ['jQuery', 'ASP.NET Core', 'SQL Server', 'Ajax']
        },
        {
          name: 'nGen RMS – Revenue Management System',
          description: 'Dynamic Revenue Management System using React JS and C# MVC to automate yield pricing and capacity allocation.',
          technologies: ['React JS', 'C# MVC', 'MS SQL Server', 'RESTful API']
        }
      ]
    },
    {
      company: 'Cignex Datamatics',
      role: 'ML Developer Trainee',
      period: 'Jan 2020 – Jun 2020 (6 Months)',
      location: 'Ahmedabad',
      description: 'Machine Learning & Time Series Analysis',
      projects: [
        {
          name: 'Time Series Analysis & Forecasting',
          description: 'Conducted exploratory data analysis and time series modelling using Python libraries including statsmodels, SciPy, and pandas.',
          technologies: ['Python', 'statsmodels', 'SciPy', 'pandas']
        },
        {
          name: 'Statistical Modelling',
          description: 'Applied ACF, PACF, ADF, and KPSS tests for stationarity validation and ARIMA parameter estimation.',
          technologies: ['ARIMA', 'ACF/PACF', 'ADF/KPSS', 'Time Series']
        },
        {
          name: 'NLP Pipeline',
          description: 'Developed Natural Language Processing (NLP) pipeline using Bag-of-Words (BoW) model for document classification tasks.',
          technologies: ['NLP', 'Bag-of-Words', 'Text Classification']
        }
      ]
    },
    {
      company: 'TATA Technologies Pvt. Ltd.',
      role: 'Web Development Intern',
      period: 'Jun 2019 – Jul 2019 (1 Month)',
      location: 'Jamshedpur',
      description: 'Internal Web Applications Development',
      projects: [
        {
          name: 'Asset Management System',
          description: 'Developed a web-based internal tool using PHP, MySQL, and JavaScript within XAMPP environment.',
          technologies: ['PHP', 'MySQL', 'JavaScript', 'XAMPP']
        },
        {
          name: 'Database Management',
          description: 'Designed and managed relational database schemas using MySQL and PhpMyAdmin.',
          technologies: ['MySQL', 'PhpMyAdmin', 'Database Design']
        }
      ]
    }
  ],

  skills: [
    // Front-End Development
    { name: 'Angular 18', category: 'frontend', level: 95 },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 90 },
    { name: 'TypeScript', category: 'frontend', level: 88 },
    { name: 'React JS', category: 'frontend', level: 70 },
    { name: 'jQuery', category: 'frontend', level: 75 },
    { name: 'HTML5', category: 'frontend', level: 92 },
    { name: 'CSS3 / SCSS', category: 'frontend', level: 88 },
    { name: 'Bootstrap 5', category: 'frontend', level: 90 },
    // Back-End Development
    { name: 'ASP.NET Core 8', category: 'backend', level: 88 },
    { name: 'C# (.NET)', category: 'backend', level: 85 },
    { name: 'RESTful API Design', category: 'backend', level: 85 },
    { name: 'Clean Architecture', category: 'backend', level: 80 },
    { name: 'SOLID Principles', category: 'backend', level: 75 },
    // Database & Data Management
    { name: 'SQL Server (SSMS)', category: 'database', level: 90 },
    { name: 'MongoDB', category: 'database', level: 80 },
    { name: 'MySQL', category: 'database', level: 75 },
    // AI / LLM-Assisted Development
    { name: 'Claude Code', category: 'ai', level: 95 },
    { name: 'Claude Chat', category: 'ai', level: 90 },
    // Data Science & Machine Learning
    { name: 'Python', category: 'ml', level: 80 },
    { name: 'Time Series Analysis', category: 'ml', level: 75 },
    { name: 'ARIMA / AR / MA Models', category: 'ml', level: 70 },
    { name: 'Machine Learning', category: 'ml', level: 72 },
    // Tools & DevOps
    { name: 'Git', category: 'tools', level: 90 },
    { name: 'Chrome DevTools', category: 'tools', level: 85 },
    { name: 'Agile/Scrum', category: 'tools', level: 80 },
    { name: 'Software Architecture', category: 'tools', level: 75 }
  ],

  projects: [
    {
      name: 'Bitcoin Price Forecasting',
      category: 'Machine Learning',
      description: 'Time series forecasting model for Bitcoin price prediction using ARIMA, AR, and MA models.',
      fullDescription: `Designed and implemented a multi-model forecasting pipeline using AR, MA, and ARIMA models to predict short-term Bitcoin price movements based on historical OHLCV data. Performed data preprocessing, rolling-window stationarity tests (ADF, KPSS), and hyperparameter tuning via ACF/PACF plots. Validated model accuracy using RMSE and MAE evaluation metrics.`,
      technologies: ['Python', 'statsmodels', 'ARIMA', 'pandas', 'SciPy'],
      outcomes: 'Demonstrated applied expertise in financial time series forecasting and statistical modelling',
      icon: 'fa-chart-line'
    },
    {
      name: 'Anti-Diabetic Drug Sales Prediction',
      category: 'Healthcare ML',
      description: 'Time series analysis system for predicting drug sales demand using Moving Average model.',
      fullDescription: `Built a sales demand forecasting model for anti-diabetic pharmaceutical products using the Moving Average (MA) model to capture short-term trend patterns in monthly sales data. Conducted end-to-end data pipeline including ingestion, cleaning, ACF/PACF-based parameter selection, stationarity validation, and model evaluation. Delivered actionable demand forecast outputs applicable to supply chain planning and inventory optimization.`,
      technologies: ['Python', 'MA Model', 'statsmodels', 'SciPy', 'pandas'],
      outcomes: 'Actionable demand forecast outputs for supply chain planning and inventory optimization',
      icon: 'fa-heart-pulse'
    },
    {
      name: 'Asset Management System',
      category: 'Web Development',
      description: 'Full-stack web-based system for tracking organizational hardware and software assets.',
      fullDescription: `Designed and developed a full-stack web-based Asset Management System enabling CRUD operations for organizational hardware and software asset tracking. Implemented a MySQL relational database with normalized schemas using PhpMyAdmin for database administration. Built an interactive front-end using HTML5, CSS3, and JavaScript with client-side validation for form inputs, improving data quality and user experience.`,
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery', 'XAMPP'],
      outcomes: 'Reduced asset tracking time by 60% and eliminated manual inventory errors',
      icon: 'fa-server'
    }
  ],

  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'MCKV Institute of Engineering (MAKAUT)',
      location: 'Kolkata, West Bengal',
      period: '2016 – 2020',
      cgpa: '7.42/10',
      highlights: ['QEEE Course – IIT Mumbai', 'QEEE Course – IIT Kharagpur']
    },
    {
      degree: 'Higher Secondary (Class XII)',
      institution: 'Tantia High School, WBCHSE',
      location: 'West Bengal',
      period: '2013 – 2015',
      percentage: '68.4%',
      highlights: []
    },
    {
      degree: 'Matriculation (Class X)',
      institution: 'Gyan Bharati Vidyapith, WBBSE',
      location: 'West Bengal',
      period: '2011 – 2013',
      percentage: '78.4%',
      highlights: []
    }
  ],

  achievements: [
    {
      title: 'Brown Belt – Karate',
      description: 'Japanese Shotokan Karate Association – Brown Belt',
      icon: 'fa-person-running'
    },
    {
      title: 'Inter-College CS Champion',
      description: 'Inter-College Champion – Counter Strike 1.6 Tournament (Jan 2019)',
      icon: 'fa-gamepad'
    },
    {
      title: 'TATA Technologies Certificate',
      description: 'Internship Completion Certificate – TATA Technologies Pvt. Ltd.',
      icon: 'fa-certificate'
    },
    {
      title: 'QEEE Course – IIT Mumbai',
      description: 'C Programming & Data Structures – IIT Mumbai (Jun–Sep 2017)',
      icon: 'fa-graduation-cap'
    },
    {
      title: 'QEEE Course – IIT Kharagpur',
      description: 'Chemistry – IIT Kharagpur (Jan–Apr 2017)',
      icon: 'fa-graduation-cap'
    },
    {
      title: 'Advanced Excel',
      description: 'Advanced Excel Training – Nov 2017',
      icon: 'fa-file-excel'
    },
    {
      title: 'MATLAB Training',
      description: 'MATLAB Training – May–Jun 2017',
      icon: 'fa-file-code'
    }
  ],

  interests: [
    { name: 'AI-Assisted Development', icon: 'fa-robot' },
    { name: 'Exploring Front-end Frameworks', icon: 'fa-code' },
    { name: 'Open-source Contributions', icon: 'fa-github' },
    { name: 'Machine Learning & AI', icon: 'fa-brain' },
    { name: 'Competitive Programming', icon: 'fa-terminal' },
    { name: 'Web Performance Optimization', icon: 'fa-bolt' }
  ],

  contact: {
    email: 'itsrohitsingh31@gmail.com',
    phone: '+91-8240275783',
    linkedin: 'https://linkedin.com/in/rohit-singh-ml31',
    twitter: '',
    github: 'https://github.com/RohitSinghMcKvian/Rohits-Portfolio'
  }
};