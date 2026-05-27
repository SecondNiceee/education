import { Clock, TrendingUp } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  grade: string;
  lessons: number;
  level: number;
  icon: string;
  color: string;
}

export function CourseCard({
  title,
  description,
  grade,
  lessons,
  level,
  icon,
  color,
}: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-indigo-100 transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${color}15` }}
        >
          {icon}
        </div>
        <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-full">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-xs font-semibold text-slate-700">{level} уровней</span>
        </div>
      </div>
      <div className="inline-block bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
        {grade}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Clock className="w-4 h-4" />
        <span>{lessons} уроков</span>
      </div>
    </div>
  );
}
