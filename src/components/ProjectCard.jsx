import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  sourceCode,
  liveDemo,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl dark:shadow-gray-900/50 transition-all duration-700 ease-out hover:-translate-y-6 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-900/50 hover:scale-105 h-full flex flex-col border border-gray-200/50 dark:border-gray-700/50">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
        <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-800"></div>
      </div>

      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl flex-shrink-0">
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
        />
        
        {/* Floating Action Hint */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 z-20">
          <ExternalLink size={16} className="text-blue-500 animate-pulse-custom" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative p-6 flex flex-col flex-grow z-10">
        
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="mb-6 text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 flex-grow text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2 flex-shrink-0">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-auto flex-shrink-0">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 hover:from-gray-900 hover:to-black text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <Github size={16} className="transition-transform duration-300 group-hover/btn:rotate-12" />
            <span>Code</span>
          </a>
          
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <ExternalLink size={16} className="transition-transform duration-300 group-hover/btn:rotate-12" />
            <span>Live</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
