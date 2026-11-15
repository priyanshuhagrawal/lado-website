import {motion,AnimatePresence} from "framer-motion";

export default function WishPaper({

show,
wish,
note,
paperColor,
onAnother,
onBack

}){

return(

<AnimatePresence>

{

show&&wish&&(

<motion.div

className="wish-paper"

initial={{

scale:.4,
rotateY:90,
opacity:0

}}

animate={{

scale:1,
rotateY:0,
opacity:1

}}

exit={{

scale:.6,
opacity:0

}}

transition={{

duration:.7

}}

>

<div

className="paper-sheet"

style={{

background:paperColor

}}

>

<div className="paper-top"/>

<div className="paper-bottom"/>

<div className="paper-content">

<div className="paper-emoji">

{wish.emoji}

</div>

<h2>

{wish.title}

</h2>

<p>

{wish.message}

</p>

<div className="paper-note">

<h4>

💌 Bhaiya's Note

</h4>

<p>

{note}

</p>

</div>

<div className="paper-buttons">

<button onClick={onAnother}>

🫙 Another Wish

</button>

<button onClick={onBack}>

🏠 Memory Hub

</button>

</div>

</div>

</div>

</motion.div>

)

}

</AnimatePresence>

);

}