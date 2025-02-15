import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-br from-black/50 to-black/70"
        style={{ 
          backgroundImage: 'url(/images/Cricket-Stadium-Wallpaper-for-Wall.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Navigation */}
        <nav className="relative z-20 py-4 sm:py-6 px-4 lg:px-8 backdrop-blur-sm bg-black/10">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="/images/logo.png" alt="Aucto Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">AUCTO</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium">Features</a>
                <a href="#why-us" className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium">Why Us</a>
                <a href="#testimonials" className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium">Testimonials</a>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                  Sign Up
                </button>
              </div>
              <button className="md:hidden text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-8 sm:py-12 md:py-0">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                {/* Left Column */}
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="text-[#4285F4]">CREATE YOUR</span><br />
                    <span className="text-[#FFA500]">DREAM TEAM</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                    Experience the thrill of live IPL auctions. Build your dream team and compete with friends!
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <button className="w-full sm:w-auto bg-[#4285F4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#3b7de2] transition-colors inline-flex items-center justify-center gap-2">
                      Get Started
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <button className="w-full sm:w-auto bg-white text-[#4285F4] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-[#4285F4] hover:bg-[#4285F4] hover:text-white transition-colors inline-flex items-center justify-center gap-2">
                      Watch Demo
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((num) => (
                        <img
                          key={num}
                          src={`/images/avatar-${num}.jpg`}
                          alt={`User ${num}`}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-[#FFA500] font-bold text-sm sm:text-base">4.8★</div>
                      <div className="text-gray-300 text-sm sm:text-base">from 3,000+ users</div>
                    </div>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>

        {/* Get in the Game Section */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12 md:mb-16">
                <h2 className="relative inline-block">
                  <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                    Get in the game
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Bid. Play. Dominate.
                  </span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                </h2>
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-[0_8px_32px_rgba(79,70,229,0.15)] p-8 md:p-12 mb-12 md:mb-20 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(79,70,229,0.2)] border border-indigo-100"
              >
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl text-center font-semibold leading-relaxed">
                    AuctoGames brings real IPL auctions to fantasy cricket
                  </p>
                  <p className="text-slate-600 text-lg sm:text-xl text-center leading-relaxed">
                    Bid live, build your dream team, and compete with friends or rivals in an immersive gaming experience
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 pt-6">
                    <div className="flex items-center space-x-2 bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-3 rounded-xl border border-orange-100">
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">300+</span>
                      <span className="text-slate-600">Events</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-3 rounded-xl border border-orange-100">
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">3,000+</span>
                      <span className="text-slate-600">Gamers</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-3 rounded-xl border border-orange-100">
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">₹5L+</span>
                      <span className="text-slate-600">Revenue</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerChildren} className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                {/* Feature Cards */}
                {[
                  {
                    title: "Real-time Auctions",
                    description: "Experience the thrill of live IPL-style auctions. Bid against friends and rivals in real-time for your favorite players.",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )
                  },
                  {
                    title: "Strategic Team Building",
                    description: "Build your dream team with a perfect balance of batsmen, bowlers, and all-rounders. Analyze player stats and make informed decisions.",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    )
                  },
                  {
                    title: "Compete & Win",
                    description: "Join tournaments, compete with friends, and climb the leaderboards. Show off your cricket knowledge and team management skills.",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    )
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-[1.5rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_28px_rgba(0,0,0,0.12)]"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-[#4285F4] rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {feature.icon}
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[#4285F4] mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* App Showcase Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative bg-white py-8 sm:py-12 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-center mb-6 sm:mb-8 md:mb-16">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4285F4] mb-2">
                  What's
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFA500]">
                  so Unique ?!
                </span>
              </motion.h2>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                {/* App Screenshots Grid */}
                <motion.div variants={staggerChildren} className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {[1, 2, 3, 4].map((num) => (
                    <motion.div
                      key={num}
                      variants={scaleIn}
                      className="relative"
                    >
                      <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105">
                        <img 
                          src={`/images/App-snippet-${num}.jpg`}
                          alt={`Aucto Platform`}
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Features List */}
                <motion.div variants={staggerChildren} className="space-y-4 sm:space-y-6 md:space-y-8">
                  {[
                    {
                      title: "Live Auctioning:",
                      description: "Feel the adrenaline of competing in real-time auctions.",
                      color: "#4285F4"
                    },
                    {
                      title: "Private Leagues:",
                      description: "Play with your friends in custom leagues.",
                      color: "#FFA500"
                    },
                    {
                      title: "Real-Time Updates:",
                      description: "Stay on top of your player's performance with live updates.",
                      color: "#4285F4"
                    },
                    {
                      title: "Seamless User Experience:",
                      description: "Intuitive gameplay across all platforms with live chat for more fun!",
                      color: "#FFA500"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex flex-col space-y-1 sm:space-y-2"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold" style={{ color: feature.color }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile App Preview */}
              <div className="mt-12 sm:mt-16 md:mt-20 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <button className="w-full sm:w-auto bg-[#4285F4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#3b7de2] transition-colors inline-flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Download Now
                  </button>
                  <button className="w-full sm:w-auto border-2 border-[#4285F4] text-[#4285F4] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#4285F4] hover:text-white transition-colors inline-flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why AuctoGames Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative bg-[#f8f9ff] py-8 sm:py-12 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 variants={fadeInUp} className="text-center mb-6 sm:mb-8 md:mb-16">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="text-[#4285F4]">Why </span>
                  <span className="text-[#FFA500]">AuctoGames</span>
                  <span className="text-[#4285F4]"> ?</span>
                </span>
              </motion.h2>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
                {/* Features Grid */}
                <motion.div variants={staggerChildren} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {/* Feature Cards */}
                  <motion.div variants={fadeInUp} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-l-4 border-[#4285F4]">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#4285F4]">A Booming Market</h3>
                    <p className="text-gray-600 text-sm sm:text-base">18Cr Indians play fantasy esports, more than the 16Cr in stocks!</p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-l-4 border-[#FFA500]">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#FFA500]">Next-Level Fantasy Sports</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Bid, build, and dominate in real-time.</p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-l-4 border-[#FFA500]">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#FFA500]">Live IPL Auctions</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Experience the thrill of live IPL auctions</p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-l-4 border-[#4285F4]">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#4285F4]">Proven & Trusted</h3>
                    <p className="text-gray-600 text-sm sm:text-base">and we're just getting started!</p>
                  </motion.div>
                </motion.div>

                {/* Testimonials */}
                <motion.div variants={staggerChildren} className="space-y-4 sm:space-y-6">
                  {/* Testimonial 1 */}
                  <motion.div variants={fadeInUp} className="bg-white rounded-xl sm:rounded-[2rem] p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img src="/images/testimonial-1.jpg" alt="Gitansh G." className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-gray-800 text-base sm:text-lg mb-2">
                          "AuctoGames takes fantasy cricket to the next level! The live auctions are thrilling!"
                        </p>
                        <p className="text-[#4285F4] font-semibold text-sm sm:text-base">– Gitansh G.</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Testimonial 2 */}
                  <motion.div variants={fadeInUp} className="bg-white rounded-xl sm:rounded-[2rem] p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img src="/images/testimonial-2.jpg" alt="Ravi P." className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-gray-800 text-base sm:text-lg mb-2">
                          "AuctoGames is a game-changer! The live auctions bring a whole new level of excitement. I'm hooked!"
                        </p>
                        <p className="text-[#4285F4] font-semibold text-sm sm:text-base">– Ravi P.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="relative bg-white py-12 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className="mb-6">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-[#4285F4]">Ready to Test Your </span>
                  <span className="text-[#FFA500]">Cricket Skills</span>
                  <span className="text-[#4285F4]"> ?</span>
                </span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-gray-600 text-base sm:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
                Watch this video to learn how to play on AuctoGames, bid in live IPL auctions, build your dream team, 
                and compete to win big!
              </motion.p>

              <motion.div 
                variants={scaleIn}
                className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="How to Play on AuctoGames"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8 md:mt-12">
                <button className="w-full sm:w-auto bg-[#4285F4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#3b7de2] transition-colors inline-flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Start Playing Now
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
