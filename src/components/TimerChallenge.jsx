import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

//let timer;
// This is a global variable that will be used to store the timer ID returned by setTimeout.
// This is not a good practice, as it can lead to unexpected behavior if multiple timers are created.
// It's better to use a local variable inside the component or use a ref to store the timer ID.
// the timer pointer will be overwritten every time the timer is started.

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); // the ref hook is component instance-specific
  // unlike variables, the ref will not be reset when the component re-renders.

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current); // does not trigger a re-render
  }

  return (
    <>
      {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
      <section class="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
