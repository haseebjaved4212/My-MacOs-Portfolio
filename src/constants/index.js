
const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "A minimal, animated portfolio template built with GSAP and Locomotive Scroll. ",
    image: "/images/Gsap-port.png",
    link: "https://haseebjaved4212.github.io/Gsap-Portfolio/",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "A modern, immersive, and interactive 3D portfolio website built with Next.js",
    image: "/images/3D-port.png",
    link: "https://3-d-dev-portfolio-rho.vercel.app/",
  },
  {
    id: 3,
    date: "April 15, 2025",
    title: "A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Front End Developer.",
    image: "/images/My-Portfolio.png",
    link: "https://haseebjaved4212.github.io/My--Portfolio/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript",],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS",  "CSS"],
  },
  {
    category: "Backend",
    items: ["Python ", "Django", "FastAPI", "Flask"],
  },
  {
    category: "Database",
    items: [ "MYSQL"],
  },
 
 
  {
    category: "Other",
    items: ["Three.js", "GSAP", "Spline",  "Git", ],
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/haseebjaved4212",
  },
  ,
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Haseebjaved4212?t=Be1nJmdR3ipCsHK3dylBTA&s=09",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/haseeb-javed-0332b3341",
  },
  {
    id: 4,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#DE3163",
    link: "https://www.instagram.com/haseeb_javed4212?igsh=MTV0cWI2aHh2dDRmbw==",
  },
  {
    id: 5,
    text: "Reddit",
    icon: "/icons/reddit.svg",
    bg: "#DE3163",
    link: "https://www.instagram.com/haseeb_javed4212?igsh=MTV0cWI2aHh2dDRmbw==",
  },
  {
    id: 6,
    text: "Facebook",
    icon: "/icons/facebook.svg",
    bg: "#4169E1",
    link: "https://www.facebook.com/share/1BU3pcCN8W/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Prayer Times Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Prayer Times.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A lightweight static Ramadan website that shows live time/date.",
            "lets users pick country and city, and displays daily prayer times fetched from public APIs",
            "It's built with Html, Css and JavaScript, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "Prayer Times Application.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://haseebjaved4212.github.io/Ramadan-Special-Website/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Prayer Times Application.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Prayer Times Application.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Image Enhancer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Image Enhancer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A modern web application that allows users to upload images and enhance them using AI technology.",
            " Built with React, Vite, TailwindCSS, and integrates with the PicWish photo-enhancement API.",
            "Features:",  
            "AI-Powered Image Enhancement: Upload an image and enhance it via an external AI API.",
            "Live Preview: See both the original and enhanced images side by side.",
            "Responsive UI: Built with TailwindCSS for modern, mobile-friendly design.",
          ],
        },
        {
          id: 2,
          name: "Ai Image Enhancer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://haseebjaved4212.github.io/AI-Powered-Image-Enhancer/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Ai Image Enhancer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Ai Image Enhancer.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "3D Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "3D Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern, immersive, and interactive 3D portfolio website built with Next.js, Three.js, and TailwindCSS.",
            "This project showcases a developer's skills, projects, and experience using cutting-edge web technologies and beautiful 3D visuals",
          ],
        },
        {
          id: 2,
          name: "3D Portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://3-d-dev-portfolio-rho.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "3D Portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "3D Portfolio.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hi, I’m Haseeb. Think of me as a Full-Stack Architect with a Frontend soul.",
        "I specialize in building high-fidelity interfaces using Next.js and TypeScript, pushing the limits of the browser with GSAP, Three.js, and Spline.",
        "My technical DNA goes deeper than the UI—I have a solid foundation in Computer Networking, DevOps, and AI/ML basics.",
        "Whether I’m automating workflows or architecting 3D environments, I build with precision and performance in mind.",
        "Currently, I’m 'upgrading' my system by mastering Python to build smarter, more powerful backends.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
// export  {navLinks}