import {useEffect,useRef,useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import brotherAIData from "../../data/brotherAIData";
import "../../styles/brotherAI.css";

export default function BrotherAI(){

const[messages,setMessages]=useState([
{
id:1,
sender:"ai",
text:"Hey Lado 👋 Bhaiya AI online hai... batao, aaj kya hua?"
}
]);

const[input,setInput]=useState("");
const[typing,setTyping]=useState(false);

const [conversationContext,setConversationContext]=useState({
topic:null,
personality:"neutral",
mood:null,
lastUserMessage:"",
lastAIMessage:""
});

const chatEndRef=useRef(null);

useEffect(()=>{

chatEndRef.current?.scrollIntoView({
behavior:"smooth"
});

},[messages,typing]);

const getContextResponse=text=>{

const topic=conversationContext.topic;

if(!topic)return null;

const shortReplies=[
"haan",
"ha",
"yes",
"yeah",
"no",
"nahi",
"hmm",
"okay",
"acha",
"accha",
"theek"
];

const isShortReply=shortReplies.includes(
text.trim().toLowerCase()
);

if(!isShortReply)return null;

const contextReplies={

study:[
"Haan, samajh gaya. Padhai wali baat hi continue kar rahe ho na? 😌",
"Achha, toh exam wali tension abhi bhi chal rahi hai?",
"Chalo phir thoda break leke wapas padhai pe lagte hain."
],

sad:[
"Hmm... samajh raha hu. Ab thoda better feel ho raha hai?",
"Theek hai. Bhaiya yahin hai, bolo.",
"Bas itna bata do — abhi tumhe baat karni hai ya bas thoda sa company chahiye?"
],

miss_bhaiya:[
"Haan Lado, samajh gaya. Bhaiya ki yaad officially confirmed 😌",
"Achha ji. Toh ab Bhaiya se thodi aur baat karni hai?",
"Haan, bolo. Bhaiya sun raha hai."
],

travel:[
"Haan, travel wali planning continue karte hain 😌",
"Toh batao, bucket list mein sabse pehle kahan jana hai?",
"Ek din ye plans sirf plans nahi rahenge."
],

future:[
"Haan. Dreams wali baat hi continue karte hain.",
"Batao, future mein sabse pehle kya achieve karna hai?",
"Ek ek karke sab goals tick karenge."
]

};

const replies=contextReplies[topic];

if(!replies)return null;

return replies[
Math.floor(Math.random()*replies.length)
];

};

const findResponse=message=>{

const text=message.toLowerCase();

let bestIntent=null;
let bestScore=0;

brotherAIData.intents.forEach(intent=>{

let score=0;

intent.keywords.forEach(keyword=>{

if(text.includes(keyword.toLowerCase())){

score+=keyword.length>5?3:2;

}

});

if(score>bestScore){

bestScore=score;
bestIntent=intent;

}

});

if(bestIntent){

const responses=bestIntent.responses;

const response=
responses[
Math.floor(
Math.random()*responses.length
)
];

return{
text:response,
topic:bestIntent.id,
personality:bestIntent.personality
};

}

return{
text:brotherAIData.fallback[
Math.floor(
Math.random()*brotherAIData.fallback.length
)
],
topic:conversationContext.topic,
personality:"neutral"
};

};

const sendMessage=()=>{

const trimmed=input.trim();

if(!trimmed||typing)return;

const userMessage={
id:Date.now(),
sender:"user",
text:trimmed
};

setMessages(prev=>[
...prev,
userMessage
]);

setInput("");
setTyping(true);

const contextualReply=getContextResponse(trimmed);

const result=contextualReply
?{
text:contextualReply,
topic:conversationContext.topic
}
:findResponse(trimmed);

setConversationContext(prev=>({
...prev,
topic:result.topic,
personality:result.personality,
lastUserMessage:trimmed
}));

setTimeout(()=>{

const aiMessage={
id:Date.now()+1,
sender:"ai",
text:result.text
};

setMessages(prev=>[
...prev,
aiMessage
]);

setConversationContext(prev=>({
...prev,
lastAIMessage:result.text
}));

setTyping(false);

},1200);

};

const handleKeyDown=event=>{

if(
event.key==="Enter"&&
!event.shiftKey
){

event.preventDefault();
sendMessage();

}

};

const resetConversation=()=>{

setMessages([
{
id:Date.now(),
sender:"ai",
text:"New conversation shuru? 😌 Batao Lado, aaj kya chal raha hai?"
}
]);

setConversationContext({
topic:null,
personality:"neutral",
mood:null,
lastUserMessage:"",
lastAIMessage:""
});

setInput("");
setTyping(false);

};

return(

<main className="brother-ai-page">

<div className="brother-ai-bg"/>

<section className="brother-ai-container">

<header className="brother-ai-header">

<div className="ai-avatar">
🧑‍💻
</div>

<div className="ai-header-info">

<p className="ai-status">
● BHAIYA AI ONLINE
</p>

<h1>
Brother AI
</h1>

<span>
Lado ke liye Bhaiya ka mini version 😌
</span>

</div>

<button
className="new-chat-btn"
onClick={resetConversation}
>
↻
</button>

</header>

<div className="ai-chat">

<AnimatePresence initial={false}>

{messages.map(message=>(

<motion.div
key={message.id}
className={`chat-row ${message.sender}`}
initial={{
opacity:0,
y:12,
scale:.97
}}
animate={{
opacity:1,
y:0,
scale:1
}}
>

{message.sender==="ai"&&(
<div className="message-avatar">
🧑‍💻
</div>
)}

<div className="chat-bubble">
{message.text}
</div>

</motion.div>

))}

</AnimatePresence>

{typing&&(

<motion.div
className="chat-row ai"
initial={{opacity:0}}
animate={{opacity:1}}
>

<div className="message-avatar">
🧑‍💻
</div>

<div className="typing-bubble">

<span/>
<span/>
<span/>

</div>

</motion.div>

)}

<div ref={chatEndRef}/>

</div>

<div className="quick-prompts">

<button
onClick={()=>
setInput("Bhaiya mujhe aaj bahut yaad aa rahi hai")
}
>
🥺 Miss you
</button>

<button
onClick={()=>
setInput("Mera mood kharab hai")
}
>
🌧️ Bad mood
</button>

<button
onClick={()=>
setInput("Mujhe bore ho rahi hu")
}
>
😂 Bore ho rahi hu
</button>

<button
onClick={()=>
setInput("Mujhe motivate karo")
}
>
✨ Motivate me
</button>

</div>

<div className="ai-input-area">

<textarea
value={input}
onChange={e=>setInput(e.target.value)}
onKeyDown={handleKeyDown}
placeholder="Bhaiya ko kuch bolna hai..."
rows={1}
/>

<button
className="send-btn"
onClick={sendMessage}
disabled={!input.trim()||typing}
>
➤
</button>

</div>

<p className="ai-footer">
Whatever you say stays inside this little corner of the website 🤍
</p>

</section>

</main>

);

}