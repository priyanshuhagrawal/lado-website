import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import whySpecialData from "../../data/whySpecialData";
import "../../styles/whySpecial.css";

export default function WhySpecial() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  const currentReason = whySpecialData[currentIndex];

  const isLast =
    currentIndex === whySpecialData.length - 1;

  const nextReason = () => {

    if (!isLast) {
      setCurrentIndex(prev => prev + 1);
    }

  };

  return (

    <main className="special-page">

      <div className="special-background"/>

      <AnimatePresence mode="wait">

        {!started ? (

          <motion.section
            key="intro"
            className="special-intro"
            initial={{
              opacity:0,
              y:30
            }}
            animate={{
              opacity:1,
              y:0
            }}
            exit={{
              opacity:0,
              scale:.95
            }}
          >

            <div className="intro-symbol">
              ✨
            </div>

            <p className="intro-label">
              A LITTLE SOMETHING FOR MY LADO
            </p>

            <h1>
              Why are you<br/>
              <span>so special?</span>
            </h1>

            <p className="intro-text">
              Shayad maine kabhi properly bataya nahi...
              <br/>
              par reasons bahut saare hain.
            </p>

            <button
              className="begin-special-btn"
              onClick={() => setStarted(true)}
            >
              Let me tell you ✨
            </button>

          </motion.section>

        ) : (

          <motion.section
            key={currentReason.id}
            className="reason-section"
            initial={{
              opacity:0,
              x:50
            }}
            animate={{
              opacity:1,
              x:0
            }}
            exit={{
              opacity:0,
              x:-50
            }}
          >

            <div className="reason-top">

              <span>
                WHY YOU ARE SPECIAL
              </span>

              <strong>
                {currentReason.number} / {String(
                  whySpecialData.length
                ).padStart(2,"0")}
              </strong>

            </div>

            <div className="reason-card">

              <motion.div
                className="reason-emoji"
                initial={{
                  scale:.5,
                  opacity:0
                }}
                animate={{
                  scale:1,
                  opacity:1
                }}
                transition={{
                  delay:.15
                }}
              >
                {currentReason.emoji}
              </motion.div>

              <p className="reason-number">
                {currentReason.number}
              </p>

              <h2>
                {currentReason.title}
              </h2>

              <p className="reason-message">
                {currentReason.message}
              </p>

            </div>

            <div className="reason-bottom">

              <div className="reason-progress">

                {whySpecialData.map((_,index) => (

                  <span
                    key={index}
                    className={
                      index <= currentIndex
                        ? "progress-dot active"
                        : "progress-dot"
                    }
                  />

                ))}

              </div>

              {!isLast ? (

                <button
                  className="next-reason-btn"
                  onClick={nextReason}
                >
                  Next reason →
                </button>

              ) : (

                <motion.div
                  className="final-message"
                  initial={{
                    opacity:0,
                    y:15
                  }}
                  animate={{
                    opacity:1,
                    y:0
                  }}
                >

                  <span>
                    And that's just a few...
                  </span>

                  <p>
                    Tumhare liye reasons
                    kabhi khatam nahi honge. 🌷
                  </p>

                </motion.div>

              )}

            </div>

          </motion.section>

        )}

      </AnimatePresence>

    </main>

  );
}