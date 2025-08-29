import React from 'react';

function Experience() {
    // Updated skills array with actual skills, organized by categories
    const skillCategories = [
        {
            category: "Web Development",
            skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Redux Toolkit", "Bootstrap", "Django"]
        },
        {
            category: "Programming Languages", 
            skills: ["C", "C++", "JavaScript", "Python", "SQL"]
        },
        {
            category: "Tools & Technologies",
            skills: ["Postman", "REST API", "MongoDB", "MySQL", "SQLite3"]
        },
        {
            category: "Other Skills",
            skills: ["DSA", "OOPs", "Responsive Design", "Authentication", "Authorization", "Git", "GitHub"]
        }
    ];


    return (
        <div name="Experience" className='relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden'>
            
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-400 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className='relative max-w-screen-2xl container mx-auto px-4 md:px-20'>
            
            {/* Work Experience Section */}
            <div className="mb-20">
                <div className="text-center mb-16 animate-slideInUp">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-custom">
                            💼 My Journey
                        </span>
                    </div>
                    
                    <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent animate-gradient leading-tight mb-6'>
                        Professional Experience
                    </h1>
                    
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn" style={{ animationDelay: '200ms' }}>
                            My journey in backend development and full-stack technologies
                        </p>
                    </div>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center mt-8 animate-fadeIn" style={{ animationDelay: '400ms' }}>
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32"></div>
                        <div className="mx-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse-custom"></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-32"></div>
                    </div>
                </div>
                
                <div className="space-y-8 max-w-4xl mx-auto">
                    {/* Current Experience */}
                    <div className='bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'>
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white text-lg">💼</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend Developer Intern</h3>
                                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Fonix Technologies</p>
                                    <p className="text-gray-600 dark:text-gray-400">May 2024 - Present</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">CURRENT</span>
                        </div>
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities & Achievements:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Developing and optimizing backend APIs using modern frameworks and best practices</span>
                                </li>
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Working with databases and implementing efficient data structures for scalable applications</span>
                                </li>
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Collaborating with cross-functional teams on enterprise-level projects</span>
                                </li>
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Gaining hands-on experience with scalable backend architectures and microservices</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {['Node.js', 'Express.js', 'MongoDB', 'API Development', 'Database Design'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Previous Experience */}
                    <div className='bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'>
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white text-lg">🚀</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Intern</h3>
                                    <p className="text-lg text-orange-600 dark:text-orange-400 font-medium">Learn & Build</p>
                                    <p className="text-gray-600 dark:text-gray-400">Aug 2023 - Jan 2024</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities & Achievements:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Developed and maintained web applications using modern technologies and frameworks</span>
                                </li>
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Collaborated effectively using Git for version control and team coordination</span>
                                </li>
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Gained valuable production deployment and project management experience</span>
                                </li>
                                <li className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="text-green-600 mr-3 mt-1">•</span>
                                    <span>Built responsive and user-friendly interfaces with modern design principles</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'JavaScript', 'HTML/CSS', 'Git', 'Full Stack Development'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Skills Section */}
            <div>
                <div className="text-center mb-16 animate-slideInUp">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-custom">
                            🛠️ My Arsenal
                        </span>
                    </div>
                    
                    <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent animate-gradient leading-tight mb-6'>
                        Technical Skills
                    </h1>
                    
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn" style={{ animationDelay: '200ms' }}>
                            I've more than 2 years of experience in below technologies.
                        </p>
                    </div>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center mt-8 animate-fadeIn" style={{ animationDelay: '400ms' }}>
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32"></div>
                        <div className="mx-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse-custom"></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-32"></div>
                    </div>
                </div>
                
                {/* Simple Skills organized by categories */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
                    {skillCategories.map((category) => (
                        <div 
                            key={category.category} 
                            className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
                        >
                            {/* Simple Category Header */}
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gray-600 dark:bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-white text-lg">
                                        {category.category === "Web Development" ? "🌐" : 
                                         category.category === "Programming Languages" ? "💻" :
                                         category.category === "Tools & Technologies" ? "🔧" : "🎯"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {category.category}
                                </h3>
                            </div>
                            
                            {/* Simple Skills Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                    >
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Simple Additional Note */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Always learning and exploring new technologies to stay current with industry trends
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Experience;
