import { useMemo } from "react";

export default function Background() {

    const stars = useMemo(() => {

        return Array.from({ length: 180 }, (_, i) => ({

            id: i,

            left: Math.random() * 100,

            top: Math.random() * 100,

            size: Math.random() * 2.5 + 1,

            duration: Math.random() * 4 + 3,

            delay: Math.random() * 5,

        }));

    }, []);

    return (

        <>

            <div className="sky-gradient" />

            <div className="moon-glow" />

            <div className="stars">

                {stars.map((star) => (

                    <span

                        key={star.id}

                        className="star"

                        style={{

                            left: `${star.left}%`,

                            top: `${star.top}%`,

                            width: `${star.size}px`,

                            height: `${star.size}px`,

                            animationDuration: `${star.duration}s`,

                            animationDelay: `${star.delay}s`

                        }}

                    />

                ))}

            </div>

        </>

    );

}