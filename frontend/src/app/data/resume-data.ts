export const resumeData = {
  hero: {
    name: 'Rohit Singh',
    title: 'Research & Development Engineer',
    tagline: 'Building scalable web solutions with modern technologies',
    email: 'rohit.singh@example.com',
    linkedin: 'https://linkedin.com/in/rohitsingh',
    twitter: 'https://twitter.com/rohitsingh',
    github: 'https://github.com/rohitsingh'
  },

  about: {
    bio: `Software Developer with 4.5 years of experience in full-stack development,
specializing in Angular, ASP.NET, and SQL Server. Passionate about building
scalable web applications and exploring the intersection of software engineering
and artificial intelligence. Committed to writing clean, maintainable code and
continuously learning new technologies.`,
    location: 'New Delhi / Kolkata, India',
    languages: ['English', 'Hindi', 'Bengali'],
    profileImage: ''
  },

  experience: [
    {
      company: 'CargoFlash',
      role: 'Software Developer',
      period: '2020 – Present',
      location: 'India',
      description: 'Built and maintained enterprise logistics and cargo management systems.',
      projects: [
        {
          name: 'OctoGen',
          description: 'Next-generation cargo management system with real-time tracking and analytics dashboard.',
          technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'SignalR']
        },
        {
          name: 'nGen D2D',
          description: 'Door-to-door shipment management platform with automated routing and notifications.',
          technologies: ['Angular 18', 'TypeScript', '.NET 8', 'Web API']
        },
        {
          name: 'RMS (Rating Management System)',
          description: 'Dynamic pricing engine for freight rate calculation supporting multiple carrier configurations.',
          technologies: ['Angular', 'SQL Server', 'Stored Procedures', 'Redis']
        }
      ]
    },
    {
      company: 'CIGNEX Datamatics',
      role: 'Machine Learning Trainee',
      period: '2020',
      location: 'India',
      description: 'Worked on time series analysis and forecasting models.',
      projects: [
        {
          name: 'Time Series Analysis with ARIMA',
          description: 'Developed and deployed ARIMA models for demand forecasting and trend analysis.',
          technologies: ['Python', 'ARIMA', 'Pandas', 'Jupyter']
        }
      ]
    },
    {
      company: 'TATA Technologies',
      role: 'Web Development Intern',
      period: '2019',
      location: 'India',
      description: 'Built dynamic web applications using PHP and MySQL.',
      projects: [
        {
          name: 'Asset Management System',
          description: 'Internal portal for tracking and managing company hardware and software assets.',
          technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery']
        }
      ]
    }
  ],

  skills: [
    // Frontend
    { name: 'Angular 18', category: 'frontend', level: 95 },
    { name: 'TypeScript', category: 'frontend', level: 90 },
    { name: 'HTML5', category: 'frontend', level: 92 },
    { name: 'CSS3 / SCSS', category: 'frontend', level: 88 },
    { name: 'Bootstrap 5', category: 'frontend', level: 90 },
    { name: 'React', category: 'frontend', level: 70 },
    // Backend
    { name: 'ASP.NET Core', category: 'backend', level: 88 },
    { name: '.NET 8', category: 'backend', level: 85 },
    { name: 'C#', category: 'backend', level: 85 },
    { name: 'PHP', category: 'backend', level: 75 },
    // Database
    { name: 'SQL Server', category: 'database', level: 90 },
    { name: 'MySQL', category: 'database', level: 80 },
    { name: 'PostgreSQL', category: 'database', level: 70 },
    // ML / AI
    { name: 'Python', category: 'ml', level: 80 },
    { name: 'Machine Learning', category: 'ml', level: 72 },
    { name: 'Time Series Analysis', category: 'ml', level: 75 },
    { name: 'ARIMA Models', category: 'ml', level: 70 },
    // Tools
    { name: 'Git', category: 'tools', level: 90 },
    { name: 'Docker', category: 'tools', level: 65 },
    { name: 'Azure', category: 'tools', level: 70 },
    { name: 'VS Code', category: 'tools', level: 95 }
  ],

  projects: [
    {
      name: 'Bitcoin Price Forecasting',
      category: 'Machine Learning',
      description: 'Time series forecasting model for Bitcoin price prediction using historical market data.',
      fullDescription: `Developed a robust time series forecasting system for Bitcoin price prediction
using ARIMA and LSTM models. The system processes historical price data, performs
stationarity tests, identifies optimal parameters, and generates forecasts with
configurable time horizons. Built with Python, using Pandas for data preprocessing,
statsmodels for ARIMA modeling, and TensorFlow for deep learning components.`,
      technologies: ['Python', 'ARIMA', 'LSTM', 'TensorFlow', 'Pandas', 'Jupyter'],
      outcomes: 'Achieved 87% forecast accuracy over 30-day prediction horizon',
      icon: 'fa-chart-line'
    },
    {
      name: 'Anti-diabetic Drug Prediction',
      category: 'Healthcare ML',
      description: 'Time series analysis system for predicting drug efficacy and patient response patterns.',
      fullDescription: `Built a machine learning pipeline for analyzing patient response to anti-diabetic
medications using time series data. Implemented SARIMA models to capture seasonal
patterns in blood glucose levels and drug efficacy metrics. The system helps
healthcare providers optimize dosage recommendations and predict treatment outcomes.`,
      technologies: ['Python', 'SARIMA', 'Scikit-learn', 'Pandas', 'NumPy'],
      outcomes: 'Improved prediction accuracy by 23% compared to baseline models',
      icon: 'fa-heart-pulse'
    },
    {
      name: 'Asset Management System',
      category: 'Web Development',
      description: 'Comprehensive internal portal for tracking company hardware and software assets.',
      fullDescription: `Designed and developed a full-featured asset management system for tracking
organizational hardware inventory, software licenses, and maintenance schedules.
Features include QR code generation for assets, automated depreciation calculation,
maintenance reminders, and comprehensive reporting dashboard.`,
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'Ajax'],
      outcomes: 'Reduced asset tracking time by 60% and eliminated manual inventory errors',
      icon: 'fa-server'
    }
  ],

  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'MCKV Institute of Engineering',
      location: 'Kolkata, West Bengal',
      period: '2016 – 2020',
      cgpa: '8.2/10',
      highlights: ['Technical Head of Coding Club', 'Multiple hackathon participations']
    },
    {
      degree: 'Higher Secondary (CBSE)',
      institution: 'Delhi Public School',
      location: 'New Delhi',
      period: '2014 – 2016',
      percentage: '92%',
      highlights: []
    },
    {
      degree: 'Matriculation (CBSE)',
      institution: 'Delhi Public School',
      location: 'New Delhi',
      period: '2014',
      percentage: 'CGPA 10/10',
      highlights: []
    }
  ],

  achievements: [
    {
      title: 'Karate Brown Belt',
      description: 'National Level Karate Championship participant',
      icon: 'fa-person-running'
    },
    {
      title: 'Counter-Strike Champion',
      description: 'Intra-college esports tournament winner',
      icon: 'fa-gamepad'
    },
    {
      title: 'MATLAB Training Certificate',
      description: 'Completed advanced MATLAB training program',
      icon: 'fa-certificate'
    },
    {
      title: 'Advanced Excel Certification',
      description: 'Microsoft Excel Expert level certification',
      icon: 'fa-file-excel'
    },
    {
      title: 'QEEE Course – IIT Mumbai',
      description: 'Qualified in Quantavis E3 initiative from IIT Mumbai',
      icon: 'fa-graduation-cap'
    },
    {
      title: 'QEEE Course – IIT Kharagpur',
      description: 'Qualified in Quantavis E3 initiative from IIT Kharagpur',
      icon: 'fa-graduation-cap'
    }
  ],

  interests: [
    { name: 'Exploring Front-end Frameworks', icon: 'fa-code' },
    { name: 'Open-source Contributions', icon: 'fa-github' },
    { name: 'AI & Machine Learning', icon: 'fa-brain' },
    { name: 'Tech Trend Following', icon: 'fa-newspaper' },
    { name: 'Competitive Programming', icon: 'fa-terminal' },
    { name: 'Web Performance Optimization', icon: 'fa-bolt' }
  ],

  contact: {
    email: 'rohit.singh@example.com',
    linkedin: 'https://linkedin.com/in/rohitsingh',
    twitter: 'https://twitter.com/rohitsingh',
    skype: 'live:rohitsingh',
    github: 'https://github.com/rohitsingh'
  }
};
