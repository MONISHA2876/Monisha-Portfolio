# Animations

## Hero Section

### Typing headline
- A typing-style effect animates through a list of phrases.
- Characters appear at 70ms intervals.
- Deletion runs at 35ms intervals.
- A short pause is added before switching to the next phrase.

### Background treatment
- Soft blurred blobs float behind the hero content.
- The background uses a subtle grain overlay for texture.
- The hero section is intentionally immersive and minimal.

### Scroll indicator
- A small downward motion hints that the page continues below the fold.
- The animation loops with a gentle bounce.

### Header status dot
- A green indicator blinks in the header to imply activity.

---

## Section Transitions

### About section
- Text reveals word-by-word using GSAP and ScrollTrigger.
- The effect respects reduced-motion preferences.

### Scroll stripe reveal
- A full-screen reveal uses stacked black stripes that progress as the user scrolls.
- The motion is subtle and tied to scroll progress.

### Skills section
- Skill icons use floating motion with randomized offsets.
- Hovering pauses the motion for better readability.

---

## Global Motion Principles
- Smooth scrolling is handled by Lenis.
- Motion is used to support storytelling rather than overwhelm the layout.
- All major animated experiences should remain accessible in reduced-motion mode.