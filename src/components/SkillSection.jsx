import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
    name: "Internship Certificates",
    images: [
      "/intern1.png",
    ],
  },
  {
    name: "Skill Badges",
    images: [
      "/skill1.png",
      "/skill2.png",
    ],
  },
  {
    name: "Programming Certificates (Python, C++)",
    images: [
      "/pro1.png",
      "/pro2.png",
      "/pro3.png",
      "/pro4.png",
    ],
  },
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const openModal = (cert) => {
    setCurrentCert(cert);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCert(null);
  };

  const handleContextMenu = (e) => e.preventDefault();

  const showPrevImage = () => {
    if (!currentCert) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentCert.images.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    if (!currentCert) return;
    setCurrentImageIndex((prev) =>
      prev === currentCert.images.length - 1 ? 0 : prev + 1
    );
  };

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
              activeTab === "skills"
                ? "text-primary"
                : "text-foreground/80 hover:text-foreground"
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
              <div
                key={idx}
                className="bg-card rounded-lg shadow-xs gradient-border p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-left">
                      <div className="mb-2 font-semibold tracking-wide">
                        {item.level}% - {item.name}
                      </div>
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
                        <button
                          onClick={() => openModal(cert)}
                          className="px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal */}
        {modalOpen && currentCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
          >
            <div
              className="relative max-w-full max-h-full rounded-lg bg-card p-4 shadow-lg"
              onClick={(e) => e.stopPropagation()}
              style={{ width: "90%", maxWidth: "600px" }}
            >
              <h3
                id="modal-title"
                className="text-xl font-semibold mb-4 text-center text-primary"
              >
                {currentCert.name}
              </h3>

              <div
                className="relative cursor-default select-none"
                onContextMenu={handleContextMenu}
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              >
                <img
                  src={currentCert.images[currentImageIndex]}
                  alt={`${currentCert.name} image ${currentImageIndex + 1}`}
                  className="w-full h-auto rounded-md"
                  draggable={false}
                  loading="lazy"
                />

                {/* Watermark */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    color: "hsl(var(--primary) / 0.26)",
                    fontSize: "clamp(1.25rem, 6vw, 3.25rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    userSelect: "none",
                    transform: "rotate(-30deg)",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.06em",
                    textShadow: "none",
                    mixBlendMode: "multiply",
                  }}
                >
                  Shreyas Portfolio
                </div>

                {/* Overlay to confuse screenshot tools */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px)",
                  }}
                />

                {/* Carousel indicators: current/total + dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground border border-primary/30 shadow-sm text-[11px] sm:text-xs leading-none">
                    {currentImageIndex + 1} / {currentCert.images.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {currentCert.images.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "block h-1.5 w-1.5 rounded-full bg-primary/40",
                          i === currentImageIndex && "w-3 bg-primary"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Carousel controls */}
              {currentCert.images.length > 1 && (
                <>
                  <button
                    onClick={showPrevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition"
                    aria-label="Previous image"
                    type="button"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={showNextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition"
                    aria-label="Next image"
                    type="button"
                  >
                    &#8594;
                  </button>
                </>
              )}

              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-2 right-2 text-foreground/70 hover:text-primary transition-colors text-2xl font-bold"
                style={{ lineHeight: 1 }}
                type="button"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
