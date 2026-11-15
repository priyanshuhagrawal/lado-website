import { useState } from "react";
import { useNavigate } from "react-router-dom";

import treasureData from "../../data/treasureData";

import "../../styles/treasure.css";

export default function TreasureHunt(){

const navigate=useNavigate();

const[current,setCurrent]=useState(0);

const[input,setInput]=useState("");

const[message,setMessage]=useState("");

function check(){

const answer=input.trim().toLowerCase();

if(answer===treasureData[current].answer){

setMessage(treasureData[current].reward);

setTimeout(()=>{

if(current===treasureData.length-1){

navigate("/treasure-result");

}else{

setCurrent(current+1);

setInput("");

setMessage("");

}

},1800);

}else{

setMessage("❌ Try Again ❤️");

}

}

return(

<div className="treasure-page">

<div className="treasure-card">

<h2>

🗺 Treasure Hunt

</h2>

<h3>

Clue {current+1}/{treasureData.length}

</h3>

<p>

{treasureData[current].question}

</p>

<input

value={input}

onChange={(e)=>setInput(e.target.value)}

placeholder="Answer..."

/>

<div className="treasure-buttons">

<button

className="quiz-btn"

onClick={check}

>

Submit

</button>

<button

className="quiz-btn"

onClick={()=>alert(treasureData[current].hint)}

>

Hint

</button>

</div>

<h4>

{message}

</h4>

</div>

</div>

);

}