'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import ContactSection from '../components/Contact';
import { Dancing_Script } from 'next/font/google';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiStreamlit, SiPostgresql, SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiCplusplus, SiJava, SiR, SiVscode, SiPostman, SiOpenai, SiPowerbi, SiGooglecloud } from 'react-icons/si';


const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] });



export default function Home() {
  const projects = [
    {
      images: ['/images/project1.jpg'],
      alt: 'AI Podcast Generator',
      desc: 'This web app generates podcast scripts and realistic voiceovers using IBM Watsonx for natural language generation and IBM Text-to-Speech for audio output.Built using Streamlit for the frontend and Python for backend processing.Focused on a smooth UI, automatic voice integration, and real-time topic-based content creation.',
       tech: 'Python, Streamlit, Watsonx',
    codeLink: 'https://github.com/puniti-web/ai-podcast-generator'
    },
    {
      images: ['/images/project2.png'],
      alt: 'E-Summit Website',
      desc: 'Official website for E-Summit, one of the biggest entrepreneurial fests at VIT.Built using Next.js and Tailwind CSS.I worked on: Designing and developing the Landing Page UI,Building Leader & Member Dashboards,Creating backend schemas for team registrations, quizzes, and admin control panelsCollaborated closely with the design and marketing teams to ensure responsiveness and brand consistency.',
       tech: 'Typescript,Node.js',
    codeLink: 'https://github.com/puniti-web/Esummit25'
    },
    {
      images: ['/images/project3.png'],
      alt: 'Futurepreneurs Website',
      desc: 'Designed and developed a dynamic landing page for Futurepreneurs, an event by E-Cell VIT.Implemented smooth animations, mobile responsiveness, and visually engaging elements to enhance user interaction.Used Next.js, Tailwind CSS, and custom SVG animations for a polished, modern look.',
       tech: 'React,JS,CSS',
    codeLink: 'https://github.com/puniti-web/FuturePreneurs-24'
    },
    {
      images: ['/images/project4.png'],
      alt: 'MS-LAMP',
      desc: 'An upcoming upgrade to MS-LAMP, a standalone tool designed to analyze and interpret lipidomics data from ESI (Electrospray Ionization) and MALDI (Matrix-Assisted Laser Desorption/Ionization) mass spectrometry techniques.The improved version focuses on:Enhanced data preprocessing and filtering algorithmsA more intuitive user interface for lipid identification ,Integration of visual plots and exportable reports for researchers ,Optimized performance to handle large-scale MS datasets efficiently',
       tech: 'Python,Numpy'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentImages = projects[currentIndex].images;
      setImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    setImageIndex(0);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setImageIndex(0);
  };

  return (
    <>
      <Navbar />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#84A7BA] items-center px-6 py-12 text-white scroll-mt-24"
      >
        <div className="w-full flex justify-center">
          <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-xl overflow-hidden shadow-lg relative z-0 border-4">
            {['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg'].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Puniti ${i + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-20 ease-in-out ${
                  i === imageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

       <div className=" max-w-2xl mx-auto">
  {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
    Hi, I'm <span className="text-yellow-400">Puniti Jodhwani</span>
  </h1> */}
  <p className="text-2xl md:text-2xl mb-6 ">
    <p>I&apos;m a 3<sup>rd</sup> Year CSE student
    at VIT,Vellore.With a background in Bioinformatics, I bridge the gap between biology and technology, 
    bringing a unique perspective to problem-solving in the tech world.My journey in web development started with curiosity and quickly turned into a deep interest in creating user-friendly, accessible interfaces.

Beyond code, I enjoy anchoring events, collaborating with entrepreneurs, and exploring creative ways to connect technology with real-world impact. I am always looking to grow, take on new challenges, and contribute to projects that inspire change.</p>
    
  </p>


          <h2 className="text-3xl font-semibold mb-2">Experiences:</h2>
          <ul className="list-disc list-inside space-y-2 text-left text-base md:text-xl">
            <li>Vice-Chairperson at <strong>The Whitehat&apos;s Club</strong> (Cybersecurity, VIT)</li>
            <li>Tech Executive at <strong>Entrepreneurship Cell</strong>, VIT</li>
            <li>Marketing Intern at <strong>MyPerro</strong> (VIT Startup)</li>
            <li>Web Development Intern at <strong>Bluestock Fintech</strong></li>
          </ul>
        </div>
      </section>

    {/*  Projects Section */}
      <section id="projects" className="py-20 bg-[#84A7BA] text-white scroll-mt-24">
        <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-12 px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#BFCBCE] backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.images[0]}
                alt={project.alt}
                className="w-full h-[400px] object-cover"
              />

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">{project.alt}</h3>
                <p className="text-lg leading-relaxed mb-4 text-blue-900">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech?.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-blue-900 border border-white px-4 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Source Code Button */}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-900 font-bold text-sm px-5 py-2 rounded-full hover:bg-gray-200 transition"
                  >
                    View Source Code →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


{/* Education Section */}
<section id="education" className="min-h-screen  px-4 bg-[#84A7BA] md:px-6 py-20 text-white">
  <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">My Education</h2>
<div></div>
  <div className="relative max-w-5xl mx-auto">
    {/* Vertical timeline line */}
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[400px] w-1 bg-white z-0" />


    {/* School Block */}
    <div className="relative z-10 mb-20 flex flex-col md:flex-row items-center md:items-start">
      {/* Left side for school info */}
      <div className="w-full md:w-1/2 md:pr-10 mb-8  md:mb-0">
        <div className="bg-opacity-100 backdrop-blur-lg bg-[#BFCBCE] p-6 rounded-xl shadow-lg border-4">
          <h3 className="text-xl md:text-2xl text-blue-900 font-bold mb-2">JPV DAV Public School <span className="text-sm font-normal">(till 2021)</span></h3>
          <span className="text-blue-900">Stream:PCM</span> 
          <span className="text-blue-900">Class 10 Score:95%</span>

          <h3 className="text-xl md:text-2xl font-bold mt-6 text-blue-900 mb-2">Sanskar Bharti Public School <br className="block md:hidden" /> <span className="text-sm font-normal">(2021–2023)</span></h3>
          <span className="text-blue-900">Stream:95%</span> 
          <span className="text-blue-900">Class 12 Score:90%</span> 
        </div>
      </div>

      {/* Timeline Icon */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-[#BFCBCE] p-3 rounded-full border-4 border-white shadow-md z-20 mt-2">
  <span className="text-white text-xl">🏫</span>
</div>

    </div>

    {/* College Block */}
    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start">
      {/* Right side for college info */}
      <div className="w-full md:w-1/2 md:pl-10 md:ml-auto">
        <div className="bg-opacity-100 backdrop-blur-lg p-6 bg-[#BFCBCE] rounded-xl shadow-lg border-4">
          <h3 className="text-xl text-blue-900 md:text-2xl font-bold mb-2">Vellore Institute of Technology</h3>
          <p className="text-blue-900 mb-2">
            B.Tech, Computer Science & Engineering <br className="block md:hidden" />
            <span className="italic text-blue-900 text-sm">(spl. Bioinformatics) | 2023 – 2027</span>
          </p>
          <p><span className="text-blue-900">CGPA:8.97</span></p>
        </div>
      </div>

      {/* Timeline Icon */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-[#BFCBCE] p-3 rounded-full border-4 border-white shadow-md z-20 mt-2">
  <span className="text-white text-xl">🎓</span>
</div>

    </div>
  </div>
  
</section>


      {/* Skills Section */}
      
<section id="skills" className="min-h-screen bg-[#84A7BA] px-6 py-16 text-white">
  <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>

  <div className="max-w-5xl mx-auto space-y-12 text-xl font-bold">
    {/* Frontend */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
      <div className="flex flex-wrap gap-4">
        {[
          { type: 'icon', class: 'devicon-html5-plain' },
          { type: 'icon', class: 'devicon-css3-plain' },
          { type: 'icon', class: 'devicon-javascript-plain' },
          { type: 'icon', class: 'devicon-react-original' },
          { type: 'text', label: 'Streamlit' }
        ].map((item, index) => (
          <div
            key={`frontend-${index}`}
            className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center justify-center min-w-[80px]"
          >
            {item.type === 'icon' ? (
              <i className={`${item.class} colored text-3xl`} />
            ) : (
              <span className="text-blue-900 italic font-bold text-lg">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Backend */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Backend</h3>
      <div className="flex flex-wrap gap-4">
        {[
          'devicon-nodejs-plain',
          'devicon-typescript-plain',
          'devicon-express-original',
          'devicon-mongodb-plain',
          'devicon-mysql-plain',
          'devicon-postgresql-plain'
        ].map((iconClass, index) => (
          <div
            key={`backend-${index}`}
            className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center justify-center min-w-[80px]"
          >
            <i className={`${iconClass} colored text-3xl`} />
          </div>
        ))}
      </div>
    </div>

    {/* Tools & Platforms */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Tools & Platforms</h3>
      <div className="flex flex-wrap gap-4">
        {[
          'devicon-git-plain',
          'devicon-github-original',
          'devicon-vscode-plain'
        ].map((iconClass, index) => (
          <div
            key={`tools-${index}`}
            className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center justify-center min-w-[80px]"
          >
            <i className={`${iconClass} colored text-3xl`} />
          </div>
        ))}
      </div>
    </div>

    {/* Other Programming Languages */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Other Programming Languages</h3>
      <div className="flex flex-wrap gap-4">
        {[
          'devicon-python-plain',
          'devicon-c-plain',
          'devicon-cplusplus-plain',
          'devicon-java-plain',
          'devicon-r-plain'
        ].map((iconClass, index) => (
          <div
            key={`lang-${index}`}
            className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center justify-center min-w-[80px]"
          >
            <i className={`${iconClass} colored text-3xl`} />
          </div>
        ))}
      </div>
    </div>

    {/* Other Domains */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Other Domains</h3>
      <div className="flex flex-wrap gap-4">
        {[
          'GenAI',
          'Prompt Engineering',
          'OpenAI & Watsonx',
          'Data Visualization'
        ].map((text, index) => (
          <div
            key={`domain-${index}`}
            className="bg-white px-4 py-2 rounded-lg shadow-md text-blue-900 font-bold italic min-w-[150px] text-center"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Certifications Section */}
<section id="certifications" className="min-h-screen px-6 py-20 bg-[#84A7BA] text-white">
  <h2 className="text-5xl font-bold mb-12 text-center">Certifications</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: 'Full Stack Web Development',
        org: 'Cognizance, IIT Roorkee',
        img: '/images/c1.jpeg',
      },
      {
        title: 'Generative AI',
        org: 'IBM',
        img: '/images/c2.png',
      },
      {
        title: 'Data Visualization with Power BI',
        org: 'OfficeMaster',
        img: '/images/c3.jpeg',
      },
      {
        title: 'Raspberry Pi',
        org: 'IIC, VIT',
        img: '/images/c4.png',
      },
      {
        title: "Best Women's Team",
        org: 'MUNSOC, VIT',
        img: '/images/c5.png',
      },
      {
        title: "Yuvamanthan Internal Hackhathon",
        org: 'IIC,VIT',
        img: '/images/yuva.png',
      },
      {
        title: "Internship Completion Certificate",
        org: 'Bluestock',
        img: '/images/c6.jpg',
      },
    ].map((cert, idx) => (
      <div
        key={idx}
        className="bg-[#BFCBCE] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border-3"
      >
        <img src={cert.img} alt={cert.title} className="h-50 w-full object-cover" />
        <div className="p-4 text-blue-900">
          <h4 className="font-bold text-lg">{cert.title}</h4>
          <p className="text-sm text-gray-700">by {cert.org}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      <ContactSection />
    </>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import Navbar from '../components/navbar';
// import ContactSection from '../components/Contact';
// import { Dancing_Script } from 'next/font/google';

// const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] });

// export default function Home() {
//   const projects = [
//     {
//       images: ['/images/project1.jpg'],
//       alt: 'AI Podcast Generator',
//       desc: 'This web app generates podcast scripts and realistic voiceovers using IBM Watsonx for natural language generation and IBM Text-to-Speech for audio output.Built using Streamlit for the frontend and Python for backend processing.Focused on a smooth UI, automatic voice integration, and real-time topic-based content creation.',
//       tech: 'Python, Streamlit, Watsonx',
//       codeLink: 'https://github.com/puniti-web/ai-podcast-generator'
//     },
//     {
//       images: ['/images/project2.png'],
//       alt: 'E-Summit Website',
//       desc: 'Official website for E-Summit, one of the biggest entrepreneurial fests at VIT.Built using Next.js and Tailwind CSS.I worked on: Designing and developing the Landing Page UI,Building Leader & Member Dashboards,Creating backend schemas for team registrations, quizzes, and admin control panelsCollaborated closely with the design and marketing teams to ensure responsiveness and brand consistency.',
//       tech: 'Typescript,Node.js',
//       codeLink: 'https://github.com/puniti-web/Esummit25'
//     },
//     {
//       images: ['/images/project3.png'],
//       alt: 'Futurepreneurs Website',
//       desc: 'Designed and developed a dynamic landing page for Futurepreneurs, an event by E-Cell VIT.Implemented smooth animations, mobile responsiveness, and visually engaging elements to enhance user interaction.Used Next.js, Tailwind CSS, and custom SVG animations for a polished, modern look.',
//       tech: 'React,JS,CSS',
//       codeLink: 'https://github.com/puniti-web/FuturePreneurs-24'
//     },
//     {
//       images: ['/images/project4.png'],
//       alt: 'MS-LAMP',
//       desc: 'An upcoming upgrade to MS-LAMP, a standalone tool designed to analyze and interpret lipidomics data from ESI (Electrospray Ionization) and MALDI (Matrix-Assisted Laser Desorption/Ionization) mass spectrometry techniques.The improved version focuses on:Enhanced data preprocessing and filtering algorithmsA more intuitive user interface for lipid identification ,Integration of visual plots and exportable reports for researchers ,Optimized performance to handle large-scale MS datasets efficiently',
//       tech: 'Python,Numpy'
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentImages = projects[currentIndex].images;
//       setImageIndex((prev) => (prev + 1) % currentImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % projects.length;
//     setCurrentIndex(nextIndex);
//     setImageIndex(0);
//   };

//   const handlePrev = () => {
//     const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     setCurrentIndex(prevIndex);
//     setImageIndex(0);
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Your About, Education, Skills, and Certifications Sections remain same as you’ve pasted — keep them as is */}

//       {/* ✅ Projects Section (fixed) */}
//       <section id="projects" className="py-20 bg-blue-900 text-white scroll-mt-24">
//         <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-300"
//             >
//               {/* Project Image */}
//               <img
//                 src={project.images[0]}
//                 alt={project.alt}
//                 className="w-full h-[400px] object-cover"
//               />

//               {/* Project Content */}
//               <div className="p-6 flex flex-col h-full">
//                 <h3 className="text-3xl font-bold mb-4">{project.alt}</h3>
//                 <p className="text-lg leading-relaxed mb-4 text-white">{project.desc}</p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-3 mb-4">
//                   {project.tech?.split(',').map((tech, i) => (
//                     <span
//                       key={i}
//                       className="bg-white/10 text-white border border-white px-4 py-1 rounded-full text-sm font-semibold"
//                     >
//                       {tech.trim()}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Source Code Button */}
//                 {project.codeLink && (
//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-white text-blue-900 font-bold text-sm px-5 py-2 rounded-full hover:bg-gray-200 transition"
//                   >
//                     View Source →
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <ContactSection />
//     </>
//   );
// }
