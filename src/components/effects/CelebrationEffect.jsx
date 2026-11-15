import {useEffect,useState} from "react";
import effectData from "../../data/effectData";
import "../../styles/effect.css";

export default function CelebrationEffect({
type="flowers",
count=30,
duration=4500
}){

const[items,setItems]=useState([]);

useEffect(()=>{

let emojis;

if(type==="random"){

const keys=Object.keys(effectData);
const randomKey=keys[Math.floor(Math.random()*keys.length)];

emojis=effectData[randomKey];

}else{

emojis=effectData[type]||effectData.flowers;

}

const newItems=Array.from({length:count},(_,index)=>({

id:`${Date.now()}-${index}`,
emoji:emojis[Math.floor(Math.random()*emojis.length)],
left:Math.random()*100,
delay:Math.random()*1.2,
size:22+Math.random()*22,
time:4+Math.random()*3,
drift:(Math.random()*240)-120,
opacity:.65+Math.random()*.35

}));

setItems(newItems);

const timer=setTimeout(()=>{

setItems([]);

},duration);

return()=>clearTimeout(timer);

},[type,count,duration]);

if(!items.length)return null;

return(

<div className="effect-layer">

{items.map(item=>(

<span
key={item.id}
className="effect-item"
style={{
left:`${item.left}%`,
fontSize:`${item.size}px`,
animationDelay:`${item.delay}s`,
animationDuration:`${item.time}s`,
opacity:item.opacity,
"--drift":`${item.drift}px`
}}
>
{item.emoji}
</span>

))}

</div>

);

}