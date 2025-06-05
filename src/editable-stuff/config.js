// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce,rgb(26, 92, 215),rgb(112, 255, 17),rgb(95, 89, 182),rgb(127, 240, 255), #ecf0f1",
  firstName: "Mazine",
  middleName: "",
  lastName: "SABRI Full Stack .NET Engineer",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Mizo19",
    },
    
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mazine-sabri-5a7b97186/",
    },
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//     
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mazine.jpeg"),
  imageSize: 350,
  message:
    "My name is SABRI Mazine. I’m a graduate of 2021 from National School of Applied Sciences at Khouribga with a degree in Embedded Systems   Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/open?id=1keUW-x_rEoqou_FJ7kRmJBJT2cnNXvyj&authuser=0",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "Mizo19",
  reposLength: 0,
  specificRepos: [
    {
      name: "my-cool-project",
      image: "/images/project1.png",
      description: "This is a project I built using React and Node.js."
    }
  ],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Recent Projects",
  message: (
    <span>
      <div style={{ marginBottom: "20px" }}>
        <strong>Pharmacy Management System</strong> | Developed a comprehensive Pharmacy Management System designed to streamline pharmacy operations and improve efficiency.  
        The system includes essential features for managing inventory, processing sales, handling customer and vendor data, and automating key functions.  
        <strong>Technologies: .NET, C#, SQL Server, Docker, Python (Web Scraping & Data Analysis)</strong>
      </div>

      <div>
        <strong>Hardware Assignmeent Platforme</strong> |Built a web-based tracking tool using ASP.NET Razor Pages to manage and monitor hardware assets used during automotive testing.
The application enables each test team member to view their assigned hardware (e.g., serial numbers), while team leads can assign ownership, add new devices, or remove outdated equipment.
This solution improved transparency, streamlined hardware allocation, and supported more efficient coordination across HIL and integration test phases.
<strong>Technologies: ASP.NET Core Razor Pages, C#, SQL Server, Entity Framework</strong>
      </div>
    </span>
  ),
  images: [
    {
      img: require("../editable-stuff/Hardware.png"),
    },
    {
      img: require("../editable-stuff/pic.png"), // Add your second project's image here
    },
    {
      img: require("../editable-stuff/project.jpg"), // Add your second project's image here
    },
  ],
  imageSize: {
    width: "550",
    height: "400",
  },
  imageStyle: {
    border: "5px solid #000",
    borderRadius: "10px",
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 60},
    { name: "JavaScript", value: 75 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
   "I'm currently looking for full-time Software Engineering opportunities in C#/.NET If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email:"mazinesabri@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
