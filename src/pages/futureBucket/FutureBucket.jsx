import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaCheck, FaLock, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import futureBucketData from "../../data/futureBucketData";
import "../../styles/futureBucket.css";

export default function FutureBucket() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [completed, setCompleted] = useState([]);

  const categories = ["All", "Places", "Experiences", "Dreams"];

  const filteredItems =
    activeCategory === "All"
      ? futureBucketData
      : futureBucketData.filter(
          item => item.category === activeCategory
        );

  const toggleComplete = id => {
    setCompleted(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const completedCount = completed.length;
  const progress = Math.round(
    (completedCount / futureBucketData.length) * 100
  );

  return (
    <main className="future-page">
      <div className="future-background" />

      <button
        className="future-back"
        onClick={() => navigate("/memory-hub")}
      >
        <FaArrowLeft />
        Back to Memories
      </button>

      <motion.section
        className="future-header"
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="future-header-icon">
          🪣
        </div>

        <h1>Megha's Future Bucket List</h1>

        <p>
          Kuch sapne... kuch jagah...
          aur kuch aise moments jo abhi sirf imagine kiye hain.
        </p>

        <p className="future-small-note">
          Ek din in sabke saamne ✔️ lagaayenge.
        </p>
      </motion.section>

      <motion.section
        className="future-progress"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="progress-top">
          <span>
            <FaStar /> Dreams Completed
          </span>

          <strong>
            {completedCount}/{futureBucketData.length}
          </strong>
        </div>

        <div className="progress-track">
          <motion.div
            className="progress-fill"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <span className="progress-text">
          {progress === 0
            ? "Abhi toh journey shuru hui hai ✨"
            : progress === 100
            ? "Sab dreams complete! 🥹"
            : `${progress}% dreams unlocked`}
        </span>
      </motion.section>

      <div className="future-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "future-tab active"
                : "future-tab"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="future-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            const isCompleted = completed.includes(item.id);

            return (
              <motion.article
                key={item.id}
                className={
                  isCompleted
                    ? "future-card completed"
                    : "future-card"
                }
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
              >
                <div
                  className="future-card-icon"
                  style={{ background: item.color }}
                >
                  <Icon />
                </div>

                <div className="future-card-content">
                  <span className="future-category">
                    {item.category}
                  </span>

                  <h2>{item.title}</h2>

                  <p>{item.note}</p>
                </div>

                <button
                  className={
                    isCompleted
                      ? "complete-button checked"
                      : "complete-button"
                  }
                  onClick={() => toggleComplete(item.id)}
                >
                  {isCompleted ? (
                    <>
                      <FaCheck />
                      Done
                    </>
                  ) : (
                    <>
                      <FaLock />
                      Mark Done
                    </>
                  )}
                </button>

                {isCompleted && (
                  <div className="completed-label">
                    ✨ Dream Unlocked
                  </div>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>

      <motion.div
        className="future-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span>🌱</span>

        <p>
          Sapne sirf list mein likhne ke liye nahi hote...
          <br />
          unhe ek din jeene ke liye rakha jaata hai.
        </p>

        <strong>
          — Bhaiya
        </strong>
      </motion.div>
    </main>
  );
}