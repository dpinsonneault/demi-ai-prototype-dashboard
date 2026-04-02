import { useState, useEffect } from "react";
import type { GoalItem } from "../data/mockData";
import { FlowerProgress } from "./FlowerProgress";

interface GoalsPanelProps {
  goals: GoalItem[];
  flowerRef?: React.RefObject<HTMLDivElement | null>;
  heroCompleteIndex?: number;
  heroCompleted?: boolean;
}

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

export function GoalsPanel({ goals: initialGoals, flowerRef, heroCompleteIndex, heroCompleted }: GoalsPanelProps) {
  const [goals, setGoals] = useState(() =>
    initialGoals.map((g) => ({ ...g }))
  );

  useEffect(() => {
    if (heroCompleted && heroCompleteIndex !== undefined) {
      setGoals((prev) =>
        prev.map((g, i) => (i === heroCompleteIndex ? { ...g, completed: true } : g))
      );
    }
  }, [heroCompleted, heroCompleteIndex]);

  const completedCount = goals.filter((g) => g.completed).length;

  return (
    <div className="flex flex-col gap-12 h-full">
      {/* Flower illustration on peach background */}
      <div
        ref={flowerRef}
        className="flex items-center justify-center rounded-[20px] w-full overflow-hidden"
        style={{ backgroundColor: "#fff4e8", minHeight: 156 }}
      >
        <div className="flower-sway flower-pulse">
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
              className="goal-enter flex items-center gap-8 select-none rounded-8 py-8 pr-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span
                className={`material-symbols-rounded flex-shrink-0 transition-all duration-normal ${goal.completed ? "text-blue-700" : "text-grey-400"}`}
                style={{
                  fontSize: 20,
                  fontVariationSettings: goal.completed
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {goal.completed ? "check_circle" : "circle"}
              </span>
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
