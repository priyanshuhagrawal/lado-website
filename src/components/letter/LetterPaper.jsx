import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TypeWriter from "./TypeWriter";
import letterContent from "../../data/letterContent";


export default function LetterPaper() {

    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    return (

        <motion.div
            className="letter-paper"
            initial={{ opacity: 0, y: 80, scale: .95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .8 }}
        >

            <div className="paper-content">

                {letterContent[page].title && (
                    <h1>{letterContent[page].title}</h1>
                )}

                <div className="letter-text">

                    <TypeWriter
                        key={page}
                        text={letterContent[page].text}
                    />

                </div>

            </div>

            <div className="letter-footer">

                {page > 0 && (

                    <button
                        className="secondary-btn"
                        onClick={() => setPage(page - 1)}
                    >
                        ← Previous
                    </button>

                )}

                {page < letterContent.length - 1 ? (

                    <button
                        className="primary-btn"
                        onClick={() => setPage(page + 1)}
                    >
                        Continue →
                    </button>

                ) : (

                    <button
                        className="intro-btn"
                         onClick={() => {

                     navigate("/memory-hub");

    }}
                    >
                        Continue to memories ❤️
                    
                    </button>

                )}

            </div>

        </motion.div>

    );

}