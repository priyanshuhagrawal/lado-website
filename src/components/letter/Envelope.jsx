import { motion } from "framer-motion";

import "./Envelope.css";

export default function Envelope({ onOpen }) {

  return (

    <motion.div
      className="envelope-wrapper"

      initial={{ opacity: 0, scale: .8 }}

      animate={{ opacity: 1, scale: 1 }}

      transition={{ duration: 1 }}
    >

      <motion.div

        className="envelope"

        whileHover={{
          scale: 1.03,
          rotate: -1
        }}

        whileTap={{
          scale: .98
        }}

        onClick={onOpen}

      >

        <div className="flap" />

        <div className="body">

          <h2>For My Lado ❤️</h2>

          <p>Tap to Open</p>

        </div>

      </motion.div>

    </motion.div>

  );

}