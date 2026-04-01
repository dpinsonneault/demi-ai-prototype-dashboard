import { NavBar } from "./components/NavBar";
import { ProgressBanner } from "./components/ProgressBanner";
import { CourseRow } from "./components/CourseRow";
import { TrendingPanel } from "./components/TrendingPanel";
import { ASSETS, skillRecommendationCourses, trendingPanels } from "./data/mockData";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Section 1: Progress Banner — light blue bg */}
      <ProgressBanner
        userName="Nicholas"
        pathName="Digital Marketing"
        jobDemandPercent={12}
        progressPercent={46}
        courseTitle="Share Data Through the Art of Visualization"
        certificateName="Google Data Analytics & E-commerce Professional Certificate"
        videoSrc={ASSETS.coursePreview}
      />

      {/* Section 2: Skill Recommendations */}
      {/* Mobile: px-16 | Desktop: centered max-w-[1113px] px-24 */}
      <section className="py-32">
        <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24">
          <h2 className="cds-subtitle-md text-grey-975 mb-16">
            Master SQL as a data analyst
          </h2>
          <CourseRow courses={skillRecommendationCourses} />
        </div>
      </section>

      {/* Section 3: Trending Courses */}
      {/* Mobile: panels stacked vertically, full-width | Desktop: 3-column row */}
      <section className="pb-48">
        <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24">
          <h2 className="cds-subtitle-lg text-grey-975 mb-12">Trending courses</h2>
          <div className="flex flex-col md:flex-row gap-18">
            {trendingPanels.map((panel) => (
              <TrendingPanel key={panel.label} label={panel.label} courses={panel.courses} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
