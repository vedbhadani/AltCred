import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Contributors = () => {
  const contributors = [
    {
      name: 'Akanksha Sharma',
      role: 'Full-Stack Developer & Product Architect',
      username: '@Maxiemad',
      avatar: 'MS',
      contributions: [
        'Designed lending UI/UX flows',
        'Integrated backend + frontend',
        'Worked on scoring & onboarding screens',
      ],
      github: 'https://github.com/Maxiemad',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Ved Bhadani',
      role: 'Machine Learning & Data Modelling',
      username: '@vedbhadani',
      avatar: 'VB',
      contributions: [
        'Built alternative data scoring pipeline',
        'UPI pattern analysis',
        'Feature engineering + model tuning',
      ],
      github: 'https://github.com/vedbhadani',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Yash Pratap Singh Solanki',
      role: 'Backend Engineer',
      username: '@yashpss01',
      avatar: 'YS',
      contributions: [
        'API security & structure',
        'Database schema design',
        'Transaction behaviour logic',
      ],
      github: 'https://github.com/yashpss01',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Archisman Nath Choudhury',
      role: 'Lead Developer & Infrastructure Architect',
      username: '@Archisman-NC',
      avatar: 'AN',
      contributions: [
        'System architecture & CI/CD',
        'Cloud deployment & infra security',
        'Product oversight & engineering direction',
      ],
      github: 'https://github.com/Archisman-NC',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const staggerDelay = (index) => ({ delay: index * 0.15, duration: 0.6 });

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundColor: '#0a0a0f',
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
    backgroundSize: '18px 18px',
    animation: 'dots-move 14s linear infinite',
    position: 'relative',
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Contributors</span>
            </h1>
            <p className="text-2xl text-gray-300">
              The people building the future of alternative credit scoring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={staggerDelay(index)}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${contributor.color} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg`}
                    >
                      {contributor.avatar}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{contributor.name}</h3>
                      <p className="text-cyan-400 text-sm mb-2">{contributor.username}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{contributor.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {contributor.contributions.map((contribution, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{contribution}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition-all duration-300 text-cyan-400 hover:text-cyan-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-semibold">GitHub</span>
                  </motion.a>

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/40 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Want to contribute?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in building the future of alternative credit scoring and financial inclusion.
              </p>
              <motion.a
                href="https://github.com/Archisman-NC/AltCred"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xl rounded-lg font-bold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
              >
                Join as a Contributor
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
