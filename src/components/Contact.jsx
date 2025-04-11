import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const updateFormData = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">For general enquiries you can contact us by</h3>

            <div className="space-y-8">
              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 mr-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <span className="text-lg">hello@aistacklabs.com</span>
                </div>
              </div>

              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 mr-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Phone</p>
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 mr-6">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Address</p>
                  <span className="text-lg">123 AI Avenue, Tech City, TC 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* {step === 1 && ( */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Or tell us about your project</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={updateFormData}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={updateFormData}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={updateFormData}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              {/* )} */}

              {/* {step === 2 && ( */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* <h3 className="text-2xl font-bold mb-6">Project Details</h3> */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={updateFormData}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none"
                        required
                      >
                        <option value="">Select a project type</option>
                        <option value="consulting">AI Consulting</option>
                        <option value="development">Custom Development</option>
                        <option value="integration">AI Integration</option>
                        <option value="training">Team Training</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={updateFormData}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none"
                        required
                      >
                        <option value="">Select a budget range</option>
                        <option value="small">$10,000 - $25,000</option>
                        <option value="medium">$25,000 - $50,000</option>
                        <option value="large">$50,000 - $100,000</option>
                        <option value="enterprise">$100,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={updateFormData}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 focus:border-primary-400 focus:outline-none"
                        required
                      >
                        <option value="">Select a timeline</option>
                        <option value="urgent">Less than 1 month</option>
                        <option value="short">1-3 months</option>
                        <option value="medium">3-6 months</option>
                        <option value="long">6+ months</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              {/* )} */}

              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    Previous
                  </button>
                )}
                {false ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 transition-opacity ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 transition-opacity ml-auto"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;