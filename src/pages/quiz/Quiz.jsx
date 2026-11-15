import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quizData from "../../data/quizData";
import "../../styles/quiz.css";
import { useNavigate } from "react-router-dom";

export default function Quiz() {

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const navigate = useNavigate();

    function selectAnswer(option) {

        if (option === quizData[current].answer) {
            setScore(prev => prev + 1);
        }

        if (current === quizData.length - 1) {

            setFinished(true);

        } else {

            setCurrent(prev => prev + 1);

        }

    }

    if (finished) {

        let message = "";

        if (score === quizData.length) {

            message =
                "Mujhe pata tha ❤️\nMeri Lado mujhe sabse achhe se jaanti hai.";

        } else if (score >= 8) {

            message =
                "Bahut badhiya 😄❤️\nWaise kuch answers me cheating ki smell aa rahi hai 😂";

        } else if (score >= 5) {

            message =
                "Achha score 😄\nAbhi aur training ki zarurat hai Madam Doctor.";

        } else {

            message =
                "Itna kam score? 😭\nLagta hai dobara poori website dekhni padegi 😂";

        }

        return (

            <main className="quiz-page">

                <motion.div

                    className="quiz-result"

                    initial={{ opacity: 0, scale: .8 }}

                    animate={{ opacity: 1, scale: 1 }}

                >

                    <h1>Quiz Complete ❤️</h1>

                    <h2>

                        {score} / {quizData.length}

                    </h2>

                    <p>

                        {message}

                    </p>

                    {/* <button

                        className="quiz-btn"

                        onClick={() => {

                            setCurrent(0);
                            setScore(0);
                            setFinished(false);

                        }}

                    >

                        Play Again ❤️

                    </button> */}
                    <button

className="quiz-btn"

onClick={()=>
navigate("/memory-hub")
}

>

Back To Memory Hub ❤️

</button>

                </motion.div>

            </main>

        );

    }

    return (

        <main className="quiz-page">

            <motion.div

                className="quiz-card"

                key={current}

                initial={{
                    opacity: 0,
                    y: 30
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

            >

                <span className="question-count">

                    Question {current + 1} / {quizData.length}

                </span>

                <h1>

                    How Well Do You Know Your Bhaiya? ❤️

                </h1>

                <p className="quiz-question">

                    {quizData[current].question}

                </p>

                <div className="options">

                    {quizData[current].options.map(option => (

                        <button

                            key={option}

                            className="option"

                            onClick={() => selectAnswer(option)}

                        >

                            {option}

                        </button>

                    ))}

                </div>

            </motion.div>

        </main>

    );

}