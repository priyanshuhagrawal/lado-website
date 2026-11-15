import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom";

import hugData from "../../data/hugData";
import RewardEffect from "../effects/RewardEffect";
import "../../styles/hug.css";

export default function Hug(){

const navigate=useNavigate();

const [hug,setHug]=useState(null);

const getRandomHug=()=>{

const random=hugData[Math.floor(Math.random()*hugData.length)];

setHug(random);

};

return(

<div className="hug-container">

<AnimatePresence>

{hug&&<RewardEffect type={hug.effect}/>}

</AnimatePresence>

<motion.div

className="hug-circle"

animate={{
scale:[1,.95,1.08,1],
rotate:[0,-2,2,0]
}}

transition={{
repeat:Infinity,
duration:2
}}

>

🫂

</motion.div>

<h1>

Virtual Hug Simulator

</h1>

<p className="hug-subtitle">

Distance kitni bhi ho...
Hug hamesha deliver ho sakta hai.

</p>

{

!hug&&(

<button

className="hug-btn"

onClick={getRandomHug}

>

🤗 Send Me A Hug

</button>

)

}

<AnimatePresence>

{

hug&&(

<motion.div

className="hug-card"

initial={{
opacity:0,
scale:.8,
y:50
}}

animate={{
opacity:1,
scale:1,
y:0
}}

exit={{
opacity:0,
scale:.8
}}

transition={{
type:"spring",
duration:.5
}}

>

<div className="hug-emoji">

{hug.emoji}

</div>

<h2>

{hug.title}

</h2>

<div className="hug-intensity">

🤗 Hug Intensity

<span>

{hug.intensity}%

</span>

</div>

<div className="hug-message">

{

hug.message.split("\n").map((line,index)=>(

<p key={index}>

{line}

</p>

))

}

</div>

<div className="hug-footer">

Ye hug officially deliver ho chuka hai 🌸

</div>

<div className="hug-buttons">

<button

onClick={getRandomHug}

>

🔄 Hug Again

</button>

<button

onClick={()=>navigate("/memory-hub")}

>

🏠 Memory Hub

</button>

</div>

</motion.div>

)

}

</AnimatePresence>

</div>

);

}