import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    title: 'JobWay',
    description: 'JobWay is a MERN-based job portal enabling recruiters to post jobs and candidates to apply, featuring JWT authentication, Redux Toolkit, and a modern shadcn/ui interface.',
    image: './JobWay.jpg',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    sourceCode: 'https://github.com/Manikant69/JobWay',
    liveDemo: 'https://job-portal-kzws.onrender.com/',
  },
  {
    title: 'Book Store App',
    description: 'Book Store App is a MERN-based platform where users can explore, purchase books, and track unavailable ones. It features authentication, a user-friendly UI, and seamless browsing.',
    image: './bookStore.jpg',
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
    <div name="Project" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-400 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-400 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-screen-2xl container mx-auto px-4 md:px-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-slideInUp">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-custom">
              ✨ My Work
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent animate-gradient leading-tight">
            Featured Projects
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn hover:text-gray-900 dark:hover:text-white transition-colors duration-300' style={{ animationDelay: '200ms' }}>
              Explore my latest work showcasing innovative solutions, modern design, and cutting-edge technologies. Each project represents a unique challenge and creative solution.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-8 animate-fadeIn" style={{ animationDelay: '400ms' }}>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32"></div>
            <div className="mx-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse-custom"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slideInUp transition-all duration-500 h-full"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className="group relative">
                {/* Card Number Badge */}
                <div className="absolute -top-4 -left-4 z-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full flex items-center justify-center text-sm shadow-lg animate-bounce-custom" style={{ animationDelay: `${index * 0.2}s` }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 scale-110"></div>
                
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slideInUp" style={{ animationDelay: '1200ms' }}>
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-full px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Want to see more?</span>
            <a 
              href="https://github.com/Manikant69" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;