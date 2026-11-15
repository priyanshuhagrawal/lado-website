import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter({ text, onComplete }) {
  return (
    <Typewriter
      words={[text]}
      loop={1}
      cursor={false}
      typeSpeed={32}
      deleteSpeed={0}
      delaySpeed={1000}
      onLoopDone={onComplete}
    />
  );
}