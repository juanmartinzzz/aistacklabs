import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import campify from '../assets/images/logo-campify.png';
import flowkaching from '../assets/images/logo-flowkaching.png';

const projects = [
  {
    title: 'Campify',
    description: 'Enterprise-scale analytics platform using machine learning to provide predictive insights and automated reporting.',
    image: campify,
    tags: ['Machine Learning', 'Big Data', 'Python', 'React'],
    linkToBlog: 'https://roan-bagel-5a7.notion.site/Campify-1d0e1467424f80948a17de91311ef971?pvs=4',
    linkToProject: 'https://bookcamp.ca',
  },
  {
    title: 'Flow Kaching',
    description: 'A service to help blue collar businesses get and retain customers by managing their referrals and rewards programs 👷‍♂️👷‍♀️',
    image: flowkaching,
    tags: ['Mobile App', 'React Native', 'Python', 'Firebase'],
    linkToBlog: 'https://roan-bagel-5a7.notion.site/Flow-Kaching-1d1e1467424f802591f5e3f2c9070512',
    linkToProject: 'https://flowkaching.com',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-white/5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-7xl md:text-8xl font-bold mb-24 text-center">
          Our Projects
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(project.linkToBlog, '_blank')}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" /> */}
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-xl text-white/80 mb-6">{project.description}</p>

                {/* <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-lg bg-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                <div className="flex flex-col items-start space-y-6">
                  {/* <button
                    onClick={() => window.open(project.linkToBlog, '_blank')}
                    className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition duration-300"
                  >
                    Read the Blog
                    <ExternalLink size={28} className="inline-block ml-2" />
                  </button> */}

                  <button
                    onClick={() => window.open(project.linkToProject, '_blank')}
                    className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition duration-300"
                  >
                    Check the Project
                    <ExternalLink size={28} className="inline-block ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;