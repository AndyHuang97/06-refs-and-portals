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

export default function ResultModal({ ref, result, targetTime }) {
    // detach the internal dialog ref from the outer components, expose API via useImperativeHandle
    // makes the components more resilient to changes in the internal implementation by exposing a standardized API
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(){ // arbitrary name
                dialog.current.showModal();
            }
        }
    });
    
    return (
      // not using open attribute because it does not show the dimmed background
      // <dialog className="result-modal" open>
      <dialog ref={dialog} className="result-modal">
        <h2> You {result}</h2>
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong>X seconds left</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
