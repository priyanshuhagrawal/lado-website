import { useMemo } from "react";

export default function FloatingFlowers() {

  const flowers = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 18 + 18,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 12,
      rotate: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="flowers">

      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flower"
          style={{
            left: `${flower.left}%`,
            fontSize: `${flower.size}px`,
            animationDuration: `${flower.duration}s`,
            animationDelay: `${flower.delay}s`,
            transform: `rotate(${flower.rotate}deg)`
          }}
        >
          🌸
        </div>
      ))}

    </div>
  );
}