import { CircularProgress } from "./CircularProgress";


interface ProgressBannerProps {
  userName: string;
  pathName: string;
  jobDemandPercent: number;
  progressPercent: number;
  courseTitle: string;
  certificateName: string;
  videoSrc: string;
}

export function ProgressBanner({
  userName,
  pathName,
  jobDemandPercent,
  progressPercent,
  courseTitle,
  certificateName,
  videoSrc,
}: ProgressBannerProps) {
  return (
    <section className="w-full py-32" style={{ backgroundColor: "#f0f6ff" }}>
      {/* Content wrapper: full-width px-16 on mobile, centered 1113px on desktop */}
      <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24 flex flex-col gap-8">

        {/* Greeting */}
        <p className="cds-subtitle-md text-grey-975">
          Hi {userName}, here's your progress in
        </p>

        {/* Path name + badge: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 pb-16">
          <h1 className="cds-title-sm text-grey-975 whitespace-nowrap">{pathName}</h1>
          <div
            className="flex items-center gap-6 h-32 px-12 rounded-32 self-start flex-shrink-0"
            style={{ backgroundColor: "#2d3440" }}
          >
            <span className="material-symbols-rounded text-white" style={{ fontSize: 16 }}>rocket_launch</span>
            <span className="cds-action-secondary text-white whitespace-nowrap">
              +{jobDemandPercent}% job demand
            </span>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white border border-grey-100 rounded-16 p-24 flex flex-col md:flex-row md:items-center gap-12">

          {/* Left column: ring + text + [video on mobile] + button */}
          <div className="flex flex-col gap-16 flex-1 min-w-0">
            <div className="flex flex-col gap-16">
              <CircularProgress percent={progressPercent} />
              <div className="flex flex-col gap-4">
                <p className="cds-subtitle-md text-grey-975">{courseTitle}</p>
                <p className="cds-body-secondary text-grey-600">
                  {certificateName}
                </p>
              </div>
            </div>

            {/* Video thumbnail — mobile only (between text and button) */}
            <div
              className="md:hidden w-full rounded-8 overflow-hidden flex-shrink-0"
              style={{ height: 206 }}
            >
              <img
                src={videoSrc}
                alt="Course preview"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="self-start flex items-center justify-center px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast">
              Resume learning
            </button>
          </div>

          {/* Video thumbnail — desktop only (right column) */}
          <div
            className="hidden md:block flex-shrink-0 rounded-8 overflow-hidden"
            style={{ width: 513, height: 294 }}
          >
            <img
              src={videoSrc}
              alt="Course preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
