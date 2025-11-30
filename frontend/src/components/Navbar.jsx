import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
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
            <div style={{ display:'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                <div style={{ display:'flex',alignItems: 'center', gap: '10px', flex: 1 }}>
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
                                    <button style={buttonStyle}>
                                        Home
                                    </button>
                                </Link>
                                <Link href="/About" style={{ textDecoration: 'none' }}>
                                    <button style={buttonStyle}>
                                        About
                                    </button>
                                </Link>
                                <Link href="/Features" style={{ textDecoration: 'none' }}>
                                    <button style={buttonStyle}>
                                        Features
                                    </button>
                                </Link>
                                <Link href="/Contributors" style={{ textDecoration: 'none' }}>
                                    <button style={buttonStyle}>
                                        Contributors
                                    </button>
                                </Link>
                                <Link href="/financial-assessment" style={{ textDecoration: 'none' }}>
                                    <button style={buttonStyle}>
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