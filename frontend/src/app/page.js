import Navbar from "@/components/Navbar";

export default function Page() {
  return <>
    <Navbar />
    <div style={{
      position:'fixed',
      bottom:'-200px',
      right:'-200px',
     transform:'rotate(135deg)',
      borderLeft:'250px solid transparent',
      borderRight:'250px solid transparent',
      borderBottom:'250px solid #40a8c8',
    }}></div>
  </>
}