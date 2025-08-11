import StarBg from '../components/StarBg';
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillSection';
import { ProjectSection } from '../components/ProjectSection';
import { ContactSection } from '../components/ContactSection';
import { FooterSection } from '../components/FooterSection';
import Helmet from "react-helmet";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Shreyas Portfolio - Web Developer & AI/ML Enthusiast</title>

        {/* Basic SEO */}
        <meta name="description" content="Welcome to my portfolio where I showcase my projects in web development and AI/ML." />
        <meta name="keywords" content="Web Developer, AI, Machine Learning, Portfolio, JavaScript, React, Software Engineer" />
        <meta name="author" content="Shreyas Bandekar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (used by LinkedIn, Facebook, etc.) */}
        <meta property="og:title" content="Shreyas Portfolio - Web Developer & AI/ML Enthusiast" />
        <meta property="og:description" content="Explore my projects and skills in web development and AI/ML." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shreyasbandekar.me" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />

        {/* Optional: Contact info as structured data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://shreyasbandekar.me",
        "@type": "Person",
        "name": "Shreyas Bandekar",
        "url": "https://your-portfolio-url.com",
        "sameAs": [
          "https://github.com/Shreyas-Bandekar",
          "https://www.linkedin.com/in/shreyas-bandekar-3993172a2"
        ],
        "email": "mailto:shreyasbandekar01@gmail.com",
        "jobTitle": "Web Developer & AI/ML Enthusiast"
      }
    `}
        </script>
      </Helmet>

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
