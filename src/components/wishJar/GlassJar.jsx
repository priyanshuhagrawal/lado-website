import {motion} from "framer-motion";

export default function GlassJar({

shake,
children

}){

return(

<motion.div

className="glass-jar-wrapper"

animate={

shake?

{

rotate:[0,-5,5,-5,3,-3,0],
y:[0,-6,0]

}

:{

y:[0,-4,0]

}

}

transition={

shake?

{

duration:.8

}

:{

duration:2.8,
repeat:Infinity

}

}

>

<svg

viewBox="0 0 300 420"

className="glass-jar"

>

<defs>

<linearGradient
id="glass"
x1="0%"
y1="0%"
x2="100%"
y2="100%"
>

<stop
offset="0%"
stopColor="#ffffff"
stopOpacity=".35"
/>

<stop
offset="100%"
stopColor="#ffffff"
stopOpacity=".08"
/>

</linearGradient>

<linearGradient
id="lid"
x1="0%"
y1="0%"
x2="0%"
y2="100%"
>

<stop
offset="0%"
stopColor="#C79A63"
/>

<stop
offset="100%"
stopColor="#8A5C2F"
/>

</linearGradient>

</defs>

<rect

x="90"
y="18"
width="120"
height="32"
rx="8"
fill="url(#lid)"

/>

<rect

x="75"
y="42"
width="150"
height="18"
rx="8"
fill="#A56D3B"

/>

<path

d="

M65 60

L65 330

Q65 395 150 395

Q235 395 235 330

L235 60

Z

"

fill="url(#glass)"
stroke="rgba(255,255,255,.6)"
strokeWidth="3"

/>

<path

d="

M90 75

Q105 110 105 330

"
ellipse

cx="175"
cy="150"

rx="26"
ry="95"

fill="white"

opacity=".06"

transform="rotate(-20 175 150)" 



stroke="white"
strokeOpacity=".35"
strokeWidth="5"
strokeLinecap="round"

/>

</svg>

<div className="jar-chits">

{children}

</div>

</motion.div>

);

}