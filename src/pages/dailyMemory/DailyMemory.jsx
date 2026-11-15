import {useEffect,useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import dailyMemoryData from "../../data/dailyMemoryData";
import "../../styles/dailyMemory.css";
import ModuleBackground from "../../components/ModuleBackground";


export default function DailyMemory(){

const[memory,setMemory]=useState(null);
const[currentMedia,setCurrentMedia]=useState(0);
const[opened,setOpened]=useState(false);
const[showCaption,setShowCaption]=useState(false);

  useEffect(()=>{

  const randomIndex=Math.floor(
    Math.random()*dailyMemoryData.length
  );

  setMemory(dailyMemoryData[randomIndex]);

},[]);
  const openMemory=()=>{

    setOpened(true);

    setTimeout(()=>{
      setShowCaption(true);
    },1200);

  };
  const nextMedia=()=>{

  setCurrentMedia(prev=>
    (prev+1)%memory.media.length
  );

};

const previousMedia=()=>{

  setCurrentMedia(prev=>
    (prev-1+memory.media.length)%memory.media.length
  );

};

const selectMedia=(index)=>{

  setCurrentMedia(index);

};

  if(!memory)return null;

  return(
    <ModuleBackground type="memory">
    <main className="daily-memory-page">

      <div className="memory-particles">
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
      </div>

      <motion.div
        className="memory-header"
        initial={{opacity:0,y:-30}}
        animate={{opacity:1,y:0}}
      >

        <div className="memory-eyebrow">
          TODAY'S LITTLE MEMORY
        </div>

        <h1>
          A Memory Found {memory.emoji}
        </h1>

        <p>
          Kuch memories hum choose nahi karte...
          woh khud humein mil jaati hain.
        </p>

      </motion.div>

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            key="locked"
            className="memory-envelope"
            initial={{opacity:0,scale:.8}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:1.15}}
          >

            <div className="envelope-top"/>

            <div className="envelope-content">

              <span className="envelope-icon">
                🎞️
              </span>

              <h2>
                Today's Memory
              </h2>

              <p>
                {memory.date}
              </p>

              <button
                className="open-memory-btn"
                onClick={openMemory}
              >
                Open Memory ✨
              </button>

            </div>

          </motion.div>

        ) : (

          <motion.section
            key="opened"
            className="memory-showcase"
            initial={{opacity:0}}
            animate={{opacity:1}}
          >

            <motion.div
              className="memory-film"
              initial={{scale:.4,rotate:-12,y:120,opacity:0}}
              animate={{
                scale:1,
                rotate:0,
                y:0,
                opacity:1
              }}
              transition={{
                type:"spring",
                stiffness:70,
                damping:12
              }}
            >

              <div className="film-top">
                <span>MEMORY FILM</span>
                <span>{memory.date}</span>
              </div>

              <div className="memory-media">

  <AnimatePresence mode="wait">

    <motion.div
      key={currentMedia}
      className="media-slide"
      initial={{opacity:0,x:35}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:-35}}
      transition={{duration:.3}}
    >

      {memory.media[currentMedia].type==="video" ? (

        <video
          src={memory.media[currentMedia].src}
          controls
          playsInline
        />

      ) : (

        <img
          src={memory.media[currentMedia].src}
          alt={`${memory.title} ${currentMedia+1}`}
        />

      )}

    </motion.div>

  </AnimatePresence>

  <div className="film-grain"/>

  {memory.media.length>1 && (

    <>
      <button
        className="media-arrow media-arrow-left"
        onClick={previousMedia}
      >
        ‹
      </button>

      <button
        className="media-arrow media-arrow-right"
        onClick={nextMedia}
      >
        ›
      </button>

      <div className="media-counter">
        {currentMedia+1} / {memory.media.length}
      </div>

      <div className="media-dots">

        {memory.media.map((_,index)=>(

          <button
            key={index}
            className={
              `media-dot ${
                currentMedia===index
                  ? "active"
                  : ""
              }`
            }
            onClick={()=>selectMedia(index)}
          />

        ))}

      </div>
    </>

  )}

</div>

              <div className="film-caption">

                <div className="memory-location">
                  📍 {memory.location}
                </div>

                <h2>
                  {memory.title}
                </h2>

              </div>

            </motion.div>

            <AnimatePresence>

              {showCaption && (

                <motion.div
                  className="memory-note"
                  initial={{opacity:0,y:30}}
                  animate={{opacity:1,y:0}}
                  transition={{duration:.7}}
                >

                  <div className="note-pin">
                    ✦
                  </div>

                  <p>
                    {memory.caption}
                  </p>

                  <div className="note-footer">
                    <span>keep this memory safe</span>
                    <span>♡</span>
                  </div>

                </motion.div>

              )}

            </AnimatePresence>

            {showCaption && (

              <motion.div
                className="memory-ending"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:.8}}
              >

                <span>
                  ✨
                </span>

                <p>
                  Some moments deserve to be remembered twice.
                </p>

              </motion.div>

            )}

          </motion.section>

        )}

      </AnimatePresence>

    </main>
    </ModuleBackground>
  );

}