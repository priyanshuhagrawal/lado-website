import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import futureBucketData from "../../data/futureBucketData";
import "../../styles/futureBucket.css";
import CelebrationEffect from "../../components/effects/CelebrationEffect";
const COMPLETION_KEY = "meghaCompletedDreams";
const DATE_KEY = "meghaDreamCompletionDates";

const STORAGE_KEY = "meghaFutureBucketList";

export default function FutureBucketList() {
  const [customDreams, setCustomDreams] = useState([]);
const [completed, setCompleted] = useState({});
const [completionDates, setCompletionDates] = useState({});
const [selectedDream, setSelectedDream] = useState(null);
const [celebrating, setCelebrating] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDream, setNewDream] = useState({
    title: "",
    message: "",
    category: "my-dream"
  });
const [filter, setFilter] = useState("all");
const [showStats, setShowStats] = useState(true);
  useEffect(() => {
  const savedDreams = localStorage.getItem(STORAGE_KEY);
  const savedCompleted = localStorage.getItem(COMPLETION_KEY);
  const savedDates = localStorage.getItem(DATE_KEY);

  if (savedDreams) {
    setCustomDreams(JSON.parse(savedDreams));
  }

  if (savedCompleted) {
    setCompleted(JSON.parse(savedCompleted));
  }

  if (savedDates) {
    setCompletionDates(JSON.parse(savedDates));
  }
}, []);

  const allDreams = useMemo(() => {
    return [...futureBucketData, ...customDreams];
  }, [customDreams]);

  const completedCount = allDreams.filter(
    dream => completed[dream.id]
  ).length;

  const progress =
    allDreams.length === 0
      ? 0
      : Math.round((completedCount / allDreams.length) * 100);

  const toggleComplete = id => {
  const isAlreadyCompleted = completed[id];

  const updatedCompleted = {
    ...completed,
    [id]: !isAlreadyCompleted
  };

  const updatedDates = {
    ...completionDates
  };

  if (!isAlreadyCompleted) {
    updatedDates[id] = new Date().toISOString();

    setCelebrating(true);

    setTimeout(() => {
      setCelebrating(false);
    }, 3500);
  } else {
    delete updatedDates[id];
  }

  setCompleted(updatedCompleted);
  setCompletionDates(updatedDates);

  localStorage.setItem(
    COMPLETION_KEY,
    JSON.stringify(updatedCompleted)
  );

  localStorage.setItem(
    DATE_KEY,
    JSON.stringify(updatedDates)
  );
};

const formatDate = date => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};

  const addDream = event => {
    event.preventDefault();

    if (!newDream.title.trim()) return;

    const dream = {
      id: `megha-${Date.now()}`,
      title: newDream.title.trim(),
      message:
        newDream.message.trim() ||
        "Ek aur dream jo Megha apni life mein complete karna chahti hai.",
      icon: "✨",
      category: newDream.category,
      type: "megha-added",
      addedByMegha: true
    };

    const updatedDreams = [...customDreams, dream];

    setCustomDreams(updatedDreams);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedDreams)
    );

    setNewDream({
      title: "",
      message: "",
      category: "my-dream"
    });

    setShowAddForm(false);
  };

  return (
    <>
    {celebrating && (
      <CelebrationEffect
        type="random"
        count={45}
        duration={3500}
      />
    )}

    <main className="future-page">

      <div className="future-glow"/>

      <motion.section
        className="future-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <div className="future-star">✨</div>

        <h1>Megha's Future</h1>

        <p>
          Abhi bahut kuch baaki hai...
        </p>

        <p className="future-small-text">
          Kuch sapne tumhare hain,
          kuch jo tumne khud choose kiye hain. 🌷
        </p>

      </motion.section>

      <section className="future-progress">

        <div className="progress-info">

          <span>
            {completedCount} / {allDreams.length} Dreams
          </span>

          <strong>{progress}%</strong>

        </div>

        <div className="progress-track">

          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />

        </div>

        <p>
          Har completed dream ke saath ek aur kahani banegi. ✨
        </p>

      </section>

      <section className="future-actions">

        <button
          className="add-dream-btn"
          onClick={() => setShowAddForm(true)}
        >
          ✨ Add My Dream
        </button>

      </section>

      <section className="future-grid">

        {allDreams.map((dream, index) => {

          const isCompleted = completed[dream.id];

          return (

            <motion.article
              key={dream.id}
              className={`dream-card ${
                isCompleted ? "dream-completed" : ""
              }`}
              initial={{
                opacity: 0,
                y: 35
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.04
              }}
              whileHover={{
                y: -7,
                scale: 1.02
              }}
              onClick={() => setSelectedDream(dream)}
            >

              <div className="dream-icon">
                {isCompleted ? "✓" : dream.icon}
              </div>

              <div className="dream-content">

                <span className="dream-category">
                  {dream.addedByMegha
                    ? "MEGHA'S DREAM"
                    : dream.category.toUpperCase()}
                </span>

                <h2>{dream.title}</h2>

                <p>{dream.message}</p>

              </div>

              <div className="dream-status">

  {isCompleted ? (
    <>
      <span>✓ Dream Unlocked ✨</span>

      <small>
        Completed on {formatDate(completionDates[dream.id])}
      </small>
    </>
  ) : (
    "Not Yet"
  )}

</div>

            </motion.article>

          );

        })}

      </section>

      <AnimatePresence>

        {showAddForm && (

          <motion.div
            className="dream-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAddForm(false)}
          >

            <motion.div
              className="dream-modal"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              onClick={e => e.stopPropagation()}
            >

              <button
                className="modal-close"
                onClick={() => setShowAddForm(false)}
              >
                ×
              </button>

              <div className="modal-icon">
                ✨
              </div>

              <h2>Add Your Dream</h2>

              <p>
                Ye list sirf Bhaiya ki nahi hai...
                tum bhi apne dreams add kar sakti ho. 💫
              </p>

              <form onSubmit={addDream}>

                <label>
                  Dream ka naam
                </label>

                <input
                  type="text"
                  placeholder="Jaise: Learn Photography"
                  value={newDream.title}
                  onChange={e =>
                    setNewDream({
                      ...newDream,
                      title: e.target.value
                    })
                  }
                  autoFocus
                />

                <label>
                  Thoda sa detail
                </label>

                <textarea
                  placeholder="Ye dream kyun important hai..."
                  value={newDream.message}
                  onChange={e =>
                    setNewDream({
                      ...newDream,
                      message: e.target.value
                    })
                  }
                />

                <label>
                  Category
                </label>

                <select
                  value={newDream.category}
                  onChange={e =>
                    setNewDream({
                      ...newDream,
                      category: e.target.value
                    })
                  }
                >
                  <option value="my-dream">
                    My Dream
                  </option>

                  <option value="travel">
                    Travel
                  </option>

                  <option value="hobby">
                    Hobby
                  </option>

                  <option value="family">
                    Family
                  </option>

                  <option value="life">
                    Life Goal
                  </option>

                </select>

                <button
                  type="submit"
                  className="save-dream-btn"
                >
                  Add To My Future ✨
                </button>

              </form>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <AnimatePresence>

        {selectedDream && (

          <motion.div
            className="dream-detail-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDream(null)}
          >

            <motion.div
              className="dream-detail"
              initial={{
                opacity: 0,
                scale: 0.85
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.85
              }}
              onClick={e => e.stopPropagation()}
            >

              <button
                className="modal-close"
                onClick={() => setSelectedDream(null)}
              >
                ×
              </button>

              <div className="detail-icon">
                {completed[selectedDream.id]
                  ? "✨"
                  : selectedDream.icon}
              </div>

              <span className="detail-category">
                {selectedDream.addedByMegha
                  ? "MEGHA'S DREAM"
                  : selectedDream.category.toUpperCase()}
              </span>

              <h2>
                {selectedDream.title}
              </h2>

              <p>
  {selectedDream.message}
</p>

{completed[selectedDream.id] && (
  <div className="completion-memory">
    ✨ Dream completed on{" "}
    <strong>
      {formatDate(completionDates[selectedDream.id])}
    </strong>
  </div>
)}

<button
  className={`complete-btn ${
    completed[selectedDream.id]
      ? "completed"
      : ""
  }`}
                onClick={() => {
                  toggleComplete(selectedDream.id);
                }}
              >
                {completed[selectedDream.id]
                  ? "✓ Dream Completed"
                  : "I Did It! ✨"}
              </button>

              {selectedDream.addedByMegha && (
                <small className="added-note">
                  Added by Megha 💫
                </small>
              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
    </>
  );
}