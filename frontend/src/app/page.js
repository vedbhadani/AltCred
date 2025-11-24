// Demonstrating modularity: importing reusable components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyAltCred from "@/components/WhyAltCred";
import ForLenders from "@/components/ForLenders";
import Tagline from "@/components/Tagline";
import DecorativeShape from "@/components/DecorativeShape";
import styles from "./page.module.css";
export default function Page() {
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        <Hero />
        
        <WhyAltCred />
        
        <ForLenders />
        
        <Tagline />
      </main>
    
      <DecorativeShape />
    </>
  );
}