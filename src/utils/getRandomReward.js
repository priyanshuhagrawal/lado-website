export default function getRandomReward(list){

const used=JSON.parse(

sessionStorage.getItem("usedRewards")

)||[];

let available=list.filter(

item=>!used.includes(item.id)

);

if(available.length===0){

sessionStorage.removeItem("usedRewards");

available=[...list];

}

const reward=

available[

Math.floor(

Math.random()*available.length

)

];

used.push(reward.id);

sessionStorage.setItem(

"usedRewards",

JSON.stringify(used)

);

return reward;

}