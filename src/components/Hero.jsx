import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="text-center z-10 px-4 mb-20"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter">
          <span className="gradient-text">Build with us</span>
        </h1>

        <p className="text-2xl md:text-3xl text-white mb-16 max-w-3xl mx-auto font-light">
          Transform your businesses with our AI solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
          <div
            onClick={() => window.location.href = '/about'}
            className="px-12 py-6 text-xl font-bold bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            About Us
          </div>
          <div
            onClick={() => window.location.href = '/projects'}
            className="px-12 py-6 text-xl font-bold bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            Our Projects
          </div>
          <div
            onClick={() => window.location.href = '/contact'}
            className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Contact Us
          </div>
        </div>
      </motion.div>

      <footer className="absolute bottom-8 left-0 right-0 py-4">
        {/* <p className="text-white text-4xl text-center">AI Stack Labs</p> */}

        {/* <div className="flex justify-center space-x-6 mb-2">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div> */}

        <p className="text-white text-sm text-center">
          hello@aistacklabs.com
          &copy; {new Date().getFullYear()} AI Stack Labs. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Hero;