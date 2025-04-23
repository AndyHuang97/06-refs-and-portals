export default function ResultModal({ ref, result, targetTime }) {
  return (
    // not using open attribute because it does not show the dimmed background
    // <dialog className="result-modal" open>
    <dialog ref={ref} className="result-modal">
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
