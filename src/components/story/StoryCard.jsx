import { motion } from "framer-motion";

export default function StoryCard({ story }) {

    return (

        <motion.div
            className="story-card"
            initial={{opacity:0,y:60}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-60}}
            transition={{duration:.55}}
        >

            <img
                src={story.image}
                alt={story.title}
                className="story-image"
            />

            <div className="story-content">

                <h2>{story.title}</h2>

                <h4>{story.subtitle}</h4>

                <p>{story.text}</p>

            </div>

        </motion.div>

    );

}