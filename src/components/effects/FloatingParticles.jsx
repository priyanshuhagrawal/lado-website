import { useMemo } from "react";

export default function FloatingParticles() {

  const particles = useMemo(() => {
    return Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="particles">

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

    </div>
  );
}