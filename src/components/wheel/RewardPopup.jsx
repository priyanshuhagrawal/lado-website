import { motion, AnimatePresence } from "framer-motion";
import RewardEffect from "../effects/RewardEffect";
export default function RewardPopup({
    

    reward,

    onClose,

    onSpinAgain,
    onBack


}) {

    return (
        <><RewardEffect type={reward?.effect} /><AnimatePresence>

            {reward && (

                <><div className="reward-category">
                    ✨ {reward.category}
                </div><h2 className="reward-title">
                        {reward.title}
                    </h2><p className="reward-message">
                        {reward.message}
                    </p><div className="bhaiya-note">
                        <h4>💌 Bhaiya's Note</h4>
                        <p>{reward.note}</p>
                    </div><motion.div

                        className="reward-overlay"

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                    >

                        <motion.div
initial={{opacity:0,scale:.5,y:120}}
animate={{opacity:1,scale:1,y:0}}
exit={{opacity:0,scale:.6}}
transition={{
duration:.6,
type:"spring",
bounce:.45
}}
className="reward-popup"
>

                        {/* <motion.div

                            className="reward-popup"

                            initial={{
                                scale: .65,

                                opacity: 0,

                                y: 40
                            }}

                            animate={{
                                scale: 1,

                                opacity: 1,

                                y: 0
                            }}

                            exit={{
                                scale: .8,

                                opacity: 0
                            }}

                            transition={{
                                duration: .45
                            }}

                        > */}

                            <div className="reward-icon">

                                🎁

                            </div>

                            <h2>

                                {reward.title}

                            </h2>

                            <p>

                                {reward.message}

                            </p>

                            <div className="bhaiya-note">

                                <div className="note-title">

                                    💌 Bhaiya's Note

                                </div>

                                <p>

                                    {reward.note ||

                                        "Kabhi kabhi mujhe bas ye dekhna hota hai ki meri Lado has rahi hai ya nahi. ❤️"}

                                </p>

                            </div>

                            <div className="reward-buttons">

                                <div className="reward-buttons">

<button
className="spin-again-btn"
onClick={onSpinAgain}
>

🎡 Spin Again

</button>

<button
className="memory-btn"
onClick={onBack}
>

🏡 Memory Hub

</button>
<button

                                    className="reward-btn"

                                    onClick={onClose}

                                >

                                    ❤️ Close

                                </button>

</div>

                            </div>

                        </motion.div>

                    </motion.div></>

            )}

        </AnimatePresence></>

    );

}