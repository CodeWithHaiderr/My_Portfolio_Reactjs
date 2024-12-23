/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'MERN Real time chat app',
      tags: ['MERN', 'Websockets'],
      projectLink: 'https://chatappmern-7jft.onrender.com/login'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Restaurant Management System',
      tags: ['MERN', 'Stripe'],
      // projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Survey System',
      tags: ['MERN'],
      // projectLink: ''
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Blood Donor Management System',
      tags: ['.NET,', 'MS SQL Server', 'React.js'],
      // projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Online Quiz System',
      tags: ['.NET', 'React.js', 'PostgreSQL'],
      // projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Birds.pk Mobile App',
      tags: ['Flutter', 'Firebase'],
      // projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 [grid-template-columns:repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard
                    key= {key}
                    imgSrc= {imgSrc}
                    title= {title}
                    tags= {tags}
                    projectLink= {projectLink}
                    classes= "reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work