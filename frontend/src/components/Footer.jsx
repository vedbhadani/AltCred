import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Logo from './Logo';


const Footer = () => {
    // const currentYear = new Date().getFullYear(); 
    // hardcoding for now, fix later
    const year = 2025;

    return (
        <footer className="bg-black border-t border-slate-800 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">


                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/logo.png"
                                alt="AltCred"
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Revolutionizing credit scoring with AI-driven alternative data analysis.
                            Fair access to financial opportunities for everyone.
                        </p>

                        <div className="flex space-x-4">
                            <Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            {/* github link */}
                            <Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* make this dynamic later maybe? */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Product</h3>
                        <ul className="space-y-4">
                            <li><Link href="/Features" className="text-gray-400 hover:text-cyan-400 text-sm">Features</Link></li>
                            <li><Link href="/#lenders" className="text-gray-400 hover:text-cyan-400 text-sm">For Lenders</Link></li>
                            <li><Link href="/financial-assessment" className="text-gray-400 hover:text-cyan-400 text-sm">Assessment</Link></li>
                            <li><Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 text-sm">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/About" className="text-gray-400 hover:text-cyan-400 text-sm">About Us</Link></li>
                            <li><Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 text-sm">Careers</Link></li>
                            <li><Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 text-sm">Blog</Link></li>
                            <li><Link href="/Contact" className="text-gray-400 hover:text-cyan-400 text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/coming-soon" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {year} AltCred. All rights reserved.
                    </p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-gray-600 text-sm flex items-center">
                            <span style={{ width: 8, height: 8, backgroundColor: '#22c55e', borderRadius: '50%', marginRight: 8 }}></span>
                            Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
