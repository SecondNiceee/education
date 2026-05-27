import { Clock, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  grade: string;
  lessons: number;
  students: number;
  icon: string;
  color: string;
}

export function CourseCard({
  title,
  description,
  grade,
  lessons,
  students,
  icon,
  color,
}: CourseCardProps) {
  return (
    <div className="group bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all duration-300 cursor-pointer">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
        style={{ backgroundColor: `${color}20` }}
      >
        {icon}
      </div>
      <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] text-xs font-medium px-2.5 py-1 rounded-full mb-3">
        {grade}
      </div>
      <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
        {title}
      </h3>
      <p className="text-[var(--color-muted-foreground)] text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{lessons} уроков</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>{students.toLocaleString("ru-RU")}</span>
        </div>
      </div>
    </div>
  );
}
