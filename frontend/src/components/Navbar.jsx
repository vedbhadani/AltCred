import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { getToken, removeToken } from "@/utils/auth";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const checkAuth = () => {
            const token = getToken();
            setIsAuthenticated(!!token);
        };

        checkAuth();

        router.events.on('routeChangeComplete', checkAuth);

        return () => {
            router.events.off('routeChangeComplete', checkAuth);
        };
    }, [router]);

    const handleLogout = () => {
        removeToken();
        setIsAuthenticated(false);
        router.push('/login');
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/About' },
        { name: 'Features', href: '/Features' },
        { name: 'Contact', href: '/Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Logo />
                    </div>


                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Auth logic: 
                            If logged in -> Show Dashboard, Get Started, Logout
                            If not -> Show Login, Sign Up 
                        */}
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                                >
                                    Dashboard
                                </Link>


                                <Link href="/financial-assessment">
                                    <button className="bg-white text-slate-900 hover:bg-gray-100 px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        Take Quiz
                                    </button>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="text-gray-300 hover:text-red-400 font-medium transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/login"
                                    className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                                >
                                    Login
                                </Link>
                                <Link href="/signup">
                                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        )}


                    </div>


                </div>
            </div>
        </nav>
    );
}

export default Navbar;