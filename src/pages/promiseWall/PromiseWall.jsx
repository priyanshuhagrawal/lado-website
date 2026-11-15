import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import promiseWallData from "../../data/promiseWallData";
import "../../styles/promiseWall.css";

const STORAGE_KEY = "lado_promise_wall";

export default function PromiseWall() {

  const [promises, setPromises] = useState([]);
  const [newPromise, setNewPromise] = useState("");
  const [from, setFrom] = useState("Me");
  const [showForm, setShowForm] = useState(false);
  const [celebratingId, setCelebratingId] = useState(null);

  useEffect(() => {

    const saved = localStorage.getItem(
      STORAGE_KEY
    );

    if (saved) {

      setPromises(
        JSON.parse(saved)
      );

    } else {

      setPromises(
        promiseWallData
      );

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(promiseWallData)
      );

    }

  }, []);


  const savePromises = (updated) => {

    setPromises(updated);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

  };


  const addPromise = (e) => {

    e.preventDefault();

    const text = newPromise.trim();

    if (!text) return;


    const promise = {

      id: Date.now(),

      text,

      from,

      emoji:
        from === "Me"
          ? "🌻"
          : "✨",

      color:
        from === "Me"
          ? "yellow"
          : "purple",

      fulfilled: false

    };


    savePromises([
      promise,
      ...promises
    ]);


    setNewPromise("");

    setShowForm(false);

  };


  const toggleFulfilled = (id) => {

  const selectedPromise = promises.find(
    promise => promise.id === id
  );

  if (!selectedPromise) return;

  const isCurrentlyFulfilled =
    selectedPromise.fulfilled;

  const updated = promises.map(
    promise =>

      promise.id === id
        ? {
            ...promise,
            fulfilled:
              !promise.fulfilled
          }
        : promise
  );

  savePromises(updated);


  /*
    Celebration only when
    promise is being completed.
  */

  if (!isCurrentlyFulfilled) {

    setCelebratingId(id);

    setTimeout(() => {

      setCelebratingId(null);

    }, 1800);

  }

};


  return (

    <main className="promise-page">

      <div className="promise-background"/>


      <motion.section
        className="promise-header"

        initial={{
          opacity: 0,
          y: -30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}
      >

        <p className="promise-eyebrow">
          A LITTLE CORNER FOR US
        </p>

        <h1>
          Our Promise Wall
        </h1>

        <p>
          Kuch promises words se nahi...
          <br />
          dil se kiye jaate hain.
        </p>

      </motion.section>


      <div className="promise-actions">

        <motion.button
          className="add-promise-btn"

          whileHover={{
            scale: 1.04
          }}

          whileTap={{
            scale: .96
          }}

          onClick={() =>
            setShowForm(true)
          }
        >

          + Add a Promise

        </motion.button>

      </div>


      <AnimatePresence>

        {showForm && (

          <motion.div
            className="promise-form-overlay"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            exit={{
              opacity: 0
            }}
          >

            <motion.form
              className="promise-form"

              initial={{
                opacity: 0,
                scale: .9,
                y: 20
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                scale: .9
              }}

              onSubmit={addPromise}
            >

              <button
                type="button"
                className="close-form"
                onClick={() =>
                  setShowForm(false)
                }
              >
                ×
              </button>


              <h2>
                Make a Promise
              </h2>

              <p>
                Kuch aisa likho jo tum
                sach mein nibhana chaho.
              </p>


              <textarea
                value={newPromise}
                onChange={(e) =>
                  setNewPromise(
                    e.target.value
                  )
                }

                placeholder="I promise..."
                maxLength={180}
              />


              <div className="promise-from">

                <span>
                  This promise is from
                </span>

                <div>

                  <button
                    type="button"

                    className={
                      from === "Me"
                        ? "selected"
                        : ""
                    }

                    onClick={() =>
                      setFrom("Me")
                    }
                  >
                    Me
                  </button>

                  <button
                    type="button"

                    className={
                      from === "Megha"
                        ? "selected"
                        : ""
                    }

                    onClick={() =>
                      setFrom("Megha")
                    }
                  >
                    Megha
                  </button>

                  <button
                    type="button"

                    className={
                      from === "Both"
                        ? "selected"
                        : ""
                    }

                    onClick={() =>
                      setFrom("Both")
                    }
                  >
                    Both
                  </button>

                </div>

              </div>


              <button
                className="save-promise"
                type="submit"
              >

                Pin It To Our Wall ✨

              </button>

            </motion.form>

          </motion.div>

        )}

      </AnimatePresence>


      <section className="promise-wall">

        <AnimatePresence>

          {promises.map(
            (promise, index) => (

              <motion.article

                key={promise.id}

                className={`
                  promise-card
                  ${promise.color}
                  ${
                    promise.fulfilled
                      ? "fulfilled"
                      : ""
                  }
                `}

                initial={{
                  opacity: 0,
                  y: 30,
                  rotate:
                    index % 2 === 0
                      ? -2
                      : 2
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  rotate:
                    index % 2 === 0
                      ? -2
                      : 2
                }}

                transition={{
                  delay:
                    index * .07
                }}

                layout
              >

                <div className="promise-pin">
                  {promise.emoji}
                </div>


                <p className="promise-text">
                  "{promise.text}"
                </p>


                <div className="promise-footer">

                  <span>
                    — {promise.from}
                  </span>


                  <button
  className={
    promise.fulfilled
      ? "fulfilled-button"
      : ""
  }

  onClick={() =>
    toggleFulfilled(
      promise.id
    )
  }
>

  {promise.fulfilled
    ? "✓ Promise Kept"
    : "I Kept This Promise"
  }

</button>

                </div>


                {promise.fulfilled && (

                  <motion.div
                    className="fulfilled-stamp"

                    initial={{
                      scale: 0,
                      rotate: -20
                    }}

                    animate={{
                      scale: 1,
                      rotate: -8
                    }}
                  >

                    PROMISE KEPT

                  </motion.div>

                )}

                {celebratingId === promise.id && (

  <motion.div
    className="promise-celebration"
    initial={{
      opacity: 0,
      scale: .4
    }}
    animate={{
      opacity: 1,
      scale: 1
    }}
    exit={{
      opacity: 0
    }}
  >

    <span>✨</span>
    <span>🌻</span>
    <span>🫂</span>
    <span>🎉</span>
    <span>⭐</span>

  </motion.div>

)}

              </motion.article>

            )
          )}

        </AnimatePresence>

      </section>


      {promises.length === 0 && (

        <div className="empty-promises">

          <p>
            Abhi wall bilkul khaali hai...
          </p>

          <span>
            Pehla promise tum likho. ✨
          </span>

        </div>

      )}

    </main>

  );

}