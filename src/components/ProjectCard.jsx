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
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-100">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-purple-600 opacity-0 blur transition duration-500 group-hover:opacity-20" />

      {/* Image */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
          {title}
        </h3>
        <p className="mb-4 text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="transform rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-indigo-100 hover:text-indigo-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex px-6 py-4 space-x-3 justify-around">
          <div className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex transform items-center gap-2 text-white transition-all duration-300 hover:scale-105"
            >
              <Github
                className="transition-transform duration-300 group-hover:rotate-12"
                size={20}
              />
              <span>Source Code</span>
            </a>
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex transform items-center gap-2 text-white transition-all duration-300 hover:scale-105"
            >
              <ExternalLink
                className="transition-transform duration-300 group-hover:rotate-12"
                size={20}
              />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
