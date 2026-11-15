import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom";

import emergencyData from "../../data/emergencyData";
import RewardEffect from "../effects/RewardEffect";

export default function EmergencyButton(){

const navigate=useNavigate();

const [result,setResult]=useState(null);

const handleEmergency=()=>{

if(navigator.vibrate){

navigator.vibrate([300,120,300,120,600]);

}

document.body.classList.add("emergency-mode");

setTimeout(()=>{

document.body.classList.remove("emergency-mode");

},1200);

const random=emergencyData[
Math.floor(Math.random()*emergencyData.length)
];

setResult(random);

};

return(

<div className="emergency-container">

{result&&<RewardEffect type={result.effect}/>}

<motion.div

className="emergency-circle"

animate={{
scale:[1,.96,1.08,1],
boxShadow:[
"0 0 20px rgba(255,80,80,.25)",
"0 0 70px rgba(255,80,80,.65)",
"0 0 20px rgba(255,80,80,.25)"
]
}}

transition={{
repeat:Infinity,
duration:2
}}

>

🚨

</motion.div>

<h1>

Emergency Button

</h1>

<p className="emergency-subtitle">

Agar kabhi bura lage...
ya bas kisi ki zarurat mehsoos ho...

Ye button hamesha yahi rahega.

</p>

{

!result&&(

<button

className="emergency-btn"

onClick={handleEmergency}

>

I'm Not Feeling Okay

</button>

)

}

<AnimatePresence>

{

result&&(

<motion.div

className="emergency-card"

initial={{
opacity:0,
scale:.75,
y:60
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
duration:.55
}}

>

<div className="emergency-emoji">

{result.emoji}

</div>

<h2>

{result.title}

</h2>

<div className="emergency-message">

{

result.message.split("\n").map((line,index)=>(

<p key={index}>

{line}

</p>

))

}

</div>

<div className="comfort-box">

<h3>

🌿 Comfort Action

</h3>

<p>

{result.action}

</p>

</div>

<div className="emergency-note">

💬

Ye button dabane ka matlab sirf itna hai...

Aaj tumhe thodi si care ki zarurat thi.

Aur wo tum deserve karti ho.

</div>

<div className="emergency-buttons">

<button

onClick={handleEmergency}

>

🌸 Another Message

</button>

<button

onClick={()=>navigate("/hug")}

>

🤗 Virtual Hug

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