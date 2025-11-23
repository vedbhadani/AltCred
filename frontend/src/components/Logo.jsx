import Image from 'next/image'
import logoImage from '../../public/logo.png'
const Logo=()=>{
    return<>
        <Image src={logoImage} alt="AltCred Logo" width={150} height={50}/>
    </>}
export default Logo;