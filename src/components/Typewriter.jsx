import { useEffect, useRef, useState } from "react";

export default function Typewriter({
  words = [],
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseBetween = 1000,
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[index % words.length];
    const isComplete = text === currentWord;
    const isEmpty = text === "";

    let timeout = typingSpeed;
    if (!deleting && !isComplete) {
      timeout = typingSpeed;
      const next = currentWord.slice(0, text.length + 1);
      const id = setTimeout(() => mounted.current && setText(next), timeout);
      return () => clearTimeout(id);
    }

    if (!deleting && isComplete) {
      const id = setTimeout(() => mounted.current && setDeleting(true), pauseBetween);
      return () => clearTimeout(id);
    }

    if (deleting && !isEmpty) {
      const next = currentWord.slice(0, text.length - 1);
      const id = setTimeout(() => mounted.current && setText(next), deletingSpeed);
      return () => clearTimeout(id);
    }

    if (deleting && isEmpty) {
      const id = setTimeout(() => {
        if (mounted.current) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }, 300);
      return () => clearTimeout(id);
    }
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseBetween]);

  return (
    <div className="text-primary/90 text-lg md:text-xl font-medium">
      I am a <span className="text-primary font-semibold">{text}</span>
      <span className="ml-1 animate-pulse">|</span>
    </div>
  );
}


