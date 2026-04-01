import { NavBar } from "./components/NavBar";
import { ProgressBanner } from "./components/ProgressBanner";
import { SkillProgressSection } from "./components/SkillProgressSection";
import { CourseRow } from "./components/CourseRow";
import { TrendingPanel } from "./components/TrendingPanel";
import {
  learnerContext,
  todayGoals,
  skillBars,
  recentCertificates,
  calendarActivity,
  streakInfo,
  skillRecommendationCourses,
  trendingPanels,
} from "./data/mockData";

export default function App() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavBar />

      {/* Hero with grainy gradient */}
      <ProgressBanner learner={learnerContext} goals={todayGoals} />

      {/* Cards area */}
      <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24 flex flex-col gap-24 pt-24 pb-32">
        {/* Tabbed content card */}
        <div className="bg-white border border-grey-100 rounded-16 p-24 overflow-visible">
          <SkillProgressSection
            skills={skillBars}
            certificates={recentCertificates}
            calendarActivity={calendarActivity}
            streakInfo={streakInfo}
          />
        </div>

        {/* Skill Recommendations card */}
        <div className="bg-white border border-grey-100 rounded-16 p-24 overflow-visible">
          <h2 className="cds-subtitle-md text-grey-975 mb-16">
            Master SQL as a data analyst
          </h2>
          <CourseRow courses={skillRecommendationCourses} />
        </div>

        {/* Trending Courses card */}
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
