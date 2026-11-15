import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import easterEggData from "../../data/easterEggData";
import "../../styles/easterEgg.css";

export default function EasterEgg() {

  
  const [unlocked, setUnlocked] = useState(false);
  const [foundClues, setFoundClues] = useState([]);

useEffect(() => {

  const loadClues = () => {

    const saved =
      JSON.parse(
        localStorage.getItem(
          "lado_easter_egg_clues"
        ) || "[]"
      );

    setFoundClues(saved);

  };

  loadClues();

  window.addEventListener(
    "easterEggClueFound",
    loadClues
  );

  return () => {

    window.removeEventListener(
      "easterEggClueFound",
      loadClues
    );

  };

}, []);

useEffect(() => {

  if (
    foundClues.length >=
    easterEggData.cluesRequired
  ) {

    setTimeout(() => {
      setUnlocked(true);
    }, 500);

  }

}, [foundClues]);

//   const discoverClue = (clue) => {

//     if (foundClues.includes(clue.id)) return;

//     const updated = [
//       ...foundClues,
//       clue.id
//     ];

//     setFoundClues(updated);

//     if (
//       updated.length >=
//       easterEggData.cluesRequired
//     ) {

//       setTimeout(() => {
//         setUnlocked(true);
//       }, 700);

//     }

//   };

  return (

    <main className="easter-page">

      <div className="easter-glow"/>

      <motion.section
        className="easter-container"
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
      >

        {!unlocked ? (

          <>

            <p className="easter-small-title">
              SOMETHING IS HIDDEN HERE
            </p>

            <h1>
              👀
            </h1>

            <h2>
              Can you find it, Lado?
            </h2>

            <p className="easter-description">
              Kuch clues website mein chhupe hue hain.
              <br />
              Sab clues discover karo.
            </p>

            <div className="clue-progress">

              {easterEggData.clues.map(clue => (

                <div
                  key={clue.id}
                  className={
                    foundClues.includes(clue.id)
                      ? "clue-dot found"
                      : "clue-dot"
                  }
                >
                  {foundClues.includes(clue.id)
                    ? "✓"
                    : "?"}
                </div>

              ))}

            </div>

            <p className="progress-text">

              {foundClues.length} /{" "}
              {easterEggData.cluesRequired} clues found

            </p>

            <div className="found-clues">

              <AnimatePresence>

                {foundClues.map(id => {

                  const clue =
                    easterEggData.clues.find(
                      item => item.id === id
                    );

                  return (

                    <motion.div
                      key={id}
                      className="found-clue"
                      initial={{
                        opacity: 0,
                        scale: .8
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1
                      }}
                    >

                      <span>
                        {clue.word}
                      </span>

                      <small>
                        {clue.hint}
                      </small>

                    </motion.div>

                  );

                })}

              </AnimatePresence>

            </div>

            <p className="easter-note">
              The clues aren't here yet...
              <br />
              <span>
                You have to discover them somewhere else.
              </span>
            </p>

          </>

        ) : (

          <motion.div
            className="easter-reward"
            initial={{
              opacity: 0,
              scale: .7
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
          >

            <div className="secret-symbol">
              ✦
            </div>

            <p className="secret-label">
              SECRET UNLOCKED
            </p>

            <h1>
              {easterEggData.reward.title}
            </h1>

            <p className="secret-message">
              {easterEggData.reward.message}
            </p>

            <div className="secret-note">

              <span>
                A little note from Bhaiya
              </span>

              <p>
                {easterEggData.reward.note}
              </p>

            </div>

          </motion.div>

        )}

      </motion.section>

    </main>

  );

}