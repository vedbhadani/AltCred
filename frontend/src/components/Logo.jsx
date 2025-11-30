import Image from 'next/image'
import logoImage from '../../public/logo.png'

const Logo = () => {
    return (
        <div style={{position:'relative',display:'inline-block'}}>
            <div style={{
                position:'absolute',
                top:'10%',
                transform:'translate(-50%, -50%) rotate(-45deg)',
                borderLeft:'250px solid transparent',
                borderRight:'250px solid transparent',
                borderBottom:'250px solid #000000',
            }}></div>
            <div style={{position:'relative',zIndex:1}}>
                <Image src={logoImage} alt="AltCred Logo" width={150} height={50}/>
            </div>
        </div>
    );
}

export default Logo;