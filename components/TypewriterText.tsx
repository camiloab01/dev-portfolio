"use client";

import { useEffect, useState, useCallback } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  loopInterval?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypewriterText({
  text,
  delay = 100,
  startDelay = 0,
  loopInterval = 0,
  className = "",
  cursorClassName = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const resetAndType = useCallback(() => {
    setDisplayedText("");
    setIsTyping(true);
  }, []);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, delay);

      return () => clearTimeout(timeout);
    } else if (loopInterval > 0) {
      const loopTimeout = setTimeout(() => {
        resetAndType();
      }, loopInterval);

      return () => clearTimeout(loopTimeout);
    }
  }, [displayedText, text, delay, isTyping, loopInterval, resetAndType]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`${cursorClassName} ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      >
        _
      </span>
    </span>
  );
}
