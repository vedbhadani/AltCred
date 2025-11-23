import Navbar from "@/components/Navbar";

export default function Page() {
  return <>
    <Navbar />
    <main style={{padding:'60px 40px',maxWidth:'1200px',margin:'0 auto',color:'#ededed'}}>
      <h1 style={{fontSize:'48px',fontWeight:'700',marginBottom:'20px',lineHeight:'1.2'}}>
        Smarter Credit Decisions.<br/>
        Fair Access for Everyone.
      </h1>
      <p style={{fontSize:'20px',marginBottom:'40px',color:'#87ceeb',lineHeight:'1.6'}}>
        AltCred is an AI-driven alternative credit scoring platform that unlocks financial opportunity for the millions who are invisible to traditional credit systems.</p>
      <p style={{fontSize:'18px',marginBottom:'60px',lineHeight:'1.6'}}>
        Using intelligent analysis of UPI behaviour, transaction patterns, digital footprints, and earning stability, AltCred builds a <strong>real, dynamic, behaviour-based credit score</strong> — not just a historical one.</p>
      <section style={{marginBottom:'60px'}}>
        <h2 style={{fontSize:'32px',marginBottom:'30px',color:'#40a8c8'}}>Why AltCred?</h2>
        <p style={{fontSize:'18px',marginBottom:'20px',fontStyle:'italic'}}>
          Traditional credit scoring misses millions.<br/>
          We measure <em>how you live</em>, not just <em>what you borrowed</em>.</p>
        <ul style={{listStyle:'none',padding:0,fontSize:'16px',lineHeight:'2'}}>
          <li>✓ Works for first-time borrowers</li>
          <li>✓ High accuracy with alternative data</li>
          <li>✓ Real-time risk profiling</li>
          <li>✓ Transparent and bias-free scoring</li>
          <li>✓ Faster onboarding & underwriting</li>
        </ul></section>

      <section style={{marginBottom:'60px'}}>
        <h2 style={{fontSize:'28px',marginBottom:'20px',color:'#40a8c8'}}>Designed for Lenders. Built for Inclusion.</h2>
        <p style={{fontSize:'16px',marginBottom:'20px',color:'#87ceeb'}}>
          Banks • NBFCs • Fintech Partners • BNPL Platforms
        </p>
        <p style={{fontSize:'16px',marginBottom:'10px'}}>Offer loans confidently to customers with:</p>
        <ul style={{listStyle:'none',padding:0,fontSize:'16px',lineHeight:'2'}}>
          <li>• No credit history</li>
          <li>• Thin-file customers</li>
          <li>• Gig workers</li>
          <li>• Students & early earners</li>
        </ul></section>

      <p style={{fontSize:'24px',fontWeight:'600',textAlign:'center',marginTop:'80px',color:'#40a8c8'}}>
        Credit for everyone. Intelligence for lenders.<br/>
        <span style={{fontSize:'20px'}}>That's AltCred.</span></p></main>
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