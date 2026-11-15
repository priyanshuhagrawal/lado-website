import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedText({text}){

    return(

        <AnimatePresence mode="wait">

            <motion.h1

            key={text}

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
                y:-30
            }}

            transition={{
                duration:.9
            }}

            className="animated-text"

            >

                {text}

            </motion.h1>

        </AnimatePresence>

    )

}