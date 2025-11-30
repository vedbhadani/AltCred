import React from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/app/page.module.css';

export default function Features() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0f',
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
      backgroundSize: '18px 18px',
      animation: 'dots-move 14s linear infinite',
      position: 'relative'
    }}>
      <Navbar />
      <main className={styles.mainContainer} style={{ background: 'transparent', position: 'relative' }}>
        
        <section className={styles.section} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#40a8c8', fontWeight: '600' }}>
            AltCred Features
          </h1>
          <p style={{ fontSize: '22px', lineHeight: '1.8', color: '#87ceeb', fontStyle: 'italic' }}>
            Designed for lenders. Built for inclusion. Powered by AI.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ⭐ 1. Behaviour-Based Credit Score
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            Move beyond outdated CIBIL-only models.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ededed' }}>
            AltCred evaluates UPI patterns, digital payments, income habits, and more — creating a 360° behavioural profile of every customer.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ⭐ 2. Real-Time Risk Engine
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            Our AI continuously analyzes your customer's:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Spending patterns</li>
            <li>• Income volatility</li>
            <li>• Bill payment behaviour</li>
            <li>• Loan intent signals</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ededed' }}>
            Risk scores update live, helping lenders make accurate, instant decisions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ⭐ 3. First-Time Borrower Scoring
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#87ceeb', fontStyle: 'italic' }}>
            No loan history? No problem.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            AltCred identifies creditworthiness for:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Students</li>
            <li>• Gig workers</li>
            <li>• New employees</li>
            <li>• Freelancers</li>
            <li>• First-time borrowers</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ededed' }}>
            Unlocks a huge untapped market.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ⭐ 4. Instant Verification & Onboarding
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            Reduce onboarding time from days → minutes with:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Automated KYC</li>
            <li>• Transaction pattern scanning</li>
            <li>• Digital profile building</li>
            <li>• Instant fraud checks</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ededed' }}>
            Smoothest customer onboarding in the lending ecosystem.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ⭐ 5. Transparent, Bias-Free Evaluation
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            AltCred eliminates:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Human bias</li>
            <li>• Location bias</li>
            <li>• Background bias</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ededed' }}>
            Scoring is based only on real behaviour, not personal identity.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ⭐ 6. Lender Dashboard & Insights
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            A powerful dashboard that provides:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Portfolio quality analysis</li>
            <li>• Risk heatmaps</li>
            <li>• User cohort performance</li>
            <li>• Default probability scores</li>
            <li>• Policy simulation tools</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#87ceeb' }}>
            Actionable insights → confident lending.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ⭐ 7. Secure & Compliant by Design
          </h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Bank-level encryption</li>
            <li>• No sensitive data leakage</li>
            <li>• 100% compliant with RBI guidelines</li>
            <li>• Transparent data usage</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ededed' }}>
            Trustworthy infrastructure for both users and lenders.
          </p>
        </section>

        <section className={styles.section} style={{ marginBottom: '80px' }}>
          <h2 className={styles.sectionTitle}>
            ⭐ 8. API-First Integration
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            Integrate AltCred's scoring engine with:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '20px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Banking systems</li>
            <li>• Loan apps</li>
            <li>• BNPL platforms</li>
            <li>• Fintech backends</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#87ceeb', fontStyle: 'italic' }}>
            Plug-in and start scoring instantly.
          </p>
        </section>

      </main>
    </div>
  );
}

