import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

//let timer;
// This is a global variable that will be used to store the timer ID returned by setTimeout.
// This is not a good practice, as it can lead to unexpected behavior if multiple timers are created.
// It's better to use a local variable inside the component or use a ref to store the timer ID.
// the timer pointer will be overwritten every time the timer is started.
const INTERVAL_STEP = 10; // milliseconds

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); // the ref hook is component instance-specific
  // unlike variables, the ref will not be reset when the component re-renders.
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current); // stop the timer
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000); // reset the timer
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(
        (prevTimeRemaining) => prevTimeRemaining - INTERVAL_STEP
      );
    }, INTERVAL_STEP);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current); // does not trigger a re-render
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
