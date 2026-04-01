import { ASSETS } from "../data/mockData";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-grey-100">
      {/* ── Mobile nav (below md) ── */}
      <div className="md:hidden flex items-center justify-between px-20 py-16 h-68">
        <div className="flex items-center gap-12">
          <button
            aria-label="Open menu"
            className="flex items-center justify-center size-20 text-grey-975 flex-shrink-0"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              menu
            </span>
          </button>
          <img
            src={ASSETS.courseraLogo}
            alt="Coursera"
            className="flex-shrink-0"
            style={{ height: 15, width: 106 }}
          />
        </div>
        <button className="flex items-center justify-center px-12 py-4 border border-blue-700 text-blue-700 bg-white rounded-8 cds-action-secondary hover:bg-blue-25 transition-colors duration-fast">
          Join for free
        </button>
      </div>

      {/* ── Desktop nav (md and above) ── */}
      <div className="hidden md:flex items-center justify-between h-64 px-48 max-w-[1440px] mx-auto">
        {/* Left group: logo + nav links + search */}
        <div className="flex items-center gap-8">
          <img
            src={ASSETS.courseraLogo}
            alt="Coursera"
            className="flex-shrink-0"
            style={{ height: 16, width: 113 }}
          />

          {/* Nav links */}
          <div className="flex items-center">
            <button className="flex items-center gap-4 px-12 py-8 cds-action-secondary text-grey-975 hover:bg-grey-25 rounded-8 transition-colors duration-fast">
              Explore
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>
                expand_more
              </span>
            </button>
            <button className="px-12 py-8 cds-action-secondary text-blue-700 hover:bg-blue-25 rounded-8 transition-colors duration-fast">
              My Learning
            </button>
            <button className="px-12 py-8 cds-action-secondary text-grey-975 hover:bg-grey-25 rounded-8 transition-colors duration-fast">
              Degrees
            </button>
          </div>

          {/* Search input */}
          <div className="relative flex items-center h-44 w-[480px] bg-white border border-grey-100 rounded-full overflow-hidden">
            <span className="flex-1 pl-16 pr-40 cds-body-secondary text-grey-600 whitespace-nowrap overflow-hidden text-ellipsis pointer-events-none select-none">
              What do you want to learn?
            </span>
            <button
              aria-label="Search"
              className="absolute right-6 flex items-center justify-center size-32 bg-blue-700 rounded-full hover:bg-blue-800 transition-colors duration-fast flex-shrink-0"
            >
              <span className="material-symbols-rounded text-white" style={{ fontSize: 20 }}>
                search
              </span>
            </button>
          </div>
        </div>

        {/* Right group: icon buttons */}
        <div className="flex items-center gap-8">
          <button
            aria-label="Language"
            className="flex items-center justify-center size-40 rounded-full hover:bg-grey-25 text-grey-975 transition-colors duration-fast"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              language
            </span>
          </button>
          <button
            aria-label="Notifications"
            className="flex items-center justify-center size-40 rounded-full hover:bg-grey-25 text-grey-975 transition-colors duration-fast"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              notifications
            </span>
          </button>
          <button
            aria-label="Profile"
            className="flex items-center justify-center size-40 rounded-full bg-blue-700 text-white cds-subtitle-sm"
          >
            N
          </button>
        </div>
      </div>
    </nav>
  );
}
