import Logo from "./Logo"
const Navbar=()=>{
    return <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <Logo />
        <div style={{height:'2px',flex:1,background:'linear-gradient(to right, #40a8c8, #000000)'}}></div>
    </div>}
export default Navbar;