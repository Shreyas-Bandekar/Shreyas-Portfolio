import { ArrowUp, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export const FooterSection = () => {
  const [showButton, setShowButton] = useState(false);
  const iconSize = 24; // or whatever size you use

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="py-6 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto max-w-6xl flex flex-col gap-4">

        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left - Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/shreyas-bandekar-3993172a2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Linkedin size={iconSize} />
            </a>
            <a
              href="https://github.com/Shreyas-Bandekar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Github size={iconSize} />
            </a>
            <a
              href="mailto:shreyasbandekar01@gmail.com"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Mail size={iconSize} />
            </a>
          </div>

          {/* Right - Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground text-center sm:text-right">
            <MapPin size={iconSize} className="text-primary" />
            Diva, Thane, Maharashtra - 400612
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="flex justify-center items-center">
          <p className="text-md text-muted-foreground text-center">
            © {new Date().getFullYear()} Shreyas Bandekar — All rights reserved.
          </p>
        </div>

        {/* Fixed Scroll to Top Arrow, only show if scrolled */}
        {showButton && (
          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors fixed bottom-6 right-6 shadow-lg"
          >
            <ArrowUp size={iconSize} />
          </a>
        )}
      </div>
    </footer>
  );
};
