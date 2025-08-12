import { Send, X, CheckCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import * as THREE from "three";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);
  const sphereRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const hideTimerRef = useRef(null);

  // EmailJS config
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setShowSuccess(true);
  if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  hideTimerRef.current = setTimeout(() => setShowSuccess(false), 5000);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  // Clear any pending timers on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

useEffect(() => {
  const scene = new THREE.Scene();

  const container = sphereRef.current;
  const width = container.clientWidth;
  const height = container.clientHeight;

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 1.2));

  const sphereRadius = 20;
  const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 96, 96);
  const pointMaterial = new THREE.PointsMaterial({
    color: 0x87cefa,
    size: 0.08,
    transparent: true,
    opacity: 0.9
  });
  const points = new THREE.Points(sphereGeometry, pointMaterial);
  points.position.x = -5;
  scene.add(points);

  const fitSphereInView = () => {
    const aspect = container.clientWidth / container.clientHeight;
    const fovRad = (camera.fov * Math.PI) / 180;

    const distV = sphereRadius / Math.sin(fovRad / 2);
    const fovHorizontal = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);
    const distH = sphereRadius / Math.sin(fovHorizontal / 2);

    // Slightly less breathing space for mobile
    const breathingSpace = window.innerWidth < 768 ? 1.05 : 1.1;

    camera.position.set(0, 0, Math.max(distV, distH) * breathingSpace);

    // Adjust horizontal offset for small screens
    points.position.x = window.innerWidth < 768 ? 0 : -5;
  };

  fitSphereInView();

  const handleResize = () => {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
    fitSphereInView();
  };
  window.addEventListener("resize", handleResize);

  const animate = () => {
    requestAnimationFrame(animate);
    points.rotation.y += 0.001;
    renderer.render(scene, camera);
  };
  animate();

  return () => {
    window.removeEventListener("resize", handleResize);
    container.removeChild(renderer.domElement);
  };
}, []);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {showSuccess && (
        <div className="fixed inset-x-4 top-4 md:top-6 z-50 pointer-events-none flex justify-center">
          <div
            role="status"
            aria-live="polite"
            className="pointer-events-auto w-full sm:w-auto max-w-md flex items-center gap-3 bg-primary/95 text-primary-foreground border border-primary/30 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl shadow-lg sm:shadow-2xl backdrop-blur-sm"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <p className="text-sm md:text-base font-medium leading-snug break-words">
              Message sent successfully! Thanks for reaching out.
            </p>
            <button
              type="button"
              onClick={handleCloseSuccess}
              aria-label="Close notification"
              className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-primary-foreground/80 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-foreground/60"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let’s talk!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT - 3D Moon */}
          <div
            ref={sphereRef}
            className="h-72 bg-black/10 rounded-lg flex items-center justify-center"
          />

          {/* RIGHT - Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs w-full">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  required
                  placeholder="Shreyas..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  autoComplete="off"
                  required
                  placeholder="shreyas@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  required
                  placeholder="Hello, I'd like to talk about..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-70"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
