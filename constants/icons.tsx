// ── Cute hand-drawn SVG icons ──────────────────────────────────────────────

const icons = {
  home: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Soft rounded roof */}
      <path d="M4 11.5Q4 10.2 5 9.4L11 4.6Q11.9 3.8 13 4.6L19 9.4Q20 10.2 20 11.5V19Q20 20.1 18.9 20.1H15V15.5Q15 14.5 14 14.5H10Q9 14.5 9 15.5V20.1H5.1Q4 20.1 4 19Z" />
    </svg>
  ),
  about: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Face circle */}
      <circle cx="12" cy="12" r="9" />
      {/* Eyes */}
      <circle cx="9" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10.5" r="1" fill="currentColor" stroke="none" />
      {/* Smile */}
      <path d="M8.5 14.5Q10 17 12 17Q14 17 15.5 14.5" />
    </svg>
  ),
  skills: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.4 7H21l-5.8 4.2 2.2 7L12 16.2 6.6 20.2l2.2-7L3 9h6.6L12 2z" />
    </svg>
  ),
  project: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Suitcase body */}
      <rect x="2" y="8" width="20" height="13" rx="2.5" />
      {/* Handle */}
      <path d="M9 8V6Q9 4 12 4Q15 4 15 6V8" />
      {/* Centre latch line */}
      <line x1="12" y1="8" x2="12" y2="21" />
      {/* Belt stripe */}
      <line x1="2" y1="14.5" x2="22" y2="14.5" />
    </svg>
  ),
  certificate: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ribbon left */}
      <path d="M9 10L6 20L12 17L18 20L15 10" />
      {/* Medal disc */}
      <circle cx="12" cy="8" r="5" />
      {/* Star inside medal */}
      <path
        d="M12 5.5L12.9 7.6H15.1L13.4 8.9L14.1 11L12 9.8L9.9 11L10.6 8.9L8.9 7.6H11.1Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  timeline: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Clock face */}
      <circle cx="12" cy="12" r="9" />
      {/* Hour hand (pointing to ~11) */}
      <line x1="12" y1="12" x2="9" y2="6.5" />
      {/* Minute hand (pointing to ~3) */}
      <line x1="12" y1="12" x2="17" y2="12" />
      {/* Centre dot */}
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      {/* Crown / winding knob */}
      <line x1="12" y1="3" x2="12" y2="1.5" />
    </svg>
  ),
  contact: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 5H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1z" />
      <path d="M2 6l10 7L22 6" />
    </svg>
  ),
  sun: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  ),
  moon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z" />
    </svg>
  ),
};

export default icons;
