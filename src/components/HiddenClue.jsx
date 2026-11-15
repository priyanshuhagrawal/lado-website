import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/hiddenClue.css";

const STORAGE_KEY = "lado_easter_egg_clues";

export default function HiddenClue({
  clueId,
  className = ""
}) {

  const [found, setFound] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {

    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    if (saved.includes(clueId)) {
      setFound(true);
    }

  }, [clueId]);

  const discover = (event) => {

    event.stopPropagation();

    if (found) {
      setShowHint(prev => !prev);
      return;
    }

    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    if (!saved.includes(clueId)) {

      const updated = [
        ...saved,
        clueId
      ];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );
    }

    setFound(true);
    setShowHint(true);

    window.dispatchEvent(
      new Event("easterEggClueFound")
    );

  };

  return (

    <div
      className={`hidden-clue-wrapper ${className}`}
    >

      <motion.button
        className={`hidden-clue ${
          found ? "found" : ""
        }`}
        onClick={discover}
        whileHover={{
          scale: 1.15
        }}
        whileTap={{
          scale: .9
        }}
        aria-label="Something hidden"
      >

        {found ? "✦" : "·"}

      </motion.button>

      <AnimatePresence>

        {showHint && (

          <motion.div
            className="hidden-clue-popup"
            initial={{
              opacity: 0,
              y: 5,
              scale: .9
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: 5,
              scale: .9
            }}
          >

            {found
              ? "You found something... 👀"
              : "Hmm... nothing here."
            }

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );
}