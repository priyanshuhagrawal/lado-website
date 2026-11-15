import "../styles/gallery.css";
import galleryData from "../data/galleryData";
import ScrapbookBook from "../components/gallery/ScrapbookBook";

export default function Gallery(){

return(

<div className="gallery-page">

<h1>

Our Memory Scrapbook ❤️

</h1>

<ScrapbookBook

memories={galleryData}

/>

</div>

);

}