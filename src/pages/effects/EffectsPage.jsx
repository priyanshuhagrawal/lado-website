import {useState} from "react";
import CelebrationEffect from "../../components/effects/CelebrationEffect";

const types=[
"flowers",
"emoji",
"butterflies",
"stars",
"confetti",
"hearts",
"leaves",
"sparkles",
"balloons",
"random"
];

export default function EffectsPage(){

const[type,setType]=useState("flowers");

return(

<div className="effects-page">

<CelebrationEffect type={type}/>

<h1>Celebration Effects 🎉</h1>

<div className="effects-grid">

{

types.map(item=>(

<button

key={item}

onClick={()=>setType(item)}

>

{item}

</button>

))

}

</div>

</div>

);

}