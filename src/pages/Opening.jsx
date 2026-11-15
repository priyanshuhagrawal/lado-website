import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/opening.css";

import Background from "../components/effects/Background";
import FloatingFlowers from "../components/effects/FloatingFlowers";
import FloatingParticles from "../components/effects/FloatingParticles";
import CinematicText from "../components/common/CinematicText";
import AudioController from "../components/common/AudioController";


import openingScript from "../data/openingScript";

export default function Opening() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const [playAudio, setPlayAudio] = useState(false);

    const isLastScreen = index === openingScript.length - 1;
  

    useEffect(() => {

        const firstTimer = setTimeout(() => {

            setPlayAudio(true);

        }, 1800);

        return () => clearTimeout(firstTimer);

    }, []);

   

    useEffect(() => {

    if (index >= openingScript.length - 1)
        return;

    const timer = setTimeout(() => {

        setIndex(prev => prev + 1);

    }, openingScript[index].duration);

    return () => clearTimeout(timer);

}, [index]);

    return (

        <main className="opening-page">

            <Background />

            <FloatingParticles />

            <FloatingFlowers />

            <div className="overlay"></div>

            <AudioController play={playAudio} />

            <div className="opening-content">

                <CinematicText
                    text={openingScript[index].text}
                />

                {isLastScreen && (

    <button
    className="enter-button"
    onClick={() => {

        navigate("/memory-hub");

    }}
>

    Enter My World ❤️

</button>

)}

            </div>

        </main>

    );

}

