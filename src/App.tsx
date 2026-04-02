import { useState, useRef } from "react";
import { NavBar } from "./components/NavBar";
import { ProgressBanner } from "./components/ProgressBanner";
import { SkillProgressSection } from "./components/SkillProgressSection";
import { CourseRow } from "./components/CourseRow";
import { TrendingPanel } from "./components/TrendingPanel";
import { HeroMoment } from "./components/HeroMoment";
import {
  learnerContext,
  todayGoals,
  skillAreaName,
  skillBars,
  calendarActivity,
  streakInfo,
  skillRecommendationCourses,
  trendingPanels,
} from "./data/mockData";

const HERO_GOAL_INDEX = 0;

export default function App() {
  const [heroMounted, setHeroMounted] = useState(true);
  const [heroCompleted, setHeroCompleted] = useState(false);
  const flowerTargetRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen hero-gradient">
      {heroMounted && (
        <HeroMoment
          goal={todayGoals[HERO_GOAL_INDEX]}
          flowerTargetRef={flowerTargetRef}
          onComplete={() => {
            setHeroMounted(false);
            setHeroCompleted(true);
          }}
        />
      )}

      <NavBar />

      <ProgressBanner
        learner={learnerContext}
        goals={todayGoals}
        flowerRef={flowerTargetRef}
        heroCompleteIndex={HERO_GOAL_INDEX}
        heroCompleted={heroCompleted}
      />

      <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24 flex flex-col gap-24 pt-24 pb-32">
        <div className="bg-white border border-grey-100 rounded-16 p-24 overflow-visible">
          <SkillProgressSection
            skillAreaName={skillAreaName}
            skills={skillBars}
            calendarActivity={calendarActivity}
            streakInfo={streakInfo}
          />
        </div>

        <div className="bg-white border border-grey-100 rounded-16 p-24 overflow-visible">
          <h2 className="cds-subtitle-md text-grey-975 mb-16">
            Master SQL as a data analyst
          </h2>
          <CourseRow courses={skillRecommendationCourses} />
        </div>

        <div className="bg-white border border-grey-100 rounded-16 p-24 overflow-visible">
          <h2 className="cds-subtitle-lg text-grey-975 mb-12">Trending courses</h2>
          <div className="flex flex-col md:flex-row gap-18 min-w-0">
            {trendingPanels.map((panel) => (
              <TrendingPanel key={panel.label} label={panel.label} courses={panel.courses} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
