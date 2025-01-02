import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    title: 'JobWay',
    description: 'A full-featured admin dashboard with real-time analytics, inventory management, and order processing capabilities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    sourceCode: 'https://github.com/Manikant69/JobWay',
    liveDemo: 'https://job-portal-kzws.onrender.com/',
  },
  {
    title: 'Book Store App',
    description: 'Smart task management app that uses AI to prioritize and categorize tasks, with real-time collaboration features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2424&ixlib=rb-4.0.3',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    sourceCode: 'https://github.com/Manikant69/Book-store-app',
    liveDemo: 'https://book-store-app-fr.vercel.app/',
  },
  {
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics platform for social media managers with sentiment analysis and engagement tracking.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2424&ixlib=rb-4.0.3',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    sourceCode: 'https://github.com/yourusername/social-analytics',
    liveDemo: 'https://social-analytics.demo.com',
  },
];

const Projects = () => {
  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 bg-gradient-to-b from-gray-50 to-white md:px-20">
      <div>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h1>
          <p className='pb-5'>
            Here are some of my recent projects that showcase my skills in web development,
            design, and problem-solving.
          </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;