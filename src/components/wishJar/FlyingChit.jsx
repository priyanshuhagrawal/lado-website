import {motion,AnimatePresence} from "framer-motion";

export default function FlyingChit({

show,
color,
wish,
note,
showWish,
onAnother,
onBack

}){

return(

<AnimatePresence>

{

show&&(

<motion.div

className="flying-paper"

initial={{

x:0,
y:120,
scale:.35,
rotate:-18,
opacity:0

}}

animate={{

x:0,
y:-170,
scale:1,
rotate:8,
opacity:1

}}

exit={{

opacity:0,
scale:.7

}}

transition={{

duration:1.25,
ease:"easeInOut"

}}

>

<div
className="paper-shadow"
/>

<motion.div

className="paper"

style={{

background:color

}}

animate={{

rotateY:[0,180],
scaleX:[.55,1]

}}

transition={{

delay:.45,
duration:.6

}}

>

<div className="paper-fold"/>

<div className="paper-fold second"/>

<div className="paper-content">

{

showWish?

<>

<div className="wish-emoji">

{wish?.emoji}

</div>

<h2>

{wish?.title}

</h2>

<p>

{wish?.message}

</p>

<div className="mini-note">

💌

{note}

</div>

<div className="paper-buttons">

<button

onClick={onAnother}

>

Another Wish

</button>

<button

onClick={onBack}

>

Memory Hub

</button>

</div>

</>

:

<div className="paper-loading">

✨

</div>

}

</div>

</motion.div>

</motion.div>

)

}

</AnimatePresence>

);

}