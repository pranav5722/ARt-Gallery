import { useEffect, useRef } from 'react';

const RippleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Array<{ x: number; y: number; radius: number; alpha: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripples.current.push({ x, y, radius: 1, alpha: 1 });
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current = ripples.current.filter(ripple => ripple.alpha > 0.01);
      ripples.current.forEach(ripple => {
        ripple.radius += 2; // Ripples grow outward
        ripple.alpha *= 0.96; // Fading effect

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-20"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default RippleEffect;