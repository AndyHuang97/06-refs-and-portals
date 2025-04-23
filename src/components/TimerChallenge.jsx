export default function TimerChallenge({ title, targetTime }) {
  return (
    <section class="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Timer is running ... / Timer inactive</p>
    </section>
  );
}
