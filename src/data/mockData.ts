export const ASSETS = {
  courseraLogo: "/coursera-logo.svg",
  coursePreview: "/images/course-preview.png",
  googleLogo: "/images/logo-google.png",
  microsoftLogo: "/images/logo-microsoft.png",
  metaLogo: "/images/logo-meta.png",
  ibmLogo: "/images/logo-ibm.png",
  uiLogo: "/images/logo-uiuc.png",
  vanderbiltLogo: "/images/logo-vanderbilt.png",
  macquarieLogo: "/images/logo-macquarie.png",
};

export interface CourseCardData {
  id: string;
  title: string;
  provider: string;
  providerLogo: string;
  thumbnail: string;
  rating: number;
  reviewCount: string;
  level: string;
  type: string;
  duration: string;
  matchPercent: number;
  tags: string[];
  bestFor: string;
}

export interface TrendingCourseData {
  id: string;
  title: string;
  provider: string;
  providerLogo: string;
  thumbnail: string;
  type: string;
  rating: number;
}

export interface TrendingPanelData {
  label: string;
  courses: TrendingCourseData[];
}

// --- Taxonomy & dashboard types ---

export interface LearnerContext {
  userName: string;
  occupationGroup: string;
  careerBand: { code: string; label: string };
  jobTask: string;
  jobDemandPercent: number;
  currentCourseTitle: string;
  certificateName: string;
  progressPercent: number;
  videoSrc: string;
}

export interface SkillBarData {
  name: string;
  completed: number;
  total: number;
  nextCourse?: {
    title: string;
    provider: string;
    providerLogo: string;
    thumbnail: string;
    type: string;
    rating: number;
  };
}

export interface GoalItem {
  label: string;
  boldText?: string;
  progress?: { current: number; total: number };
  completed: boolean;
}

export interface CertificateData {
  title: string;
  logoSrc: string;
  actions: { label: string; href: string }[];
}

export interface CalendarDayActivity {
  day: number;
  itemsCompleted: number;
  allGoalsMet: boolean;
}

export interface DailyStats {
  date: string;
  minutesLearned: number;
  itemsCompleted: number;
  highestGrade: string;
}

export interface StreakInfo {
  currentStreak: number;
  bestStreak: number;
}

export const learnerContext: LearnerContext = {
  userName: "Nicholas",
  occupationGroup: "Data Analyst",
  careerBand: { code: "CB1", label: "Early Professional" },
  jobTask: "Identifying relevant data sources across multiple systems",
  jobDemandPercent: 12,
  currentCourseTitle: "Source Systems, Data Ingestion, and Pipelines",
  certificateName: "DeepLearning.AI Data Engineering Professional Certificate",
  progressPercent: 46,
  videoSrc: "/images/course-preview.png",
};

export const skillBars: SkillBarData[] = [
  { name: "Data Integrity & Literacy", completed: 1500, total: 1500 },
  { name: "Visualizing and Reporting Clean Data", completed: 255, total: 1500 },
  {
    name: "Preparing and Cleaning Data",
    completed: 120,
    total: 1500,
    nextCourse: {
      title: "Google Advanced Data Analytics",
      provider: "Google",
      providerLogo: ASSETS.googleLogo,
      thumbnail: "/images/card-thumb-1.png",
      type: "Professional Certificate",
      rating: 4.8,
    },
  },
  {
    name: "Connecting and Importing Data",
    completed: 0,
    total: 1500,
    nextCourse: {
      title: "Designing, Modeling, and Implementing Data Warehouses",
      provider: "IBM",
      providerLogo: ASSETS.ibmLogo,
      thumbnail: "/images/card-thumb-2.png",
      type: "Module 2 · 5 hours to complete",
      rating: 4.7,
    },
  },
  { name: "Prepare Datasets in Power BI", completed: 0, total: 1500 },
];

export const todayGoals: GoalItem[] = [
  {
    label: "Complete any ",
    boldText: "5 learning items",
    progress: { current: 0, total: 5 },
    completed: false,
  },
  { label: "Complete 1 practice item", completed: false },
  { label: "Use Coach", completed: false },
];

export const recentCertificates: CertificateData[] = [
  {
    title: "Gen AI Foundations Learning Path",
    logoSrc: ASSETS.courseraLogo,
    actions: [
      { label: "Add to LinkedIn", href: "#" },
      { label: "View badge", href: "#" },
    ],
  },
  {
    title: "Google Data Analyst Professional Certificate",
    logoSrc: ASSETS.googleLogo,
    actions: [
      { label: "Add to LinkedIn", href: "#" },
      { label: "View certificate", href: "#" },
    ],
  },
];

export const calendarActivity: CalendarDayActivity[] = [
  { day: 3, itemsCompleted: 1, allGoalsMet: false },
  { day: 4, itemsCompleted: 2, allGoalsMet: false },
  { day: 5, itemsCompleted: 3, allGoalsMet: true },
  { day: 6, itemsCompleted: 1, allGoalsMet: true },
  { day: 11, itemsCompleted: 2, allGoalsMet: false },
  { day: 17, itemsCompleted: 4, allGoalsMet: true },
  { day: 18, itemsCompleted: 3, allGoalsMet: true },
  { day: 19, itemsCompleted: 5, allGoalsMet: true },
  { day: 20, itemsCompleted: 2, allGoalsMet: true },
  { day: 21, itemsCompleted: 3, allGoalsMet: true },
  { day: 22, itemsCompleted: 2, allGoalsMet: true },
  { day: 23, itemsCompleted: 3, allGoalsMet: true },
];

export const streakInfo: StreakInfo = {
  currentStreak: 7,
  bestStreak: 7,
};

export const dailyStats: DailyStats = {
  date: "January 23",
  minutesLearned: 50,
  itemsCompleted: 20,
  highestGrade: "85.5%",
};

export const skillRecommendationCourses: CourseCardData[] = [
  {
    id: "1",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "/images/card-thumb-1.png",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "2",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "/images/card-thumb-2.png",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "3",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "/images/card-thumb-3.png",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "4",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "/images/card-thumb-4.png",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
];

export const trendingPanels: TrendingPanelData[] = [
  {
    label: "Most popular",
    courses: [
      {
        id: "t1-1",
        title: "Google AI Essentials",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "/images/trending-most-popular-1.png",
        type: "Specialization",
        rating: 4.9,
      },
      {
        id: "t1-2",
        title: "Agentic AI and AI Agents for Leaders",
        provider: "Microsoft",
        providerLogo: ASSETS.microsoftLogo,
        thumbnail: "/images/trending-most-popular-2.png",
        type: "Course",
        rating: 4.9,
      },
      {
        id: "t1-3",
        title: "Agentic AI and AI Agents for Leaders",
        provider: "Meta",
        providerLogo: ASSETS.metaLogo,
        thumbnail: "/images/trending-most-popular-3.png",
        type: "Course",
        rating: 4.9,
      },
    ],
  },
  {
    label: "Weekly spotlight",
    courses: [
      {
        id: "t2-1",
        title: "Successful Negotiation: Essential Strat..",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "/images/trending-weekly-1.png",
        type: "Professional Certificate",
        rating: 4.9,
      },
      {
        id: "t2-2",
        title: "Successful Negotiation: Essential Strat..",
        provider: "IBM",
        providerLogo: ASSETS.ibmLogo,
        thumbnail: "/images/trending-weekly-2.png",
        type: "Professional Certificate",
        rating: 4.9,
      },
      {
        id: "t2-3",
        title: "Successful Negotiation: Essential Strat..",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "/images/trending-weekly-3.png",
        type: "Professional Certificate",
        rating: 4.9,
      },
    ],
  },
  {
    label: "In-demand AI skills",
    courses: [
      {
        id: "t3-1",
        title: "Excel Skills for Business Specialization",
        provider: "University of Illinois",
        providerLogo: ASSETS.uiLogo,
        thumbnail: "/images/trending-ai-skills-1.png",
        type: "Specialization",
        rating: 4.9,
      },
      {
        id: "t3-2",
        title: "Prompt Engineering for ChatGPT",
        provider: "Vanderbilt University",
        providerLogo: ASSETS.vanderbiltLogo,
        thumbnail: "/images/trending-ai-skills-2.png",
        type: "Course",
        rating: 4.9,
      },
      {
        id: "t3-3",
        title: "Strategic Leadership and Management...",
        provider: "Macquarie University",
        providerLogo: ASSETS.macquarieLogo,
        thumbnail: "/images/trending-ai-skills-3.png",
        type: "Course",
        rating: 4.9,
      },
    ],
  },
];
