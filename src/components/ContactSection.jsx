import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // EmailJS config
  const SERVICE_ID = "add_your_SERVICE_I";
  const TEMPLATE_ID = "add_your_TEMPLATE_ID";
  const PUBLIC_KEY = "add_your_PUBLIC_KEY";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      '#contact-form',
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset();
    }).catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message.');
    });
  };

return (
  <section id="contact" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Let’s talk!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="h-64 bg-black/10 rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">[ 3D Moon Here ]</span>
        </div>

        {/* RIGHT */}
        <div className="bg-card p-8 rounded-lg shadow-xs">
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
