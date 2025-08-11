import { BookOpen, Code, Handshake, } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & AI/ML Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a passionate Full Stack Developer, AI/ML enthusiast, and a 3rd-year Diploma student in Computer Engineering, aspiring to become a skilled Software Engineer.With 6 months of industry experience through internships at Acmegrade and Tejyash Cyber Solutions, I’ve worked on developing responsive, accessible, and high-performance web applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I specialize in building modern, responsive, and high-performance web applications while exploring the potential of artificial intelligence and machine learning to create smarter, more impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    💻 Building end-to-end applications with modern frontend frameworks, backend APIs, and databases for scalable, high-performance solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Industry Experience</h4>
                  <p className="text-muted-foreground">
                    🏢 Completed 3-month web development internships at Acmegrade and Tejyash Cyber Solutions, gaining hands-on experience in real-world projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> AI/ML Enthusiast & Student</h4>
                  <p className="text-muted-foreground">
                    🤖 Exploring AI/ML concepts while pursuing a Diploma in Computer Engineering (3rd Year) with a focus on software engineering principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
