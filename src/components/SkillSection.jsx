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

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Skills
      </h2>
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
    </section>
  );
};
