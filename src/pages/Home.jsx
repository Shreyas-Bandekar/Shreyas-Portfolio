import StarBg from '../components/StarBg';
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillSection';
import { ProjectSection } from '../components/ProjectSection';
import { ContactSection } from '../components/ContactSection';
import { FooterSection } from '../components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        

        {/* Background Effect */}
        <StarBg />

        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />

        {/* Footer */}
    </div>
  )
}
