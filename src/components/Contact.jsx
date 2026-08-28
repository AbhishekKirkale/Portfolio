import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Contact & Social links centralized for easy modification
export const contactDetails = {
  email: 'abhishekkirkale9@gmail.com',
  phone: '+91 76666 40720',
  github: 'https://github.com/AbhishekKirkale',
  linkedin: 'https://linkedin.com/in/abhishekkirkale',
  location: 'Pune / Maharashtra, India'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate sending message on frontend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 font-mono text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              Have a question, opportunity, or project idea? Feel free to reach out!
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                I am currently seeking software developer internships and entry-level engineering roles. I am always excited to discuss tech, code, and new opportunities.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Info */}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block uppercase">Email</span>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                      {contactDetails.email}
                    </span>
                  </div>
                </a>

                {/* Phone Info */}
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block uppercase">Phone</span>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors">
                      {contactDetails.phone}
                    </span>
                  </div>
                </a>

                {/* GitHub Info */}
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-800/60 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <FaGithub className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block uppercase">GitHub</span>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-purple-400 transition-colors">
                      github.com/AbhishekKirkale
                    </span>
                  </div>
                </a>

                {/* LinkedIn Info */}
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block uppercase">LinkedIn</span>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/abhishekkirkale
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block uppercase">Location</span>
                    <span className="text-sm font-semibold text-gray-200">
                      {contactDetails.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800">
              
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-xl flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-gray-500 border focus:outline-none transition-all text-sm ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <FaExclamationCircle className="text-[10px]" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-gray-500 border focus:outline-none transition-all text-sm ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <FaExclamationCircle className="text-[10px]" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-gray-500 border focus:outline-none transition-all text-sm ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <FaExclamationCircle className="text-[10px]" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-gray-500 border focus:outline-none transition-all text-sm ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <FaExclamationCircle className="text-[10px]" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/25 cursor-pointer disabled:opacity-50"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
