import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyAltCred from '@/components/WhyAltCred';
import ForLenders from '@/components/ForLenders';
import Tagline from '@/components/Tagline';
import DecorativeShape from '@/components/DecorativeShape';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <div style={{
      minHeight:'100vh',
      backgroundColor:'#0a0a0f',
      backgroundImage:'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
      backgroundSize:'18px 18px',
      position:'relative'
    }}>
      <Navbar />
      <main className={styles.mainContainer}>
        <Hero/>
        <WhyAltCred/>
        <ForLenders/>
        <Tagline/>
      </main>
      <DecorativeShape/>
    </div>
  );
}
