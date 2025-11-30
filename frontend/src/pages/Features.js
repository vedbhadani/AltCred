import React from 'react';
import Navbar from '@/components/Navbar';

export default function Features() {
  return (
    <div style={{
      minHeight:'100vh',
      backgroundColor:'#0a0a0f',
      backgroundImage:'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
      backgroundSize:'18px 18px',
      animation: 'dots-move 14s linear infinite',
      position:'relative'
    }}>
      <Navbar />
      <div style={{ padding: '40px', color: '#fff' }}>
        <h1>Features</h1>
        <p>Features content will be added here.</p>
      </div>
    </div>
  );
}

