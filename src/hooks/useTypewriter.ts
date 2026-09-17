import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

interface UseTypewriterResult {
  displayed: string;
  done: boolean;
}

export function useTypewriter({
  text,
  speed = 38,
  startDelay = 600,
}: UseTypewriterOptions): UseTypewriterResult {
  const [displayed, setDisplayed] = useState<string>('');
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);

    let currentIndex = 0;
    let intervalId: number | null = null;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex += 1;
          setDisplayed(text.slice(0, currentIndex));
          if (currentIndex >= text.length) {
            setDone(true);
            if (intervalId !== null) clearInterval(intervalId);
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
