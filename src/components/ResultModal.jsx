import { forwardRef, useImperativeHandle, useRef } from "react";

// const ResultModal =  forwardRef(function ResultModal({ result, targetTime }, ref) {
//   return (
//     // not using open attribute because it does not show the dimmed background
//     // <dialog className="result-modal" open>
//     <dialog ref={ref} className="result-modal">
//       <h2> You {result}</h2>
//       <p>
//         The target time was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>
//         You stopped the timer with <strong>X seconds left</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });
// export default ResultModal;

export default function ResultModal({
  ref,
  onReset,
  targetTime,
  remainingTime,
}) {
  // detach the internal dialog ref from the outer components, expose API via useImperativeHandle
  // makes the components more resilient to changes in the internal implementation by exposing a standardized API
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        // arbitrary name
        dialog.current.showModal();
      },
    };
  });

  return (
    // not using open attribute because it does not show the dimmed background
    // <dialog className="result-modal" open>
    // add onClose to handle ESC key exit
    <dialog ref={dialog} className="result-modal" onClose={onReset} >
      {userLost && <h2> You lost</h2>}
      {!userLost && <h2> Your score: {score} </h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
