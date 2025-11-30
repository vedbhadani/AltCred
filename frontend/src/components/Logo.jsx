import Image from 'next/image'

const Logo = () => {
    return (
        <div className="fixed top-0 left-0 z-50 pointer-events-none">
            <div className="absolute top-0 left-0 w-0 h-0 
                border-t-[250px] border-t-black 
                border-r-[250px] border-r-transparent">
            </div>

            
            <div
                className="absolute top-[85px] left-[85px] transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto flex items-center justify-center"
                style={{ width: '150px', height: '50px' }}
            >
                <img
                    src="/logo.png"
                    alt="AltCred Logo"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}

export default Logo;
