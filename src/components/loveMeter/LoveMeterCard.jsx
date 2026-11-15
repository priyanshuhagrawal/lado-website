import {useState,useEffect} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom";

import loveMeterData from "./loveMeterData";
import RewardEffect from "../effects/RewardEffect";

export default function LoveMeterCard(){

const navigate=useNavigate();

const [result,setResult]=useState(null);
const [display,setDisplay]=useState("0%");
const [loading,setLoading]=useState(false);

useEffect(()=>{

if(!loading)return;

let count=0;

const interval=setInterval(()=>{

count+=Math.floor(Math.random()*18)+8;

if(count>=100){

clearInterval(interval);

const random=loveMeterData[
Math.floor(Math.random()*loveMeterData.length)
];

setResult(random);
setDisplay(random.value);
setLoading(false);

}else{

setDisplay(count+"%");

}

},35);

return()=>clearInterval(interval);

},[loading]);

return(

<div className="love-card">

<RewardEffect type="hearts"/>

<motion.div
//className="love-result"
initial={{
opacity:0,
scale:.65,
rotateX:25
}}
animate={{
opacity:1,
scale:1,
rotateX:0
}}
transition={{
duration:.55,
type:"spring"
}}
exit={{
opacity:0,
scale:.7
}}
>

😘🫂

</motion.div>

<h1 className="love-heading">

Care Meter

</h1>

<p className="love-sub">

Let's see kitna special bond hai... 💖

</p>

<div className="love-number">

{display}

</div>

<button
className="love-btn"
onClick={()=>{

if(!loading){

setResult(null);
setDisplay("0%");
setLoading(true);

}

}}
>

{loading?"Calculating...":"Check Care ✨"}

</button>

<AnimatePresence>

{result&&(
    <><RewardEffect type={result.effect} /><motion.div

                    className="love-result"

                    initial={{ opacity: 0, scale: .8 }}

                    animate={{ opacity: 1, scale: 1 }}

                    exit={{ opacity: 0, scale: .8 }}

                >

                    <h2>

                        {result.title}

                    </h2>

                    <p>

                        {result.message}

                    </p>

                    <div className="love-note">

                        <h3>

                            💌 Bhaiya's Note

                        </h3>

                        <p>

                            "{result.note}"

                        </p>

                    </div>

                    <div className="love-buttons">

                        <button
                            onClick={() => {

                                setResult(null);
                                setDisplay("0%");
                                setLoading(true);

                            } }
                        >

                            Check Again ❤️

                        </button>

                        <button
                            onClick={() => navigate("/memory-hub")}
                        >

                            Back To Memory Hub

                        </button>

                    </div>

                </motion.div></>

)}

</AnimatePresence>

</div>

);

}