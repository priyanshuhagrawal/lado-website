import wheelCategories from "../../data/wheelCategories";

export default function WheelSVG({ rotation }) {

    const size = 520;
    const center = 260;
    const radius = 230;

    const total = wheelCategories.length;
    const sliceAngle = 360 / total;

    function polar(angle, r) {

        const rad = (angle - 90) * Math.PI / 180;

        return {

            x: center + r * Math.cos(rad),

            y: center + r * Math.sin(rad)

        };

    }

    return (

        <svg

            className="wheel-svg"

            viewBox={`0 0 ${size} ${size}`}

            style={{

                transform: `rotate(${rotation}deg)`,

                transition: "transform 6s cubic-bezier(.17,.89,.32,1)"

            }}

        >

            <defs>

                <filter id="shadow">

                    <feDropShadow

                        dx="0"

                        dy="8"

                        stdDeviation="8"

                        floodOpacity=".28"

                    />

                </filter>

            </defs>

            <circle

                cx={center}

                cy={center}

                r={radius + 12}

                fill="#FFF6D6"

                filter="url(#shadow)"

            />

            {

                wheelCategories.map((item, index) => {

                    const start = index * sliceAngle;
                    const end = start + sliceAngle;

                    const p1 = polar(start, radius);
                    const p2 = polar(end, radius);

                    const large = sliceAngle > 180 ? 1 : 0;

                    const path = `
                        M ${center} ${center}
                        L ${p1.x} ${p1.y}
                        A ${radius} ${radius}
                        0 ${large} 1
                        ${p2.x} ${p2.y}
                        Z
                    `;

                    const textPos = polar(start + sliceAngle / 2, 145);

                    return (

                        <g key={item.id}>

                            <path

                                d={path}

                                fill={item.color}

                                stroke="#ffffff"

                                strokeWidth="3"

                            />

                            <text

                                x={textPos.x}

                                y={textPos.y}

                                textAnchor="middle"

                                dominantBaseline="middle"

                                fill="#1E1E1E"

                                fontWeight="700"

                                fontSize="18"

                                transform={`rotate(${start + sliceAngle / 2 + 90} ${textPos.x} ${textPos.y})`}

                            >

                                {item.title}

                            </text>

                        </g>

                    );

                })

            }

            <circle

                cx={center}

                cy={center}

                r="48"

                fill="white"

                stroke="#FFD54F"

                strokeWidth="6"

            />

            <text

                x={center}

                y={center + 10}

                fontSize="34"

                textAnchor="middle"

            >

                🤗

            </text>

        </svg>

    );

}