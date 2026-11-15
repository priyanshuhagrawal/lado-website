import { motion } from "framer-motion";

export default function GalleryCard({photo,onClick}){

return(

<motion.div

className="gallery-card"

whileHover={{

scale:1.04,

rotate:1

}}

transition={{

duration:.25

}}

onClick={onClick}

>

<img

src={photo.image}

alt={photo.title}

/>

</motion.div>

);

}