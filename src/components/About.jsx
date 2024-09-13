import React from 'react';


function About() {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-justify'>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p className='font-serif font-[600]'>
        Hello, I'm Manikant, a passionate Web developer with a keen eye for MERN
        Stack . With a background in IT, I strive to create impactful and
        visually stunning Software solutions that leave a lasting impression.
      </p>
      <br />

      <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
      <span>Bachelor of Technology in Computer Science & Engineering, Rajasthan Technical University [2021 - 2025]
        {/* [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year] */}
      </span>
      <br />
      <br />

      <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
      <span> Proficient in Full Stack Technologies Experienced with frontend frameworks and technologies like React, alongside proficiency in HTML, CSS, and JavaScript. Skilled in backend development using languages such as Node.js, Express.js and building RESTful APIs and working with databases like MongoDB & SQL. Strong grasp of UI/UX design.
        Excellent problem-solving skills, Effective communicator and
        collaborator.</span>
      <br />
      <br />

      <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
      <span> Full Stack Intern - Learn & Build, [Aug 2023 - Jan 2024] <br /> 
      <div className='ml-3'>
      • Contributed to the development and maintenance of web applications using HTML, CSS, JavaScript, and backend technologies.
        <br />
        • Worked with version control systems (Git) to track changes and collaborate with team members effectively.
        <br />
        • Gained hands-on experience in deploying and managing web applications in production environments.
        <br />
        </div>
      </span>
      <br />
      {/* <br /> */}

      {/* <h1 className='text-green-600 font-semibold text-xl'> Achievements & Awards</h1>
      <span>  [Award/Recognition], [Organization/Institution], [Year] [Achievement],
        [Organization/Platform], [Year]
      </span>
      <br />
      <br /> */}

      <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
      <p>
        My mission is to leverage my skills and creativity to deliver
        innovative  Web applications that exceed client expectations and
        contribute positively to the digital landscape. I am committed to
        continuous learning and growth, always seeking new challenges and
        opportunities to expand my horizons.
      </p>

    </div>
  )
}


export default About;