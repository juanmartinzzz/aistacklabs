import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import kate from '../assets/images/k1.jpeg';
import juan from '../assets/images/j1.jpg';

const teamMembers = [
  {
    name: 'Kate Dye',
    role: 'CEO',
    bio: 'Kate specializes in hypergrowth. After starting her career as a co-founder (link), she worked at multinationals in adtech and helped grow then merge a top-5 exchange. She led the data team at On Deck to help thousands of founders build companies now worth over $9 billion. Now she\'s helping startups and organisations to find ways to apply AI.',
    image: kate,
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'Juan Martínez',
    role: 'CTO',
    bio: 'Founder, product leader, developer - Juan has seen his share. He has has led exponential growth in the ad-tech world. Was the unsung hero of his team of devs. Designed and built complex systems while working in international cargo logistics. He even managed a room of linux servers, back when "in-house" was still a thing.',
    image: juan,
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-7xl md:text-8xl font-bold mb-16 text-center">
          About Us
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-[35%_65%]">
              <div className='pr-16'>
                <p className="text-5xl text-white/80 text-center">
                  Our stack
                </p>
                <p className="text-5xl text-white/80 text-center">
                  is AI
                </p>
              </div>

              <div className='pl-16'>
                <p className="mb-8 text-xl text-white/80 text-left">
                  We excel at rapid development and know what it takes to bring projects from 0 to 1.
                  We've built startups, grown products from bleeding edge to millions of ARR, upgraded no-code teams to webapps with data pipelines and even modernized old-school cargo logistics companies.
                </p>
                <p className="text-xl text-white/80 text-left">
                  From product roadmapping and validation, to marketing, to backend and data pipelines, we have deep product and technical expertise and broad domain knowledge.
                  And of course, our stack is AI.
                </p>
              </div>
            </div>
            {/* <div>
              <h3 className="text-4xl font-bold mb-8">Our Approach</h3>
              <p className="text-2xl text-white/80">
                We believe in a collaborative, human-centered approach to AI development. By
                understanding your unique challenges and goals, we create custom solutions that
                drive real business value.
              </p>
            </div> */}
          </div>

          <div className="text-5xl font-bold mb-16 text-center">
            <span className="gradient-text">Meet Our Team</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 p-8"
              >
                <div className="relative mb-8 mx-auto w-48 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-3xl font-bold mb-4">{member.name}</h4>
                {/* <p className="text-xl text-white/60 mb-6">{member.role}</p> */}
                <p className="text-lg text-white/80 mb-8">{member.bio}</p>
                <div className="flex justify-start space-x-6">
                  <a href={member.social.linkedin} className="text-white/60 hover:text-white">
                    <Linkedin size={24} />
                  </a>
                  <a href={member.social.github} className="text-white/60 hover:text-white">
                    <Github size={24} />
                  </a>
                  <a href={member.social.twitter} className="text-white/60 hover:text-white">
                    <Twitter size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;