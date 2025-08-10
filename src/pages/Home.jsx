import StarBg from '../components/StarBg';
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        

        {/* Background Effect */}
        <StarBg />

        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <HeroSection />

        {/* Footer */}
    </div>
  )
}
