import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const INTRO_TEXT =
  'Glad you stopped in. Good taste tends to find us. Now, what are we building?';

const PILL_BUTTONS = [
  { id: 'pitch-idea', label: 'Pitch us an idea' },
  { id: 'work-here', label: 'Come work here' },
  { id: 'send-hello', label: 'Send a brief hello' },
  { id: 'how-we-operate', label: 'See how we operate' },
];

export function Hero() {
  const { displayed, done } = useTypewriter({
    text: INTRO_TEXT,
    speed: 38,
    startDelay: 600,
  });

  const [pillsVisible, setPillsVisible] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => window.clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@mainframe.co');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement('textarea');
      textArea.value = 'hello@mainframe.co';
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <main
      id="hero-section"
      className="relative z-[1] w-full h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      {/* Content container */}
      <div className="max-w-xl relative z-10 w-full">
        {/* 1. Blurred intro label */}
        <div
          id="blurred-intro-label"
          className="pointer-events-none select-none mb-5 sm:mb-6 text-black font-normal"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            filter: 'blur(4px)',
          }}
          aria-hidden="true"
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe&apos;s Adaptive Response Interface Agent
        </div>

        {/* 2. Typewriter text */}
        <p
          id="typewriter-text"
          className="text-black mb-5 sm:mb-6 font-normal min-h-[54px]"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
          }}
        >
          {displayed}
          {!done && (
            <span
              id="typewriter-cursor"
              className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          id="action-pills"
          className="flex flex-wrap gap-y-1 relative"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {PILL_BUTTONS.map((pill) => (
            <button
              key={pill.id}
              id={`pill-${pill.id}`}
              type="button"
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {pill.label}
            </button>
          ))}

          {/* 1 outline pill button */}
          <div className="relative inline-flex items-center">
            <button
              id="pill-reach-us"
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address hello@mainframe.co"
              className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
            >
              <span>
                Reach us:{' '}
                <span className="underline underline-offset-1">
                  hello@mainframe.co
                </span>
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                aria-hidden="true"
              >
                <rect
                  x="3.5"
                  y="3.5"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M8.5 2.5V1.5C8.5 1.22386 8.27614 1 8 1H2C1.72386 1 1.5 1.22386 1.5 1.5V7.5C1.5 7.77614 1.72386 8 2 8H3"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Subtle copied confirmation tooltip */}
            {copied && (
              <span
                id="email-copied-toast"
                className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] px-2 py-0.5 rounded shadow pointer-events-none select-none whitespace-nowrap animate-fade-in"
              >
                Copied to clipboard!
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
