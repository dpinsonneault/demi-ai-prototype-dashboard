import { CourseCard } from "./CourseCard";
import type { CourseCardData } from "../data/mockData";

interface CourseRowProps {
  courses: CourseCardData[];
}

export function CourseRow({ courses }: CourseRowProps) {
  return (
    <div className="flex gap-16 overflow-x-auto p-12 -m-12" style={{ scrollbarWidth: "none" }}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
