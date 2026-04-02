import { useState, useEffect, useRef, useCallback } from "react";
import { useAnimate } from "framer-motion";
import { FlowerProgress } from "./FlowerProgress";
import type { GoalItem } from "../data/mockData";

interface HeroMomentProps {
  goal: GoalItem;
  flowerTargetRef: React.RefObject<HTMLDivElement | null>;
  onComplete: () => void;
}

const INITIAL_DELAY_MS = 1000;

export function HeroMoment({ goal, flowerTargetRef, onComplete }: HeroMomentProps) {
  const [scope, animate] = useAnimate();
  const [flowerCount, setFlowerCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const cancelledRef = useRef(false);
  const flowerRef = useRef<HTMLDivElement>(null);

  const skip = useCallback(() => {
    if (cancelledRef.current) return;
    cancelledRef.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      runTimeline();
    }, INITIAL_DELAY_MS);

    return () => clearTimeout(delayTimer);
  }, []);

  async function runTimeline() {
    if (cancelledRef.current) return;

    try {
      // 1. Backdrop dims in
      await animate(
        "#hero-backdrop",
        { opacity: [0, 1] },
        { duration: 0.3, ease: "easeOut" }
      );
      if (cancelledRef.current) return;

      // 2. Flower scales up to center
      await animate(
        "#hero-flower",
        { scale: [0.8, 1.5], opacity: [0, 1] },
        { type: "spring", damping: 12, stiffness: 100 }
      );
      if (cancelledRef.current) return;

      // 3. Goal text slides in (unchecked state)
      await animate(
        "#hero-goal",
        { y: [20, 0], opacity: [0, 1] },
        { duration: 0.35, ease: "easeOut" }
      );
      if (cancelledRef.current) return;

      // Brief pause so user sees the unchecked state
      await new Promise((r) => setTimeout(r, 300));
      if (cancelledRef.current) return;

      // 4. Swap to checked icon, then pop with spring overshoot
      setChecked(true);
      await new Promise((r) => setTimeout(r, 50));
      await animate(
        "#hero-check",
        { scale: [0.6, 1.35, 0.9, 1] },
        { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
      );
      if (cancelledRef.current) return;

      // 5. Strikethrough draws across
      await new Promise((r) => requestAnimationFrame(r));
      await animate(
        "#hero-strike",
        { transform: ["scaleX(0)", "scaleX(1)"] },
        { duration: 0.2, ease: "linear" }
      );
      if (cancelledRef.current) return;

      // 6. Flower petals fill with color (React-driven CSS transition)
      setFlowerCount(1);
      await new Promise((r) => setTimeout(r, 400));
      if (cancelledRef.current) return;

      // 7. Brief pause to admire
      await new Promise((r) => setTimeout(r, 150));
      if (cancelledRef.current) return;

      // 8. FLIP flower to resting position
      const target = flowerTargetRef.current;
      const source = flowerRef.current;
      if (target && source) {
        const tRect = target.getBoundingClientRect();
        const sRect = source.getBoundingClientRect();
        const scale = Math.min(tRect.width / sRect.width, tRect.height / sRect.height);
        const dx = tRect.left + tRect.width / 2 - (sRect.left + sRect.width / 2);
        const dy = tRect.top + tRect.height / 2 - (sRect.top + sRect.height / 2);

        // Hide goal text during FLIP
        animate("#hero-goal", { opacity: 0 }, { duration: 0.15, ease: "easeIn" });

        await animate(
          "#hero-flower",
          { x: dx, y: dy, scale: scale },
          { duration: 0.45, ease: "easeOut" }
        );
      }
      if (cancelledRef.current) return;

      // 9. Backdrop fades out
      await animate(
        "#hero-backdrop",
        { opacity: 0 },
        { duration: 0.3, ease: "easeIn" }
      );

      // Done
      if (!cancelledRef.current) {
        onComplete();
      }
    } catch {
      // Animation cancelled (skip was called)
    }
  }

  return (
    <div ref={scope} className="fixed inset-0 z-[100]" onClick={skip}>
      {/* Backdrop overlay */}
      <div
        id="hero-backdrop"
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(6px)",
          opacity: 0,
        }}
      />

      {/* Content container (centered) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Flower */}
        <div id="hero-flower" ref={flowerRef} style={{ opacity: 0, scale: 0.8 }}>
          <FlowerProgress completedCount={flowerCount} />
        </div>

        {/* Goal text row */}
        <div
          id="hero-goal"
          className="mt-32 flex items-center gap-12"
          style={{ opacity: 0 }}
        >
          {/* Checkbox icon — starts as unchecked circle, swaps to filled check */}
          <span
            id="hero-check"
            className={`material-symbols-rounded flex-shrink-0 transition-colors duration-fast ${checked ? "text-blue-700" : "text-white/40"}`}
            style={{
              fontSize: 24,
              fontVariationSettings: checked
                ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }}
          >
            {checked ? "check_circle" : "circle"}
          </span>

          {/* Goal label + strikethrough */}
          <span className={`cds-body-primary relative transition-colors duration-fast ${checked ? "text-white/50" : "text-white/90"}`}>
            {goal.boldText ? (
              <>
                {goal.label}
                <span className={`transition-colors duration-fast ${checked ? "text-white/50" : "text-white"}`}>{goal.boldText}</span>
                {goal.progress && ` · ${goal.progress.current}/${goal.progress.total}`}
              </>
            ) : (
              goal.label
            )}
            {/* Strikethrough bar — hidden until animation step */}
            {checked && (
              <span
                id="hero-strike"
                className="absolute left-0 top-1/2 w-full bg-white/50"
                style={{
                  height: 1.5,
                  transformOrigin: "left center",
                  transform: "scaleX(0)",
                }}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
