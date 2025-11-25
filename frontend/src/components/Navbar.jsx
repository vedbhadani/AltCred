import Logo from "./Logo"
const Navbar=()=>{
    return <div className="navbar" style={{paddingTop:'20px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}><Logo />
            <div style={{height:'5px',flex:1,background:'linear-gradient(to right, #40a8c8, #000000,#40a8c8)'}}></div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'5px',margin:'-20px'}}><div style={{width:'150px'}}></div>
            <div style={{height:'5px',flex:1,background:'linear-gradient(to right, #000000, #40a8c8,#000000)'}}></div>
        </div>
    </div>}
export default Navbar;