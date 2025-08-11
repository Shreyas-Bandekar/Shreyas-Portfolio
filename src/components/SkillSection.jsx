import { useState } from "react";
import { cn } from "@/lib/utils";

// Editable by developer: configure columns, items, and percentages here
const skillColumns = [
  {
    title: "Base",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JS", level: 92 },
      { name: "C++", level: 85 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Core",
    items: [
      { name: "React", level: 80 },
      { name: "Express", level: 85 },
      { name: "Node", level: 75 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", level: 90 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git/GitHub", level: 84 },
      { name: "Canva", level: 85 },
      { name: "Figma", level: 82 },
      { name: "AI tools", level: 80 },
    ],
  },
];

const certificates = [
  {
    name: "Web Development Internship - Acmegrade",
    image: "/projects/project1.png",
  },
  {
    name: "Web Development Internship - Tejyash Cyber Solutions",
    image: "/projects/project2.png",
  },
  { name: "AI/ML Workshop Participation", image: "/projects/project3.png" },
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Skills and <span className="text-primary">Certifications</span>
        </h2>

        <div className="flex items-center justify-center gap-10 mb-10 border-b border-border">
          <button
            className={cn(
              "relative py-2 text-sm md:text-base transition-colors",
              activeTab === "skills" ? "text-primary" : "text-foreground/80 hover:text-foreground"
            )}
            onClick={() => setActiveTab("skills")}
          >
            Skills
            <span
              className={cn(
                "pointer-events-none absolute left-0 -bottom-[1px] h-[2px] w-full transition-colors",
                activeTab === "skills" ? "bg-primary" : "bg-transparent"
              )}
            />
          </button>

          <button
            className={cn(
              "relative py-2 text-sm md:text-base transition-colors",
              activeTab === "certificates"
                ? "text-primary"
                : "text-foreground/80 hover:text-foreground"
            )}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
            <span
              className={cn(
                "pointer-events-none absolute left-0 -bottom-[1px] h-[2px] w-full transition-colors",
                activeTab === "certificates" ? "bg-primary" : "bg-transparent"
              )}
            />
          </button>
        </div>

        {activeTab === "skills" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {skillColumns.map((col, idx) => (
              <div key={idx} className="bg-card rounded-lg shadow-xs gradient-border p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">{col.title}</h3>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-left">
                      <div className="mb-2 font-semibold tracking-wide">{item.level}% - {item.name}</div>
                      <div className="progress-track bg-secondary/50 h-2 md:h-3 rounded-full overflow-hidden border border-border">
                        <div
                          className="progress-fill bg-primary h-full"
                          style={{ width: `${item.level}%` }}
                          role="progressbar"
                          aria-valuenow={item.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${item.name} proficiency`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-lg shadow-xs card-hover overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-secondary/40">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Certificate</th>
                    <th className="px-6 py-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((cert, idx) => (
                    <tr key={idx} className="border-t border-border">
                      <td className="px-6 py-4">{cert.name}</td>
                      <td className="px-6 py-4">
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
