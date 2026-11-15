import EmergencyButton from "../../components/emergency/EmergencyButton";
import "../../styles/emergency.css";
import ModuleBackground from "../../components/ModuleBackground";

export default function EmergencyPage(){

return(
<ModuleBackground type="emergency">
<div className="emergency-page">

<EmergencyButton/>

</div>
</ModuleBackground>
);

}