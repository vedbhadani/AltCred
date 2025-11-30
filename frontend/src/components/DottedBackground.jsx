'use client';

import { useEffect, useRef } from 'react';

const DottedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const dots = [];
    const spacing = 30;
    const maxDistance = 150;

    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        const dx = dot.x - dot.originalX;
        const dy = dot.y - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 10) {
          dot.x += (dot.originalX - dot.x) * 0.05;
          dot.y += (dot.originalY - dot.y) * 0.05;
        }

        const distanceToMouse = Math.sqrt(
          (mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2
        );

        if (distanceToMouse < maxDistance) {
          const force = (maxDistance - distanceToMouse) / maxDistance;
          const angle = Math.atan2(dot.y - mouseY, dot.x - mouseX);
          dot.x += Math.cos(angle) * force * 2;
          dot.y += Math.sin(angle) * force * 2;
        }

        const force = distanceToMouse < maxDistance ? (maxDistance - distanceToMouse) / maxDistance : 0;
        const opacity = Math.max(0.1, 1 - distanceToMouse / maxDistance);
        const size = distanceToMouse < maxDistance ? 2 + force * 2 : 1.5;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${opacity * 0.4})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default DottedBackground;
