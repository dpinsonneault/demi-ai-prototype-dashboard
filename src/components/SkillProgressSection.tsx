import { useState } from "react";
import { CalendarWidget } from "./CalendarWidget";
import type {
  SkillBarData,
  CertificateData,
  CalendarDayActivity,
  StreakInfo,
} from "../data/mockData";

interface SkillProgressSectionProps {
  skills: SkillBarData[];
  certificates: CertificateData[];
  calendarActivity: CalendarDayActivity[];
  streakInfo: StreakInfo;
}

const TABS = ["Overview", "Skills", "In progress", "Saved", "Certificates"];

export function SkillProgressSection({
  skills,
  certificates,
  calendarActivity,
  streakInfo,
}: SkillProgressSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const focusSkill = skills
    .filter((s) => s.completed < s.total)
    .sort((a, b) => a.completed / a.total - b.completed / b.total)[0];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-24 border-b border-grey-100 mb-24 overflow-x-auto">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            className={`pb-12 cds-action-secondary whitespace-nowrap transition-colors duration-fast ${
              i === 0
                ? "text-grey-975 border-b-2 border-grey-975"
                : "text-grey-600 hover:text-grey-975"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-32">
        {/* Left column */}
        <div className="flex-1 min-w-0 flex flex-col gap-32">
          {/* Focus skill */}
          <div>
            <h3 className="cds-subtitle-md text-grey-975 mb-16">Skill progress</h3>

            {focusSkill && (
              <div className="bg-grey-25 rounded-16 p-16 flex flex-col gap-16">
                {/* Rationale */}
                <div className="flex items-center gap-8">
                  <img
                    src="/status/AIGenerateBranded.svg"
                    alt=""
                    className="size-16 flex-shrink-0"
                  />
                  <span className="cds-body-secondary text-grey-600">
                    Recommended next — biggest opportunity for growth
                  </span>
                </div>

                {/* Progress bar */}
                <SkillBar skill={focusSkill} />

                {/* Suggested course */}
                {focusSkill.nextCourse && (
                  <div className="flex items-center gap-12 bg-white rounded-8 p-12 cursor-pointer transition-all duration-normal hover:scale-[1.02] hover:shadow-elevation-2">
                    <img
                      src={focusSkill.nextCourse.thumbnail}
                      alt=""
                      className="size-48 rounded-8 object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className="cds-action-secondary text-grey-975 truncate">
                        {focusSkill.nextCourse.title}
                      </span>
                      <div className="flex items-center gap-8">
                        <img
                          src={focusSkill.nextCourse.providerLogo}
                          alt=""
                          className="size-16 object-contain"
                        />
                        <span className="cds-body-tertiary text-grey-600">
                          {focusSkill.nextCourse.provider}
                        </span>
                        <span className="cds-body-tertiary text-grey-400">·</span>
                        <span className="cds-body-tertiary text-grey-600">
                          {focusSkill.nextCourse.type}
                        </span>
                        <span className="cds-body-tertiary text-grey-400">·</span>
                        <span className="cds-body-tertiary text-grey-600 flex items-center gap-2">
                          <span
                            className="material-symbols-rounded text-yellow-700"
                            style={{
                              fontSize: 14,
                              fontVariationSettings:
                                "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                            }}
                          >
                            star
                          </span>
                          {focusSkill.nextCourse.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Toggle */}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-4 mt-16 cds-action-secondary text-blue-700 hover:text-blue-800 hover:bg-blue-25 px-12 py-8 rounded-8 transition-colors duration-fast -ml-12"
            >
              View all {skills.length} skills
              <span
                className="material-symbols-rounded"
                style={{ fontSize: 20 }}
              >
                {expanded ? "expand_less" : "expand_more"}
              </span>
            </button>

            {/* Collapsible grid */}
            {expanded && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 mt-16">
                {skills.map((skill, i) => (
                  <SkillBar key={i} skill={skill} />
                ))}
              </div>
            )}
          </div>


          {/* Recent certificates */}
          <div>
            <h3 className="cds-subtitle-md text-grey-975 mb-16">Recent certificates</h3>
            <div className="flex flex-col gap-16">
              {certificates.map((cert, i) => (
                <CertificateRow key={i} certificate={cert} />
              ))}
            </div>
          </div>
        </div>

        {/* Right column: calendar */}
        <div className="md:w-[380px] flex-shrink-0">
          <CalendarWidget activity={calendarActivity} streak={streakInfo} />
        </div>
      </div>
    </div>
  );
}

function SkillBar({ skill }: { skill: SkillBarData }) {
  const pct = skill.total > 0 ? (skill.completed / skill.total) * 100 : 0;
  const isComplete = skill.completed === skill.total;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 min-w-0">
          <span className="cds-body-primary text-grey-975 truncate">{skill.name}</span>
          {isComplete && (
            <span className="flex-shrink-0 cds-body-tertiary text-white bg-green-700 px-8 py-2 rounded-full">
              Verified
            </span>
          )}
        </div>
        <span className="cds-body-secondary text-grey-600 flex-shrink-0 ml-8">
          {skill.completed}/{skill.total} XP
        </span>
      </div>
      <div className="w-full h-8 bg-grey-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-normal ${isComplete ? "bg-green-700" : "bg-blue-700"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function CertificateRow({ certificate }: { certificate: CertificateData }) {
  return (
    <div className="flex items-center gap-16 p-16 bg-grey-25 rounded-16 cursor-pointer transition-all duration-normal hover:scale-[1.02] hover:shadow-elevation-2">
      <div className="flex-shrink-0 size-48 rounded-8 overflow-hidden flex items-center justify-center bg-grey-25">
        <img
          src={certificate.logoSrc}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        <p className="cds-action-secondary text-grey-975">{certificate.title}</p>
        <div className="flex items-center gap-12">
          {certificate.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="cds-body-secondary text-blue-700 hover:underline"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
