import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import homeLikeMemoryData from "../../data/homeLikeMemoryData";
import "../../styles/homeLikeMemory.css";

export default function HomeLikeMemory(){

  const[data]=useState(homeLikeMemoryData);
  const[step,setStep]=useState(0);

  const nextStep=()=>{
    setStep(prev=>Math.min(prev+1,6));
  };

  return(

    <main className="home-memory-page">

      <div className="home-memory-glow"/>
      <div className="home-memory-particles"/>

      <AnimatePresence mode="wait">

        {step===0 && (

          <motion.section
            key="intro"
            className="home-memory-section intro-section"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >

            <motion.div
              className="memory-date"
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:.3}}
            >
              {data.date}
            </motion.div>

            <motion.div
              className="memory-small-title"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:.6}}
            >
              {data.chapter}
            </motion.div>

            <motion.h1
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              transition={{delay:.9}}
            >
              {data.title}
            </motion.h1>

            <motion.p
              className="intro-text"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:1.3}}
            >
              {data.intro}
            </motion.p>

            <motion.button
              className="memory-next-btn"
              onClick={nextStep}
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:1.8}}
            >
              Remember This Moment
              <span>→</span>
            </motion.button>

          </motion.section>

        )}

        {step===1 && (

          <motion.section
            key="first-memory"
            className="home-memory-section story-section"
            initial={{opacity:0,x:60}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:-60}}
          >

            <div className="story-label">
              THE MEMORY
            </div>

            <h2>
              {data.firstMemoryTitle}
            </h2>

            <div className="story-line"/>

            <p>
              {data.firstMemoryText}
            </p>

            <div className="memory-no-photo">
              <div className="memory-symbol">
                ✦
              </div>

              <span>
                No photo.
                <br/>
                No video.
                <br/>
                Just a feeling.
              </span>
            </div>

            <button
              className="memory-next-btn"
              onClick={nextStep}
            >
              And then...
              <span>→</span>
            </button>

          </motion.section>

        )}

        {step===2 && (

          <motion.section
            key="recent-video"
            className="home-memory-section video-section"
            initial={{opacity:0,scale:.95}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:.95}}
          >

            <div className="story-label">
              A RECENT MOMENT
            </div>

            <h2>
              The feeling came back.
            </h2>

            <div className="memory-video-frame">

              <div className="video-film-top">
                <span>RECENT MEMORY</span>
                <span>16.05.2026</span>
              </div>

              <video
                src={data.video}
                controls
                playsInline
              />

              <div className="video-film-bottom">
                A little moment from a much more recent day.
              </div>

            </div>

            <p className="video-caption">
              {data.videoCaption}
            </p>

            <button
              className="memory-next-btn"
              onClick={nextStep}
            >
              One more thing...
              <span>→</span>
            </button>

          </motion.section>

        )}

        {step===3 && (

          <motion.section
            key="mother"
            className="home-memory-section mother-section"
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-40}}
          >

            <div className="story-label">
              AND THEN I UNDERSTOOD
            </div>

            <h2>
              {data.motherTitle}
            </h2>

            <div className="mother-photo-wrap">

              <div className="mother-photo-frame">

                <img
                  src="/special-memory/mummy.jpg"
                  alt="Mummy"
                />

              </div>

            </div>

            <p>
              {data.motherText}
            </p>

            <button
              className="memory-next-btn"
              onClick={nextStep}
            >
              I want you to know this...
              <span>→</span>
            </button>

          </motion.section>

        )}

        {step===4 && (

          <motion.section
            key="connection"
            className="home-memory-section connection-section"
            initial={{opacity:0,scale:.9}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:1.05}}
          >

            <div className="connection-visual">

              <motion.div
                className="connection-circle"
                initial={{scale:0}}
                animate={{scale:1}}
              >
                <span>care</span>
              </motion.div>

              <motion.div
                className="connection-line"
                initial={{scaleX:0}}
                animate={{scaleX:1}}
                transition={{delay:.5}}
              />

              <motion.div
                className="connection-home"
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{delay:.8}}
              >
                <span>home</span>
              </motion.div>

            </div>

            <p className="connection-text">
              {data.connectionText}
            </p>

            <button
              className="memory-next-btn"
              onClick={nextStep}
            >
              One last thing...
              <span>→</span>
            </button>

          </motion.section>

        )}

        {step===5 && (

          <motion.section
            key="ending"
            className="home-memory-section ending-section"
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0}}
          >

            <div className="story-label">
              FOR YOU
            </div>

            <h2>
              {data.endingTitle}
            </h2>

            <div className="ending-lines">

              {data.endingLines.map((line,index)=>(

                <motion.p
                  key={line}
                  initial={{opacity:0,y:15}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:index*.5}}
                >
                  {line}
                </motion.p>

              ))}

            </div>

            <button
              className="memory-next-btn final-button"
              onClick={nextStep}
            >
              Keep This Memory
              <span>✦</span>
            </button>

          </motion.section>

        )}

        {step===6 && (

          <motion.section
            key="final"
            className="home-memory-section final-section"
            initial={{opacity:0,scale:.8}}
            animate={{opacity:1,scale:1}}
          >

            <motion.div
              className="final-symbol"
              animate={{
                scale:[1,1.08,1],
                rotate:[0,4,-4,0]
              }}
              transition={{
                duration:4,
                repeat:Infinity
              }}
            >
              ✦
            </motion.div>

            <h2>
              {data.finalText}
            </h2>

            <p>
              Some memories don't need a photograph
              to stay forever.
            </p>

            <div className="final-line"/>

            <span className="final-date">
              16 May 2026
            </span>

          </motion.section>

        )}

      </AnimatePresence>

    </main>

  );

}