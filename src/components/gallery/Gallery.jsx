import { useState } from "react";

import GalleryCard from "./GalleryCard";
import GalleryModal from "./MemoryModal";


import galleryData from "../../data/galleryData";

export default function Gallery(){

const[selected,setSelected]=useState(null);

return(

<>

<div className="gallery-grid">

{

galleryData.map(photo=>(

<GalleryCard

key={photo.id}

photo={photo}

onClick={()=>setSelected(photo)}

/>

))

}

</div>

<GalleryModal

photo={selected}

onClose={()=>setSelected(null)}

/>

</>

);

}