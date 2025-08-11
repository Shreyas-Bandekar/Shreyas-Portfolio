import React from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      {/* Large 404 */}
      <h1 className="text-6xl sm:text-8xl font-bold text-primary">404</h1>

      {/* Message */}
      <p className="mt-4 text-lg text-muted-foreground">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
      >
        <Home size={20} />
        Back to Home
      </button>
    </div>
  );
}
