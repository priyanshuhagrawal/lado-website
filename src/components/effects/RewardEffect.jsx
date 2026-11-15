import { useEffect,useState } from "react";
import "../../styles/effects.css";

export default function RewardEffect({type}){

const [items,setItems]=useState([]);

useEffect(()=>{

if(!type) return;

const arr=Array.from({length:35},(_,i)=>({
id:i,
left:Math.random()*100,
delay:Math.random()*2,
duration:4+Math.random()*4,
size:18+Math.random()*22
}));

setItems(arr);

const timer=setTimeout(()=>setItems([]),7000);

return()=>clearTimeout(timer);

},[type]);

const emojiMap={
hearts:"❤️",
flowers:"🌸",
butterflies:"🦋",
emoji:"🥹",
stars:"⭐",
sparkles:"✨",
gift:"🎁",
chocolates:"🍫",
coffee:"☕",
icecream:"🍦",
pizza:"🍕",
music:"🎵",
phone:"☎️",
moon:"🌙",
sunshine:"☀️",
clouds:"☁️",
water:"💧",
camera:"📸",
teddy:"🧸",
gold:"👑",
confetti:"🎉",
memories:"💖",
letter:"💌",
hug:"🤗"
};

const emoji=emojiMap[type]||"✨";

return(

<div className="reward-effect">

{items.map(item=>(

<span
key={item.id}
className={`floating-item ${type}`}
style={{
left:`${item.left}%`,
animationDelay:`${item.delay}s`,
animationDuration:`${item.duration}s`,
fontSize:`${item.size}px`
}}
>

{emoji}

</span>

))}

</div>

);

}