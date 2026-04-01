import { useState, useRef, useEffect } from "react";
import type { GoalItem } from "../data/mockData";
import { FlowerProgress } from "./FlowerProgress";

interface GoalsPanelProps {
  goals: GoalItem[];
}

const GOAL_STAR_FILTERS = [
  "hue-rotate(330deg) saturate(1.5) brightness(1.05)",
  "hue-rotate(60deg) saturate(1.8) brightness(1.1)",
  "hue-rotate(100deg) saturate(1.6) brightness(1.05)",
];

function OdometerDigit({ value, max }: { value: number; max: number }) {
  const digits = Array.from({ length: max + 1 }, (_, i) => i);
  const digitHeight = 16;

  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ height: digitHeight, width: "0.65em" }}
    >
      <span
        className="flex flex-col items-center"
        style={{
          transform: `translateY(-${value * digitHeight}px)`,
          transition: "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {digits.map((d) => (
          <span key={d} style={{ height: digitHeight, lineHeight: `${digitHeight}px` }}>
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

export function GoalsPanel({ goals: initialGoals }: GoalsPanelProps) {
  const [goals, setGoals] = useState(initialGoals.map((g) => ({ ...g })));
  const [pulseKey, setPulseKey] = useState(0);
  const [flashIndex, setFlashIndex] = useState<number | null>(null);
  const [bounceIndex, setBounceIndex] = useState<number | null>(null);
  const [celebrating, setCelebrating] = useState(false);
  const flashTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const bounceTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const celebrationTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const prevCompleted = useRef(0);

  const completedCount = goals.filter((g) => g.completed).length;

  useEffect(() => {
    if (completedCount === goals.length && prevCompleted.current < goals.length) {
      setCelebrating(true);
      clearTimeout(celebrationTimeout.current);
      celebrationTimeout.current = setTimeout(() => setCelebrating(false), 1000);
    }
    prevCompleted.current = completedCount;
  }, [completedCount, goals.length]);

  function toggle(index: number) {
    const wasCompleted = goals[index].completed;
    setGoals((prev) =>
      prev.map((g, i) => (i === index ? { ...g, completed: !g.completed } : g))
    );

    if (!wasCompleted) {
      setPulseKey((k) => k + 1);

      setFlashIndex(index);
      clearTimeout(flashTimeout.current);
      flashTimeout.current = setTimeout(() => setFlashIndex(null), 600);

      setBounceIndex(index);
      clearTimeout(bounceTimeout.current);
      bounceTimeout.current = setTimeout(() => setBounceIndex(null), 350);
    }
  }

  return (
    <div className="flex flex-col gap-12 h-full">
      {/* Flower illustration on peach background */}
      <div
        className={`flex items-center justify-center rounded-[20px] w-full overflow-hidden ${celebrating ? "celebration" : ""}`}
        style={{ backgroundColor: "#fff4e8", minHeight: 156 }}
      >
        <div key={pulseKey} className={`flower-sway ${!celebrating ? "flower-pulse" : ""}`}>
          <FlowerProgress completedCount={completedCount} />
        </div>
      </div>

      {/* Progress counter bridge (odometer) */}
      <p className="cds-body-tertiary text-grey-600 text-center">
        <OdometerDigit value={completedCount} max={goals.length} />/{goals.length} complete
      </p>

      {/* Goals list */}
      <div className="flex flex-col gap-8">
        <h3 className="cds-action-secondary text-grey-975">Today's goals</h3>

        <ul className="flex flex-col">
          {goals.map((goal, i) => (
            <li
              key={i}
              className={`goal-enter flex items-center gap-8 cursor-pointer select-none rounded-8 py-8 pr-8 transition-colors duration-fast hover:bg-white ${flashIndex === i ? "goal-flash" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => toggle(i)}
              role="checkbox"
              aria-checked={goal.completed}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  toggle(i);
                }
              }}
            >
              <img
                src={goal.completed ? "/star-complete.svg" : "/star.svg"}
                alt=""
                className={`flex-shrink-0 transition-all duration-normal ${bounceIndex === i ? "star-bounce" : ""}`}
                style={{
                  width: 20,
                  height: 20,
                  filter: GOAL_STAR_FILTERS[i] ?? undefined,
                }}
              />
              <span
                className={`strike-animate cds-body-tertiary ${goal.completed ? "text-grey-400 struck" : "text-grey-600"}`}
              >
                {goal.boldText ? (
                  <>
                    {goal.label}
                    <span className={goal.completed ? "" : "font-bold text-grey-975"}>
                      {goal.boldText}
                    </span>
                    {goal.progress &&
                      ` · ${goal.progress.current}/${goal.progress.total}`}
                  </>
                ) : (
                  goal.label
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
