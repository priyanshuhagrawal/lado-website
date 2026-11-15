import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom";
import GlassJar from "./GlassJar";
import JarChits from "./JarChits";
import FlyingChit from "./FlyingChit";
import WishPaper from "./WishPaper";

import wishJarData from "../../data/wishJarData";
import RewardEffect from "../effects/RewardEffect";

const notes=[
"Kabhi kabhi wishes poori hone me time lagta hai... lekin sahi waqt pe hi hoti hain. 🌸",
"Mujhe bas itna chahiye ki meri behes hamesha muskuraati rahe.",
"Tumhare dreams mere liye bhi important hain.",
"Ek din tumhara naam sunke log inspire honge.",
"Har chit ke saath meri ek dua bhi free milti hai. 😊",
"Jitni mehnat tum karti ho... usse bhi zyada khushiyan tum deserve karti ho."
];

export default function WishJar(){

const navigate=useNavigate();

const [wish,setWish]=useState(null);
const [note,setNote]=useState("");
const [shake,setShake]=useState(false);
const paperColors=[
"#FFE8A3",
"#FFD6E7",
"#DFF8EB",
"#DDEBFF",
"#F5E4FF",
"#FFF3D1"
];
const[showWish,setShowWish]=useState(false);

const[randomPaper,setRandomPaper]=useState(paperColors[0]);

const[showPaper,setShowPaper]=useState(false);

const pickWish=()=>{

setShake(true);

setShowPaper(false);

const paper=

paperColors[
Math.floor(Math.random()*paperColors.length)
];

setRandomPaper(paper);

setTimeout(()=>{

setShake(false);

setShowPaper(true);

},700);

const randomWish=

wishJarData[
Math.floor(Math.random()*wishJarData.length)
];

const randomNote=

notes[
Math.floor(Math.random()*notes.length)
];

setTimeout(()=>{

setWish(randomWish);

setNote(randomNote);
setShowWish(true);

},1900);

};

return(

<div className="wish-container">

{wish&&<RewardEffect type={wish.effect}/>}

<motion.div

animate={{
rotate:[0,-8,8,-8,0],
y:[0,-8,0]
}}

transition={{
duration:1.2,
repeat:Infinity,
repeatDelay:2
}}

>
<GlassJar shake={shake}>

<JarChits/>

<FlyingChit

show={showPaper}

color={randomPaper}

wish={wish}

note={note}

showWish={showWish}

onAnother={pickWish}

onBack={()=>navigate("/memory-hub")}

/>

</GlassJar>

</motion.div>

<h1>

Wish Jar

</h1>

<p className="wish-subtitle">

Har baar ek nayi chit...
Har chit me ek nayi dua...

</p>

{

!wish&&(

<button

className="wish-btn"

onClick={pickWish}

>

🫙 Pick A Wish

</button>

)

}

<AnimatePresence>
  
</AnimatePresence>

</div>

);

}