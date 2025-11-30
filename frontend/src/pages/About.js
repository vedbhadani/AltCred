import React from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/app/page.module.css';

export default function About() {
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
        
        <section className={styles.section}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '30px', color: '#ededed' }}>
            Millions of people use UPI, earn regularly, pay bills, and manage money responsibly — yet still remain "unscored" or "invisible" to traditional credit systems.
          </p>
          <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '40px', color: '#40a8c8' }}>
            AltCred solves this.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            We are an AI-powered Alternative Credit Scoring Platform designed to bring fair, fast, and accessible credit to everyone — including first-time borrowers, gig workers, students, and thin-file customers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#87ceeb', fontStyle: 'italic' }}>
            Give every individual a financial identity that truly reflects their real-life behaviour.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why We Exist</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '25px', color: '#ededed' }}>
            Traditional credit scoring focuses on:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Old loan history</li>
            <li>• Bank statements</li>
            <li>• CIBIL-dependent records</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '25px', color: '#ededed' }}>
            But what about:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#87ceeb'
          }}>
            <li>• UPI payments</li>
            <li>• Rent behavior</li>
            <li>• Digital bill payments</li>
            <li>• Income stability</li>
            <li>• Real-time spending patterns?</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ededed' }}>
            These tell a truer financial story — and AltCred uses them.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '25px', color: '#ededed' }}>
            AltCred analyzes 100+ behavioural and transactional signals such as:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• UPI frequency</li>
            <li>• Cashflow patterns</li>
            <li>• Bill payment history</li>
            <li>• Monthly spending discipline</li>
            <li>• Earning consistency</li>
            <li>• Digital reliability</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '25px', color: '#ededed' }}>
            Using these signals, our AI engine builds a dynamic, behaviour-based credit score that updates in real time — not once a year.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '15px', color: '#ededed' }}>
            This score helps:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#87ceeb'
          }}>
            <li>• Lenders reduce risk</li>
            <li>• Borrowers get fair opportunities</li>
            <li>• Fintechs onboard faster</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#ededed' }}>
            A world where:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• No one is rejected just because they never took a loan.</li>
            <li>• Young earners get equal opportunities.</li>
            <li>• Financial inclusion is powered by intelligence, not outdated systems.</li>
          </ul>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#87ceeb', fontStyle: 'italic' }}>
            AltCred is building the future of credit — smarter, fairer, and designed for everyone.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who We Work With</h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Banks</li>
            <li>• NBFCs</li>
            <li>• Digital lenders</li>
            <li>• BNPL platforms</li>
            <li>• Fintech apps needing real-time scoring</li>
            <li>• Companies offering salary advances</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Promise</h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginBottom: '30px',
            fontSize: '16px',
            lineHeight: '2',
            color: '#ededed'
          }}>
            <li>• Bias-free credit evaluation</li>
            <li>• Transparent scoring rules</li>
            <li>• User-first experience</li>
            <li>• Secure, encrypted data processing</li>
          </ul>
        </section>

        <section className={styles.section} style={{ marginBottom: '80px' }}>
          <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#40a8c8', fontStyle: 'italic', textAlign: 'center' }}>
            AltCred isn't just a scoring platform.<br/>
            It's a movement towards financial inclusion and trust.
          </p>
        </section>

      </main>
    </div>
  );
}
