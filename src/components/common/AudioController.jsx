import { useEffect, useRef } from "react";

export default function AudioController({ play }) {

    const audioRef = useRef(null);

    useEffect(() => {

        if (play) {

            audioRef.current?.play().catch(() => {});

        }

    }, [play]);

    return (

        <audio
            ref={audioRef}
            preload="auto"
            src="/audio/bhaiya/opening.ogg"
        />

    );

}