import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import WheelSVG from "../../components/wheel/WheelSVG";
import RewardPopup from "../../components/wheel/RewardPopup";

import wheelCategories from "../../data/wheelCategories";
import wheelRewards from "../../data/wheelRewards";

import "../../styles/wheel.css";

export default function Wheel() {

    const navigate = useNavigate();

    const [rotation, setRotation] = useState(0);

    const [reward, setReward] = useState(null);

    const [spinning, setSpinning] = useState(false);

    const [usedRewards, setUsedRewards] = useState([]);

    const categoryKeys = useMemo(() => [

        "love",
        "surprise",
        "memory",
        "treat",
        "cute",
        "care",
        "lucky",
        "magic"

    ], []);

   function getRandomReward(categoryKey){
const all=wheelRewards[categoryKey];
let available=all.filter(item=>!usedRewards.includes(item.id));
if(available.length===0){
available=all;
setUsedRewards([]);
}
const reward=available[Math.floor(Math.random()*available.length)];
setUsedRewards(prev=>[...prev,reward.id]);
return reward;
}

   function spinWheel(){

if(spinning) return;

setReward(null);

setSpinning(true);

const categoryIndex=Math.floor(Math.random()*wheelCategories.length);

const rewardData=getRandomReward(categoryKeys[categoryIndex]);

const slice=360/wheelCategories.length;

const targetAngle=categoryIndex*slice+slice/2;

const extraRotation=360*(5+Math.floor(Math.random()*3));

const finalRotation=extraRotation-targetAngle;

setRotation(prev=>prev+finalRotation);

setTimeout(()=>{

setReward({

category:wheelCategories[categoryIndex].title,

title:rewardData.title,

message:rewardData.message,

effect:rewardData.effect

});

setSpinning(false);

},6200);

}

    function spinAgain() {

        setReward(null);

        setTimeout(() => {

            spinWheel();

        }, 250);

    }

    return (

        <div className="wheel-page">

            <h1>

                🎡 Wheel Of Destiny 

            </h1>

            <p>

                Spin karo aur dekho aaj tumhare liye kya surprise wait kar raha hai...

            </p>

            <div className="wheel-wrapper">

                <div className="pointer"></div>

                <WheelSVG rotation={rotation} />

            </div>
            

            <button

                className="primary-btn"

                onClick={spinWheel}

                disabled={spinning}

            >

                {spinning ? "Spinning..." : "Spin The Wheel "}

            </button>

            <RewardPopup

                reward={reward}

                onSpinAgain={spinAgain}

                onClose={() => setReward(null)}

                onBack={() => navigate("/memory-hub")}

            />

        </div>

    );

}