import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { getToken, removeToken } from "@/utils/auth";

const Navbar = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check auth status on mount and when route changes
        const checkAuth = () => {
            const token = getToken();
            setIsAuthenticated(!!token);
        };

        checkAuth();

        // Listen for route changes to update auth state
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

    const buttonStyle = {
        padding: '10px 20px',
        background: '#fff',
        color: '#000',
        border: 'none',
        borderRadius: '20px',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    return (
        <div className="navbar" style={{ paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                    <Logo />
                    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                            width: '1200px',
                            height: '80px',
                            borderRadius: '50%',
                            background: '#40a8c8',
                            marginLeft: '60px',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                            }}>
                                <Link href="/" style={{ textDecoration: 'none' }}>
                                    <button style={buttonStyle}>Home</button>
                                </Link>
                                <Link href="/About" style={{ textDecoration: 'none' }}>
                                    <button style={buttonStyle}>About</button>
                                </Link>
                                <Link href="/Features" style={{ textDecoration: 'none' }}>
                                    <button style={buttonStyle}>Features</button>
                                </Link>

                                {isAuthenticated ? (
                                    <>
                                        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                                            <button style={buttonStyle}>Dashboard</button>
                                        </Link>
                                        <button style={buttonStyle} onClick={handleLogout}>Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" style={{ textDecoration: 'none' }}>
                                            <button style={buttonStyle}>Login</button>
                                        </Link>
                                        <Link href="/signup" style={{ textDecoration: 'none' }}>
                                            <button style={buttonStyle}>Sign Up</button>
                                        </Link>
                                    </>
                                )}

                                <Link href="/financial-assessment" style={{ textDecoration: 'none' }}>
                                    <button style={{ ...buttonStyle, background: '#000', color: '#fff' }}>
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;