import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import memoryHubData from "../../data/memoryHubData";
import "../../styles/memoryHub.css";

export default function MemoryHub(){

const navigate=useNavigate();

return(

<main className="hub-page">

<div className="hub-overlay"/>

<motion.h1
initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}
className="hub-title"
>

Welcome Home, Lado ❤️

</motion.h1>


<p className="hub-subtitle">

Jo bhi yaad dekhni ho...
bas us memory ko choose kar lo.

</p>

<div className="hub-grid">

{memoryHubData.map((item,index)=>{

const Icon=item.icon;

return(

<motion.div
key={item.title}
className="hub-card"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:index*.08}}
whileHover={{
y:-8,
scale:1.04
}}
whileTap={{scale:.96}}
onClick={()=>{

if(item.path!=="#")
navigate(item.path);

}}
>

<Icon className="hub-icon"/>

<h3>{item.title}</h3>

</motion.div>

);

})}

</div>

</main>

);

}