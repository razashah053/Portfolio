import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ dot: 10, ring: 36 });
  const ringRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>();
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Don't render custom cursor if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateRing = () => {
      ringPos.current.x += (mousePos.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.y - ringPos.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafId.current = requestAnimationFrame(animateRing);
    };

    animateRing();
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [mousePos]);

  useEffect(() => {
    const handleMouseEnter = () => {
      setCursorSize({ dot: 16, ring: 56 });
    };

    const handleMouseLeave = () => {
      setCursorSize({ dot: 10, ring: 36 });
    };

    const elements = document.querySelectorAll('a, button, .pill, .project-card');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: mousePos.x,
          top: mousePos.y,
          width: cursorSize.dot,
          height: cursorSize.dot,
          background: '#e8ff47',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: cursorSize.ring,
          height: cursorSize.ring,
          border: '1px solid #e8ff47',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.12s, height 0.12s',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
