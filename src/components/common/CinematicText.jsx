import { AnimatePresence, motion } from "framer-motion";

export default function CinematicText({ text }) {

    return (

        <AnimatePresence mode="wait">

            <motion.h1

                key={text}

                className="cinematic-text"

                initial={{
                    opacity:0,
                    scale:.95,
                    filter:"blur(8px)"
                }}

                animate={{
                    opacity:1,
                    scale:1,
                    filter:"blur(0px)"
                }}

                exit={{
                    opacity:0,
                    scale:1.05,
                    filter:"blur(10px)"
                }}

                transition={{
                    duration:1
                }}

            >

                {text}

            </motion.h1>

        </AnimatePresence>

    );

}