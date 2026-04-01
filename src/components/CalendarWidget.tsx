import type { CalendarDayActivity, StreakInfo } from "../data/mockData";

interface CalendarWidgetProps {
  activity: CalendarDayActivity[];
  streak: StreakInfo;
}

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function CalendarWidget({ activity, streak }: CalendarWidgetProps) {
  const today = 23;
  const startDay = 4; // January 2026 starts on Thursday (index 4)
  const daysInMonth = 31;

  const activityMap = new Map(activity.map((a) => [a.day, a]));

  const blanks = Array.from({ length: startDay }, (_, i) => (
    <div key={`b-${i}`} />
  ));

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dayActivity = activityMap.get(day);
    const isToday = day === today;

    return (
      <div key={day} className="flex flex-col items-center gap-2">
        <span
          className={`
            flex items-center justify-center size-32 cds-body-secondary rounded-full
            ${isToday ? "bg-blue-700 text-white" : "text-grey-975"}
          `}
        >
          {day}
        </span>
        {dayActivity ? (
          dayActivity.allGoalsMet ? (
            <span className="text-blue-700 leading-none" style={{ fontSize: 10 }}>★</span>
          ) : (
            <span className="size-6 rounded-full bg-blue-400" />
          )
        ) : (
          <span className="size-6" />
        )}
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-24">
      {/* Calendar */}
      <div className="bg-white border border-grey-100 rounded-16 p-24">
        {/* Streak details */}
        <div className="flex gap-12 mb-16 pb-16 border-b border-grey-100">
          <div className="flex-1 flex items-center gap-12 bg-yellow-25 rounded-8 p-12">
            <span className="material-symbols-rounded text-yellow-700" style={{ fontSize: 24 }}>local_fire_department</span>
            <div className="flex flex-col">
              <span className="cds-body-tertiary text-grey-600">Current streak</span>
              <span className="cds-action-secondary text-grey-975">{streak.currentStreak} days</span>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-12 bg-blue-25 rounded-8 p-12">
            <span className="material-symbols-rounded text-blue-700" style={{ fontSize: 24 }}>emoji_events</span>
            <div className="flex flex-col">
              <span className="cds-body-tertiary text-grey-600">Best streak</span>
              <span className="cds-action-secondary text-grey-975">{streak.bestStreak} days</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h3 className="cds-action-secondary text-grey-975">January 2026</h3>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center size-32 rounded-full hover:bg-grey-50 transition-colors duration-fast" aria-label="Previous month">
              <span className="material-symbols-rounded text-grey-600" style={{ fontSize: 20 }}>chevron_left</span>
            </button>
            <button className="flex items-center justify-center size-32 rounded-full hover:bg-grey-50 transition-colors duration-fast" aria-label="Next month">
              <span className="material-symbols-rounded text-grey-600" style={{ fontSize: 20 }}>chevron_right</span>
            </button>
          </div>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 gap-y-4 mb-8">
          {DAY_LABELS.map((label) => (
            <div key={label} className="flex items-center justify-center">
              <span className="cds-body-tertiary text-grey-600">{label}</span>
            </div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-y-4">
          {blanks}
          {days}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-16 mt-16 pt-16 border-t border-grey-100">
          <div className="flex items-center gap-8">
            <span className="size-6 rounded-full bg-blue-400" />
            <span className="cds-body-tertiary text-grey-600">1+ items completed</span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-blue-700 leading-none" style={{ fontSize: 10 }}>★</span>
            <span className="cds-body-tertiary text-grey-600">All daily goals completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

