import React from 'react';
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";


function About() {
  return (
    <div name="About" className='relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden'>
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-400 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className='relative max-w-screen-2xl container mx-auto px-4 md:px-20'>
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-slideInUp">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-custom">
              🚀 Get to Know Me
            </span>
          </div>
          
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent animate-gradient leading-tight mb-6'>
            About Me
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn' style={{ animationDelay: '200ms' }}>
              Passionate developer crafting digital experiences with creativity and precision
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-8 animate-fadeIn" style={{ animationDelay: '400ms' }}>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32"></div>
            <div className="mx-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse-custom"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-32"></div>
          </div>
        </div>

        {/* Main Content - Properly Aligned Cards */}
        <div className='max-w-6xl mx-auto space-y-12'>
          
          {/* Introduction Cards - Two Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
            
            {/* Who Am I Card */}
            <div className='animate-slideInLeft'>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full flex flex-col'>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👨‍💻</span>
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Who Am I</h2>
                </div>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-lg flex-grow'>
                  I am a passionate full-stack developer with a deep love for creating innovative and user-friendly web applications. 
                  With a solid foundation in both front-end and back-end technologies, I thrive on turning complex problems into 
                  simple, beautiful, and intuitive designs.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className='animate-slideInRight'>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full flex flex-col'>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Mission</h2>
                </div>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-lg flex-grow'>
                  My mission is to leverage my skills and creativity to deliver innovative web applications that exceed client 
                  expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, 
                  always seeking new challenges and opportunities to expand my horizons.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Information - Three Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
            
            {/* Education Card */}
            <div className='animate-slideInUp flex' style={{ animationDelay: '100ms' }}>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] w-full flex flex-col'>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Education</h2>
                </div>
                <div className="flex-grow">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Bachelor of Technology</h3>
                    <p className="text-gray-700 dark:text-gray-300">Computer Science & Engineering</p>
                    <p className="text-gray-600 dark:text-gray-400">Rajasthan Technical University</p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">2021 - 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className='animate-slideInUp flex' style={{ animationDelay: '200ms' }}>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] w-full flex flex-col'>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Core Skills</h2>
                </div>
                <div className="flex-grow space-y-3">
                  {[
                    'Frontend Development',
                    'Backend Development', 
                    'API Development',
                    'Problem Solving'
                  ].map((skill, index) => (
                    <div 
                      key={skill}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 animate-fadeIn"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coding Achievements Card */}
            <div className='animate-slideInUp flex' style={{ animationDelay: '300ms' }}>
              <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] w-full flex flex-col'>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 animate-pulse-custom">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Coding Profiles</h2>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>Competitive Programming Journey</p>
                  </div>
                </div>

                {/* Stats Summary */}
                <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl border border-indigo-200 dark:border-indigo-700">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1350+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Total Problems</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Platforms</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2022</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Max Score</div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  {/* LeetCode */}
                  <a 
                    href="https://leetcode.com/u/manikant69/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl hover:from-orange-100 hover:to-red-100 dark:hover:from-orange-900/30 dark:hover:to-red-900/30 transition-all duration-300 hover:scale-105 group border border-orange-200 dark:border-orange-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <SiLeetcode className="text-orange-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm">LeetCode</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Problem Solving</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300 text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-2 text-center backdrop-blur-sm">
                        <div className="font-bold text-orange-600 dark:text-orange-400">750+</div>
                        <div className="text-gray-600 dark:text-gray-400">Problems Solved</div>
                      </div>
                      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-2 text-center backdrop-blur-sm">
                        <div className="font-bold text-green-600 dark:text-green-400">1543+</div>
                        <div className="text-gray-600 dark:text-gray-400">Rating</div>
                      </div>
                    </div>
                  </a>

                  {/* Codeforces */}
                  <a 
                    href="https://codeforces.com/profile/manikant69" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 hover:scale-105 group border border-blue-200 dark:border-blue-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <SiCodeforces className="text-blue-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm">Codeforces</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Competitive Programming</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-2 text-center backdrop-blur-sm">
                        <div className="font-bold text-blue-600 dark:text-blue-400">43</div>
                        <div className="text-gray-600 dark:text-gray-400">Problems Solved</div>
                      </div>
                      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-2 text-center backdrop-blur-sm">
                        <div className="font-bold text-cyan-600 dark:text-cyan-400">1042</div>
                        <div className="text-gray-600 dark:text-gray-400">Max Rating</div>
                      </div>
                    </div>
                  </a>

                  {/* GeeksforGeeks */}
                  <a 
                    href="https://www.geeksforgeeks.org/user/manikant69/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 transition-all duration-300 hover:scale-105 group border border-green-200 dark:border-green-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <SiGeeksforgeeks className="text-green-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm">GeeksforGeeks</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">DSA & Algorithms</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-green-600 transition-colors duration-300 text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-2 text-center backdrop-blur-sm">
                        <div className="font-bold text-green-600 dark:text-green-400">557</div>
                        <div className="text-gray-600 dark:text-gray-400">Problems Solved</div>
                      </div>
                      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-2 text-center backdrop-blur-sm">
                        <div className="font-bold text-emerald-600 dark:text-emerald-400">2022</div>
                        <div className="text-gray-600 dark:text-gray-400">Score</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;
