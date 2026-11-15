export default function JarChits(){

const colors=[

"#FF8FAB",
"#FFD166",
"#B8F2E6",
"#A0C4FF",
"#CDB4DB",
"#F9C5D5"

];

return(

<>

{

Array.from({length:50}).map((_,i)=>(

<div

key={i}

className="jar-chit"

style={{

background:colors[i%colors.length],

left:`${18+(i%7)*10}%`,

bottom:`${18+Math.floor(i/7)*11}px`,

transform:`

rotate(${Math.random()*40-20}deg)

translateY(${Math.random()*8}px)

`

}}

>

</div>

))

}

</>

);

}