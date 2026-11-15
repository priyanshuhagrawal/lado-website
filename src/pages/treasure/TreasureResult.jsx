import { useNavigate } from "react-router-dom";

export default function TreasureResult(){

const navigate=useNavigate();

return(

<div className="treasure-page">

<div className="treasure-card">

<h1>

🏆 Treasure Found ❤️

</h1>

<p>

Har clue ek memory thi...
Aur asli treasure to tu hi hai, Lado.

</p>

<button

className="quiz-btn"

onClick={()=>navigate("/memory-hub")}

>

Back To Memory Hub

</button>

</div>

</div>

);

}