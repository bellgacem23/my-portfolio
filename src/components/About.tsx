import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto animate-on-scroll">
          {/* Main content with photo on left and cards on right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Profile image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-72 h-[450px] sm:w-80 sm:h-[500px] lg:w-96 lg:h-[550px] rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/images/IMG_6403-2-2.png" 
                  alt="Belgacem Chaibi Profile" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
            </div>


            {/* Experience, Education, and Skills Cards */}
            <div className="grid gap-6">
            {/* Experience Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 animate-on-scroll">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Experience</h3>
                <p className="text-teal-400 font-semibold mb-2">2+ years</p>
                <p className="text-gray-300 text-sm mb-2">Data Scientist & AI Engineer</p>
                <p className="text-gray-400 text-sm">Internships & Projects</p>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 animate-on-scroll">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                <p className="text-teal-400 font-semibold mb-2">M.S. Data Science</p>
                <p className="text-gray-300 text-sm mb-2">ISIMM - Higher Institute of Computer Science and Mathematics of Monastir</p>
                <p className="text-gray-400 text-sm">Expected sep 2025</p>
              </div>
            </div>

          </div>
          </div>

          {/* Description text */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a Data Scientist & AI Engineer, I’m eager to take the next step in my journey of building intelligent, data-driven solutions. With a strong foundation in machine learning, artificial intelligence, data engineering, and big data analytics, I’m passionate about applying my skills to solve real-world problems and create impactful, efficient systems. Whether refining AI models, designing scalable data pipelines, or exploring new technologies, I’m driven by curiosity, innovation, and the pursuit of meaningful results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;