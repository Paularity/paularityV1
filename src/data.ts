interface PortfolioData {
  about: string;
  experience: ExperienceItem[];
  skills: { name: string; icon: string }[];
  certifications: string[];
}

interface ExperienceItem {
  title: string;
  position: string;
  type: string;
  period: string;
  location: string;
  projects?: { id: string; name: string; role: string; description: string }[];
  responsibilities?: string[];
}

const data: PortfolioData = {
  about: `A highly skilled and adaptable Front-End Developer with extensive experience in enterprise systems and responsive web applications. Adept at building scalable interfaces with modern frameworks (Blazor, Angular) and leading frontend teams through agile sprints, component architecture planning, and CI/CD deployments. Passionate about optimizing user experience and code reusability while aligning with business goals.`,

  experience: [
    // {
    //   title: "CGC (Core Group Company) – US",
    //   position: "Software Engineer",
    //   type: "Freelance Contractor",
    //   period: "Aug 2024 – Present",
    //   location: "Remote",
    //   projects: [
    //     {
    //       name: "Eaton Corp. – Internal Web Application Projects",
    //       role: "Integrations & Migrations",
    //       description:
    //         "Worked on enterprise-level internal tools for Eaton, modernizing legacy systems and integrating web-based enterprise services.",
    //     },
    //   ],
    // },
    {
      title: "Blackfort PH",
      position: "Software Developer – IT Consultant",
      type: "Full-time",
      period: "Aug 2022 – Present",
      location: "Remote",
      projects: [
        {
          id: "0001",
          name: "Blackfort HRIS (Feb 2025 – Present)",
          role: "Senior Frontend Developer / Tech Lead",
          description:
            "An internal HR system like Sprout PH, managing records, attendance, and leave modules.",
        },
        {
          id: "0002",
          name: "DPWH – EDMS (May 2024 – Mar 2025)",
          role: "Senior Frontend Developer",
          description:
            "Electronic Document Management System for DPWH, focusing on file handling, PDF viewer integrations, metadata tagging, and role-based access.",
        },
        {
          id: "0003",
          name: "DPWH – Ngobia (Jun 2023 – Jan 2024)",
          role: "Senior Frontend Developer",
          description:
            "Asset maintenance platform for DPWH to track road and bridge infrastructure status and repair planning.",
        },
        {
          id: "0004",
          name: "PSACC (Aug 2022 – Nov 2024)",
          role: "Senior Frontend Developer",
          description:
            "Cargo Booking Management System and Admin Portal, featuring scheduling, reporting, and reusable UI modules.",
        },
      ],
    },
    {
      title: "SMSI AU",
      position: "Software Developer",
      type: "Freelance Contractor",
      period: "Nov 2019 – Mar 2023",
      location: "Remote",
      responsibilities: [
        "Built Angular 9+ SPA for maintenance and shutdown planning.",
        "Implemented login, gantt charts, dashboards using Chart.js, and Excel-like tables.",
        "Handled CI/CD with Azure DevOps and Git version control.",
      ],
      projects: [
        {
          id: "0005",
          name: "Shutdown Management System - Web Angular App",
          role: "Frontend Developer",
          description: "Todo Description",
        },
        {
          id: "0006",
          name: "Shutdown Management System - Mobile Flutter App",
          role: "Frontend Developer",
          description: "Todo Description",
        },
      ],
    },
    {
      title: "Axesscom Philippines - DE",
      position: "Software Developer",
      type: "Full-time",
      period: "Mar 2018 – May 2020",
      location: "On-site",
      responsibilities: [
        "Managed club & resto booking sites for Discotek Germany.",
        "Used PHP, jQuery, and WordPress; implemented responsive layouts.",
        "Used SVN and Jira for versioning and project tracking.",
      ],
    },
    {
      title: "IP Tech",
      position: "Frontend Developer",
      type: "Freelance Contractor",
      period: "Jan 2018 – May 2018",
      location: "Remote",
    },
    {
      title: "Enigma Technologies",
      position: "Web Developer Intern",
      type: "OJT",
      period: "Sept 2017 – Mar 2018",
      location: "On-site",
    },
  ],

  skills: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Blazor",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "SCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    { name: "Material Design", icon: "https://mui.com/static/logo.png" },
    {
      name: "Telerik UI",
      icon: "https://www.telerik.com/favicon.ico?v=rebv1",
    },
    {
      name: "PrimeNG",
      icon: "https://primefaces.org/cdn/primeng/images/favicon.png",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: ".NET 6/8/9",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Azure DevOps",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    },
    {
      name: "Jira",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Agile",
      icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
  ],

  certifications: [
    "C# (C Sharp) Certification Course – Programming Hub",
    "OOPS Certification Course w/ Excellence – Programming Hub",
    "JavaScript Algorithms and Data Structures – freeCodeCamp",
    "Dart Certification With Excellence – Programming Hub",
    "Flutter Certification With Excellence – Programming Hub",
    "Certified Bootstrap Developer with Excellence – W3Schools.com",
    "Certified CSS Developer – W3Schools.com",
    "Certified jQuery Developer – W3Schools.com",
    "Certified HTML Developer – W3Schools.com",
    "Certified JavaScript Developer – W3Schools.com",
    "Front End Libraries – freeCodeCamp",
    "Responsive Web Design Certification – freeCodeCamp",
    "Microsoft Office Specialist Word 2016 – Microsoft",
    "Certificate of Academic Excellence – INTO PROGRAMMING Local Level 2017 (2nd Runner Up) – STI College",
    "Certificate of Academic Excellence – App & Running 2017 School Level Competition – STI College",
    "Certificate of Participation – App & Running Competition 2016 National Finals – STI College",
    "Certificate of Participation – INTO PROGRAMMING School Level 2015 – STI College",
    "Certificate of Recognition – App & Running 2015 School Level Competition (CHAMPION) – STI College",
    "Certificate of Participation – INTO PROGRAMMING School Level 2014 – STI College",
    "Certificate of Participation – IT Think Quest School Level 2014 – STI College",
    "Top Listed Students – C++ Programming – Holy Angel University",
  ],
};

export default data;
