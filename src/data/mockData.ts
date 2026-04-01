export const ASSETS = {
  courseraLogo: "/coursera-logo.svg",
  coursePreview: "/images/course-preview.png",
  rocketIcon: "",
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
