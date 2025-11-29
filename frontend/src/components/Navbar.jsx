import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="navbar" style={{ paddingTop: '20px' }}>
            <div style={{ display:'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                <div style={{ display:'flex',alignItems: 'center', gap: '10px' }}>
                    <Logo />
                    <div style={{ height: '5px', flex: 1, background: 'linear-gradient(to right, #40a8c8, #000000,#40a8c8)' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <button style={{
                            padding: '10px 20px',
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                            Home
                        </button>
                    </Link>
                    <Link href="/financial-assessment" style={{ textDecoration: 'none' }}>
                        <button style={{
                            padding:'10px 20px',
                            background:'#fff',
                            color:'#000',
                            borderRadius:'20px',
                            fontWeight:'bold',
                            cursor:'pointer'
                        }}>
                        Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', margin: '-20px' }}>
                <div style={{ width: '150px' }}></div>
                <div style={{ height: '5px', flex: 1, background: 'linear-gradient(to right, #000000, #40a8c8,#000000)' }}></div>
            </div>
        </div>
    );
}

export default Navbar;