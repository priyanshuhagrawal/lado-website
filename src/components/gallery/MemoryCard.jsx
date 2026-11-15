import { motion } from "framer-motion";

import PressedFlower from "./PressedFlower";
import HandwrittenNote from "./HandwrittenNote";

export default function MemoryCard({
  memory,
  onClick,
  rotate
}) {

  return (

    <motion.div

      className="memory-card"

      style={{
        rotate
      }}

      whileHover={{

        rotate: 0,

        scale: 1.04,

        y: -10

      }}

      transition={{
        duration: .35
      }}

      onClick={() => onClick(memory)}

    >

      <div className="tape"></div>

      <PressedFlower
        top="15px"
        left="15px"
        rotate="-15deg"
      />

      <img
        src={memory.image}
        alt={memory.title}
      />

      <div className="memory-body">

        <h3>{memory.title}</h3>

        <p>{memory.note}</p>

        <HandwrittenNote
          text="Click to open ❤️"
        />

      </div>

    </motion.div>

  );

}