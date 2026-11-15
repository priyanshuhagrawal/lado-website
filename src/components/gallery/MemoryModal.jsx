import { AnimatePresence, motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function MemoryModal({ memory, close }) {
  return (
    <AnimatePresence>
      <motion.div
        className="memory-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
      >
        <motion.div
          className="memory-modal"
          initial={{
            opacity: 0,
            scale: .8,
            y: 50
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: .85,
            y: 40
          }}
          transition={{
            duration: .45
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-modal"
            onClick={close}
          >
            ✕
          </button>

          <div className="modal-image">

            <div className="modal-tape left"></div>

            <div className="modal-tape right"></div>

            <img
              src={memory.image}
              alt={memory.title}
            />

          </div>

          <div className="modal-content">

            <h2>{memory.title}</h2>

            <div className="divider"></div>

            <p>{memory.note}</p>

            <div className="signature">

  <FaHeart />

  <span>

    From your Bhaiya

  </span>

</div>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}