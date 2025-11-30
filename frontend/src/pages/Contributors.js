import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';

const contributors = [
  {
    username: 'Maxiemad',
    fullName: 'Akanksha Sharma',
    role: 'Full-Stack Developer & Product Architect',
    github: 'Maxiemad',
    contributions: [
      'Designed lending UI/UX flows',
      'Integrated backend + frontend',
      'Worked on scoring & onboarding screens'
    ],
    avatar: 'MS'
  },
  {
    username: 'vedbhadani',
    fullName: 'Ved Bhadani',
    role: 'Machine Learning & Data Modelling',
    github: 'vedbhadani',
    contributions: [
      'Built alternative data scoring pipeline',
      'UPI pattern analysis',
      'Feature engineering + model tuning'
    ],
    avatar: 'VB'
  },
  {
    username: 'yashpss01',
    fullName: 'Yash Pratap Singh Solanki',
    role: 'Backend Engineer',
    github: 'yashpss01',
    contributions: [
      'API security & structure',
      'Database schema design',
      'Transaction behaviour logic'
    ],
    avatar: 'YS'
  },
  {
    username: 'Archisman-NC',
    fullName: 'Archisman Nath Choudhury',
    role: 'Lead Developer & Infrastructure Architect',
    github: 'Archisman-NC',
    contributions: [
      'System architecture & CI/CD',
      'Cloud deployment & infra security',
      'Product oversight & engineering direction'
    ],
    avatar: 'AN'
  }
];

export default function Contributors() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: '#0a0a0f',
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
        animation: 'dots-move 14s linear infinite',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-pulse opacity-60"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
            Contributors
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            The people building the future of alternative credit scoring.
          </p>
        </motion.div>

        <div className="space-y-16 mb-20 max-w-4xl mx-auto">
          {contributors.map((person, i) => (
            <motion.div
              key={person.username}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl sm:text-3xl font-bold flex-shrink-0">
                {person.avatar}
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {person.fullName}
                  </h3>
                  <p className="text-blue-400 text-base sm:text-lg mb-2">
                    @{person.username}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
                    {person.role}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {person.contributions.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-base sm:text-lg flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-xl">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://github.com/${person.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-base sm:text-lg font-medium"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Want to contribute?
            </h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join us in building the future of alternative credit scoring and financial inclusion.
            </p>
            <a
              href="https://github.com/Archisman-NC/AltCred"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>Join as a Contributor</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
