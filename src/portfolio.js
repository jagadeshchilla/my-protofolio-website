/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jagadesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jagadesh Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Jagadesh Chilla",
  logo_name: "JagadeshChilla",
  nickname: "jaggu",
  subTitle:
    "An enthusiastic and driven individual committed to creating end-to-end solutions that build sustainable and scalable social and technical systems to generate meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/1EV75J-5DRcANWPcMFzfmy2xN_g-4dqsG/view?usp=sharing",
  portfolio_repository: "https://github.com/jagadeshchilla",
  githubProfile: "https://github.com/jagadeshchilla",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/jagadeshchilla",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chilla-jagadesh-532246223/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:chillajagadesh68@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/JagadeshChilla",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100053271977731",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jagadeshreddy45/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science(ML & AI)",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Skilled in creating advanced, scalable models for deep learning and statistical applications.",
        "⚡ Extensive background in handling projects related to Computer Vision and Natural Language Processing (NLP).",
        "⚡ Proficient in complex quantitative modeling for dynamic forecasting and time series analysis.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Expertise in building responsive and interactive user interfaces using modern frontend frameworks like React, Angular, or Vue.js, along with HTML, CSS, and JavaScript.",
        "⚡ I have a lot of experience in creating strong backend services and APIs using technologies like Node.js, Express, Django, or Ruby on Rails, to seamlessly integrate with frontend applications.",
        "⚡ I am skilled in working with both SQL and NoSQL databases, such as MySQL, MongoDB, and Firebase, for various web applications.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/jagadeshreddy/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/chillajagadesh68",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/chillajagadesh",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/jagadesh68",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@chillajagadesh68",
    },
    {
      siteName: "Geeks for Geeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/chillajagadesh68/",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#FF6D00",
      },
      profileLink: "https://www.naukri.com/code360/profile/jagadeshchilla",
    },
    {
      siteName: "SPOJ",
      iconifyClassname: "simple-icons:spoj",
      style: {
        color: "#0C3452",
      },
      profileLink: "https://www.spoj.com/myaccount/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University punjab",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "Lpu Punjab",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DSA, DBMS, OS, CP, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.lpu.in/",
    },
    {
      title: "Tirumala Junior College",
      subtitle: "12Th class",
      logo_path: "iu_logo.png",
      alt_name: "Tirumala College",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have Completed my 12th class in Tirumala Junior college,Vishakapatnam",
        "⚡ I got 961 marks in my state board exam",
      ],
      website_link: "https://www.tirumalaedu.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Krishanan Kumar",
      logo_path: "stanford_logo.png",
      certificate_link: "https://simpli-web.app.link/e/0HN79NnjLLb",
      alt_name: "Stanford University",
      color_code: "#1F70C199",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://olympus.mygreatlearning.com/courses/31732/certificate",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "AI on Azure",
      subtitle: "- Marni Backer-Stein",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/MDKCSJGS88XK",
      alt_name: "microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "SQL",
      subtitle: "- Hackerank Training",
      logo_path: "hacker_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/bfd47f4dd2ee",
      alt_name: "HackeRank",
      color_code: "#00000099",
    },
    {
      title: "AWS",
      subtitle: "- Tom Brunskill",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_Jp4wKn2QSJXK8rH33_1691555110050_completion_certificate.pdf",
      alt_name: "Forage",
      color_code: "#D83B0199",
    },
    {
      title: "Big Data Basics",
      subtitle: "- Lalitha Audikesavan",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-dbbdf08c-d3ed-4cda-8498-8100d8ed8144/",
      alt_name: "Microsoft",
      color_code: "#2A73CC",
    },
    {
      title: "Google Cloud Boot Camp",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.geeksforgeeks.org/certificate/0990b817b9fc544892e0be0f8f66c83d?utm_source=socials&utm_medium=cc_link",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Data Analyst Professional Certificate",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9G2KE4H8G4CS",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },

    {
      title: "Fullstack Development",
      subtitle: "- Dr.Angela Yu",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Trainings and Internships",
  description:
    "I have experience working with evolving startups as an ML and DL Developer and Software Architect, and with established companies as an AI Developer. I am passionate about organizing events and actively participate in open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trainings",
      work: true,
      experiences: [
        {
          title: "Full Stack Web-Development",
          company: "Techvanto Academy.",
          company_url: "https://techvantoacademy.in",
          logo_path: "tech_logo.png",
          duration: "June 2023 - July 2023",
          location: "New Delhi, India",
          description:
            "Gained hands-on experience in web application development with Node.js, including designing, implementing, and maintaining programs, while also learning and applying HTML, CSS, JavaScript, React, APIs, and MongoDB.",
          color: "#000000",
        },
        {
          title: "Competitive Programming",
          company: "Code Minutes",
          company_url: "https://codingminutes.com/",
          logo_path: "code_logo.png",
          duration: "Jan 2024 - Feb 2024",
          location: "Phagwara, Punjab",
          description:
            "Acquired skills in competitive programming through practical problem-solving and algorithm design, enhancing proficiency in coding and algorithmic thinking.",
          color: "#0879bf",
        },
        {
          title: "System Designs And Patterns",
          company: "Code Minutes",
          company_url: "https://codingminutes.com/",
          logo_path: "code_logo.png",
          duration: "June 2024 - July 2024",
          location: "Phagwara, Punjab",
          description:
            "Learned system design principles, including scalability, reliability, and performance optimization, as well as designing and architecting robust, efficient, and maintainable systems.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Board Infinity.",
          company_url: "https://www.boardinfinity.com/",
          logo_path: "board_logo.png",
          duration: "Sep 2023 - Oct 2023",
          location: "Mumbai, India",
          description:
            "Gained practical experience in data science through analyzing datasets, developing predictive models, and utilizing tools such as Python, SQL, and machine learning algorithms to derive actionable insights.",
          color: "#000000",
        },
        {
          title: "Machine Learning Intern ",
          company: "Bharath Intern",
          company_url: "https://bharatintern.live/",
          logo_path: "bharat_log.png",
          duration: "Oct 2023 - Nov 2023",
          location: "Phagwara, Punjab",
          description:
            "Acquired practical experience in machine learning by developing and implementing algorithms, analyzing data, and applying models to real-world problems during the internship.",
          color: "#ee3c26",
        },
        {
          title: "AI And Ml Intern",
          company: "Cyber Dosti",
          company_url: "https://www.cyberdosti.com/",
          logo_path: "cyber_logo.png",
          duration: "Aug 2023 - Dec 20123",
          location: "Work From Home",
          description:
            "Acquired practical experience in AI through developing and deploying models, analyzing data, and enhancing algorithms, while gaining insights into machine learning frameworks and data processing techniques.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of cutting-edge technologies, with my most significant experience being the creation and deployment of Data Science projects to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Ai-Smart_irrigation",
      name: "Ai-smart_irrigation",
      createdAt: "...",
      description: "Yet To Published",
      url: "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic.png",
    description:
      "I’m active on most social media platforms and will respond within 24 hours. Feel free to reach out if you need assistance with Machine Learning (ML), Artificial Intelligence (AI), React, Cloud technologies, or Open Source projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lpu, Phagwara, Punjab",
    locality: "Phagwara",
    country: "Punjab",
    region: "Jalandhar",
    postalCode: "144411",
    streetAddress: "Lpu",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/VQ2XHYdus4wSoULTA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
