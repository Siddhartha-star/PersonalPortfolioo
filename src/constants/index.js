import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  madhurumHoney,
  wasteWise,
  srmistAiVerse,
  srmHostelMenu,
  chatDapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Science & AI/ML",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "DevOps & System Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Education data
const education = [
  {
    degree: "Bachelor of Technology (Undergraduate - UG)",
    school_name: "SRM IST-Ramapuram",
    date: "2022 - 2026 (Ongoing)",
    points: [
      "Computer Science and Engineering",
      "CGPA: 9.54/10",
      "Core Skills: Data Structures & Algorithms, System Design, Microservices Architecture",
      "Technical Proficiency: MERN Stack (MongoDB, Express, React, Node.js), DevOps, AWS",
      "Project-Based Learning: Built scalable web applications with CI/CD pipelines",
      "Active Member: University Coding Club and Hackathon Team",
      "Research Interest: Distributed Systems and Cloud-Native Application Development"
    ],
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    school_name: "BIIT JR COLLEGE, Guntur",
    date: "2020 - 2022",
    points: [
      "Board of Intermediate Education: A.P.",
      "Percentage: 91.1%",
      "Specialization: MPC (Mathematics, Physics, Chemistry)"
    ],
  },
  {
    degree: "Secondary Education (Class X)",
    school_name: "BHASHYAM HIGH SCHOOL, Guntur",
    date: "2019 - 2020",
    points: [
      "Board of Secondary Education: AP",
      "Percentage: 98.6%"
    ],
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Madhurum Honey",
    icon: web,
    iconBg: "#E6DEDD",
    date: "October 2023 - February",
    points: [
      "Designed and implemented a **sleek, user-friendly interface** that aligns with the brand's **natural aesthetic**, enhancing the **shopping experience** for customers.",
      "Built a **robust backend infrastructure** to manage product listings, customer orders, and **secure transactions** efficiently.",
      "Seamlessly integrated **Razorpay** for a smooth and secure checkout experience, enabling **hassle-free online payments**.",
      "Developed the **entire project independently**, from conceptualization to deployment, showcasing expertise in **full-stack development**.",
      "Empowered the business with a **scalable platform** for selling honey online, fostering a **direct connection** between the brand and its customers."
    ],
  },
  {
    title: "Designer",
    company_name: "Texus 2K23 | SRMIST Ramapuram",
    icon: creator,
    iconBg: "#383E56",
    date: "January 2023 - May 2023",
    points: [
      "Worked as a **Designer** for Texus 2k23, which is a SRMIST Ramapuram **National level Tech Fest**.",
      "Designed the official **Logos and Brochures** for Texus 2k23 from the ground up using **Figma** and **Adobe Xd**.",
      "Collaborated with the event team to ensure **consistent branding** across all event materials.",
      "Contributed to the successful execution of the national-level tech fest through **creative design solutions**."
    ],
  },
  {
    title: "Technical Member and Design Lead",
    company_name: "SlugNPlug | SRM",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "September 2022 - February 2026",
    points: [
      "Served as an **Organizing Committee member** for the **Mindwrap event** of SlugNplug Club, SRM.",
      "Contributed to various **projects** under SlugNplug Club SRM, enhancing the club's technical portfolio.",
      "Conducted sessions to share knowledge in the field of **Artificial Intelligence** with club members and students.",
      "Collaborated with team members to organize **technical events** and **workshops** for the student community."
    ],
  },
  {
    title: "Tech Co-Ordinator",
    company_name: "INTELLECTS | SRM",
    icon: backend,
    iconBg: "#383E56",
    date: "December 2022 - September 2023",
    points: [
      "Made sincere contributions towards the **Game Goblins Event** of Intellects Club, SRM.",
      "Conducted sessions to share knowledge in the field of **Game Development** with students.",
      "Organized **technical workshops** and **hands-on training** sessions for club members.",
      "Mentored junior members in **game development concepts** and **programming techniques**."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Chetan's blockchain expertise was instrumental in our Chat Dapp project. His implementation of end-to-end encryption and user-friendly interface design made our decentralized application accessible to non-technical users.",
    name: "Bhargava Ram",
    designation: "Team Member",
    company: "Hackverse  Hackathon & Madhurum Honey Project"
  },
  {
    testimonial:
      "Working with Chetan on the Madhurum Honey e-commerce platform was a game-changer for our business. His technical skills and attention to detail resulted in a beautiful, functional website that significantly increased our online sales.",
    name: "Ananth",
    designation: "Proprietor",
    company: "Madhurum Honey"
  },
  {
    testimonial:
      "Chetan's design work for Texus 2K23 was exceptional. His creative vision and technical execution of our branding materials elevated the entire event and received praise from all participants and sponsors.",
    name: "Anish",
    designation: "Design Head",
    company: "Texus 2K23"
  },
  {
    testimonial:
      "I've collaborated with Chetan on multiple college projects, and his technical knowledge, problem-solving abilities, and teamwork consistently impress me. He has a rare combination of creative thinking and technical expertise.",
    name: "Mardhav Naga Sai",
    designation: "Colleague",
    company: "SRM IST"
  },
  {
    testimonial:
      "Chetan demonstrated exceptional understanding of Computer Networks concepts and their practical applications. His ability to connect theoretical knowledge with real-world implementations sets him apart from his peers. His projects consistently show technical depth and innovation.",
    name: "K. Rajesh",
    designation: "Faculty",
    company: "SRMIST Ramapuram"
  },
  {
    testimonial:
      "Chetan's UI/UX design skills are truly impressive. He has a natural talent for creating intuitive, visually appealing interfaces that enhance user experience. His attention to design principles while maintaining technical functionality makes his work stand out in every project.",
    name: "M. Narshimha",
    designation: "Friend & UI/UX Enthusiast",
    company: "VIT AP"
  },
];

const projects = [
  {
    name: "Chat Dapp",
    description:
      "A decentralized chat application that prioritizes privacy, security, and censorship resistance through blockchain technology. Features end-to-end encryption, user data ownership, and cross-platform compatibility.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "web3",
        color: "orange-text-gradient",
      },
      {
        name: "encryption",
        color: "purple-text-gradient",
      },
    ],
    image: chatDapp,
    source_code_link: "https://github.com/CAmmanabrolu/chat-dapp",
    live_link: "https://devfolio.co/projects/chat-dapp-b212",
  },
  {
    name: "Waste Wise",
    description:
      "An AI-powered waste management platform that helps users identify, classify, and properly dispose of waste. Features include waste detection via image upload, on-demand collection, reward system, and community engagement.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "neon db",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
      {
        name: "polygon",
        color: "purple-text-gradient",
      },
    ],
    image: wasteWise,
    source_code_link: "https://github.com/CAmmanabrolu/WASTE-WISE",
    live_link: "https://devfolio.co/projects/waste-wise-3ab5",
  },
  {
    name: "SRMIST AI Verse",
    description:
      "A comprehensive informational platform for SRM Institute of Science and Technology providing updates on events, hostel details, daily menus, and campus information with an AI-powered chatbot for assistance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "AI chatbot",
        color: "pink-text-gradient",
      },
      {
        name: "interactive map",
        color: "orange-text-gradient",
      },
    ],
    image: srmistAiVerse,
    source_code_link: "https://github.com/CAmmanabrolu/SRM-AI-VERSE",
    live_link: "https://srmai.verse.chetanshankar.tech/",
  },
  {
    name: "SRM RMP Hostel Menu Website",
    description:
      "A web application providing SRM University students with easy access to daily, weekly, and monthly hostel meal plans, featuring nutritional information, real-time updates, and a responsive design for both desktop and mobile devices.",
    tags: [
      {
        name: "html/css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: srmHostelMenu,
    source_code_link: "https://github.com/CAmmanabrolu/SRM-HOSTEL-MENU-V22",
    live_link: "https://srmhostelmenu.projects.chetanshankar.tech/",
  },
  {
    name: "Madhurum Honey",
    description:
      "A complete e-commerce platform for a honey brand featuring a sleek user interface, robust backend infrastructure, and secure payment integration with Razorpay.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "orange-text-gradient",
      },
    ],
    image: madhurumHoney,
    source_code_link: "", // No GitHub repository available
    live_link: "https://madhurumhoney.com/",
  },
];

// Certificates data
const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Jan 2023",
    credential_id: "AWS-123456",
    credential_url: "https://aws.amazon.com/certification/",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "Mar 2023",
    credential_id: "GCP-789012",
    credential_url: "https://cloud.google.com/certification/cloud-developer",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "May 2023",
    credential_id: "AZURE-345678",
    credential_url: "https://learn.microsoft.com/en-us/certifications/azure-developer",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "Jul 2023",
    credential_id: "META-901234",
    credential_url: "https://www.meta.com/",
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNlcnRpZmljYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "Sep 2023",
    credential_id: "TF-567890",
    credential_url: "https://www.tensorflow.org/certificate",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "Nov 2023",
    credential_id: "CKA-123456",
    credential_url: "https://www.cncf.io/certification/cka/",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];

// Achievements data
const achievements = [
  {
    title: "Best Web Developer Award",
    organization: "TechFest 2023",
    date: "Dec 2023",
    description: "Recognized for creating the most innovative and user-friendly web application at the annual TechFest competition.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXdhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Hackathon Winner",
    organization: "Global Code Challenge",
    date: "Oct 2023",
    description: "Led a team of 4 developers to victory in a 48-hour hackathon, building a solution for sustainable urban mobility.",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2F0aG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Open Source Contributor of the Month",
    organization: "GitHub",
    date: "Aug 2023",
    description: "Recognized for significant contributions to open-source projects, particularly in the areas of React component libraries and accessibility tools.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Research Paper Publication",
    organization: "International Journal of Computer Science",
    date: "Jun 2023",
    description: "Published a research paper on 'Optimizing React Applications for Performance in Resource-Constrained Environments'.",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzZWFyY2glMjBwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Community Educator Award",
    organization: "Tech Community Network",
    date: "Apr 2023",
    description: "Recognized for conducting free coding workshops and mentoring junior developers in the local tech community.",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export { services, technologies, experiences, testimonials, projects, education, certificates, achievements };
