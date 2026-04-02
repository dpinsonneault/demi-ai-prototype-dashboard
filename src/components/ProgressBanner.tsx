import { CircularProgress } from "./CircularProgress";
import { GoalsPanel } from "./GoalsPanel";
import type { LearnerContext, GoalItem } from "../data/mockData";

interface ProgressBannerProps {
  learner: LearnerContext;
  goals: GoalItem[];
  flowerRef?: React.RefObject<HTMLDivElement | null>;
  heroCompleteIndex?: number;
  heroCompleted?: boolean;
}

export function ProgressBanner({ learner, goals, flowerRef, heroCompleteIndex, heroCompleted }: ProgressBannerProps) {
  return (
    <section className="w-full pt-32">
      <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24 flex flex-col gap-8">

        {/* Greeting line */}
        <p className="cds-subtitle-md text-grey-600">
          Hi {learner.userName}, you're a{" "}
          <span className="inline-flex items-center mx-4 px-12 py-4 bg-white/60 rounded-32 cds-action-secondary text-grey-975">
            {learner.occupationGroup}
          </span>{" "}
          currently working towards
        </p>

        {/* Job task + demand badge */}
        <div className="pb-16">
          <h1 className="cds-title-sm text-grey-975">{learner.jobTask}</h1>
        </div>

        {/* 3-column card */}
        <div className="bg-white border border-grey-100 rounded-16 p-24 flex flex-col md:flex-row gap-24">

          {/* Left: progress ring + course info + CTA */}
          <div className="flex flex-col justify-center gap-16 md:w-[232px] flex-shrink-0">
            <CircularProgress percent={learner.progressPercent} />
            <div className="flex flex-col gap-4">
              <p className="cds-subtitle-md text-grey-975">{learner.currentCourseTitle}</p>
              <p className="cds-body-secondary text-grey-600">{learner.certificateName}</p>
            </div>

            {/* Mobile video preview */}
            <div className="md:hidden w-full rounded-8 overflow-hidden flex-shrink-0 bg-grey-50" style={{ height: 206 }}>
              <img
                src={learner.videoSrc}
                alt="Course preview"
                className="w-full h-full object-contain"
              />
            </div>

            <button className="self-start flex items-center justify-center px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast">
              Resume learning
            </button>
          </div>

          {/* Center: video preview (desktop) */}
          <div className="hidden md:block flex-1 rounded-8 overflow-hidden min-w-0">
            <img
              src={learner.videoSrc}
              alt="Course preview"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right: goals panel */}
          <div className="md:w-[280px] flex-shrink-0 border-t md:border-t-0 md:border-l border-grey-100 pt-16 md:pt-0 md:pl-24">
            <GoalsPanel goals={goals} flowerRef={flowerRef} heroCompleteIndex={heroCompleteIndex} heroCompleted={heroCompleted} />
          </div>
        </div>
      </div>
    </section>
  );
}
