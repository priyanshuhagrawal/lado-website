import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import rewards from "../../data/scratchRewards";
import "../../styles/scratch.css";

export default function ScratchCard() {

    const navigate = useNavigate();

    const canvasRef = useRef(null);

    const isDrawing = useRef(false);

    const [revealed, setRevealed] = useState(false);

    const reward = useRef(
        rewards[Math.floor(Math.random() * rewards.length)]
    );

    useEffect(() => {

        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        canvas.width = 340;
        canvas.height = 220;

        drawCover(ctx);

    }, []);

    function drawCover(ctx) {

        const gradient = ctx.createLinearGradient(0, 0, 340, 220);

        gradient.addColorStop(0, "#FFD54F");
        gradient.addColorStop(.5, "#FFC107");
        gradient.addColorStop(1, "#F9A825");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 340, 220);

        ctx.fillStyle = "rgba(255,255,255,.18)";

        for (let i = 0; i < 120; i++) {

            ctx.beginPath();

            ctx.arc(
                Math.random() * 340,
                Math.random() * 220,
                Math.random() * 2,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }

        ctx.fillStyle = "#6b4d00";
        ctx.font = "bold 28px Poppins";
        ctx.textAlign = "center";
        ctx.fillText("🎁 SCRATCH ME 🎁", 170, 120);

        ctx.globalCompositeOperation = "destination-out";

    }

    function getPosition(e) {

        const rect = canvasRef.current.getBoundingClientRect();

        if (e.touches) {

            return {

                x: e.touches[0].clientX - rect.left,

                y: e.touches[0].clientY - rect.top

            };

        }

        return {

            x: e.clientX - rect.left,

            y: e.clientY - rect.top

        };

    }

    function start(e) {

        isDrawing.current = true;

        const ctx = canvasRef.current.getContext("2d");

        const { x, y } = getPosition(e);

        ctx.beginPath();

        ctx.moveTo(x, y);

    }

    function stop() {

        isDrawing.current = false;

        const ctx = canvasRef.current.getContext("2d");

        ctx.beginPath();

    }

    function scratch(e) {

        if (!isDrawing.current || revealed)
            return;

        const ctx = canvasRef.current.getContext("2d");

        const { x, y } = getPosition(e);

        ctx.lineWidth = 42;

        ctx.lineCap = "round";

        ctx.lineJoin = "round";

        ctx.lineTo(x, y);

        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(x, y);

        checkReveal();

    }

    function checkReveal() {

        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        const pixels = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        ).data;

        let transparent = 0;

        for (let i = 3; i < pixels.length; i += 4) {

            if (pixels[i] === 0)
                transparent++;

        }

        const percent = transparent / (canvas.width * canvas.height);

        if (percent > .55) {

            setRevealed(true);

        }

    }

    return (

        <div className="scratch-page">

            <h1>

                🎁 Scratch Your Surprise ❤️

            </h1>

            <div className="scratch-wrapper">

                <div className="reward-card">

                    <h2>

                        🎉 Congratulations

                    </h2>

                    <h3>

                        {reward.current}

                    </h3>

                    <p>

                        Bhaiya ki taraf se ❤️

                    </p>

                </div>

                {

                    !revealed && (

                        <canvas

                            ref={canvasRef}

                            className="scratch-canvas"

                            onMouseDown={start}
                            onMouseMove={scratch}
                            onMouseUp={stop}
                            onMouseLeave={stop}

                            onTouchStart={start}
                            onTouchMove={scratch}
                            onTouchEnd={stop}

                        />

                    )

                }

            </div>

            {

                revealed && (

                    <button

                        className="quiz-btn"

                        onClick={() => navigate("/wheel")}

                    >

                        Claim Reward ❤️

                    </button>

                )

            }

        </div>

    );

}