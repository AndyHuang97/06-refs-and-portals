export default function ResultModal({ result, tartgetTime }) {
  return (
    // <dialog className="result-modal" open>
    <dialog className="result-modal">
      <h2> You {result}</h2>
      <p>
        The target time was <strong>{tartgetTime} seconds.</strong>
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
