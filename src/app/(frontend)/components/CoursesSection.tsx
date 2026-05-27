import { CourseCard } from "./CourseCard";

const courses = [
  {
    title: "Олимпиадная математика",
    description:
      "Логические задачи, головоломки и нестандартные примеры для развития математического мышления",
    grade: "1-2 класс",
    lessons: 28,
    level: 5,
    icon: "🧮",
    color: "#6366f1",
  },
  {
    title: "Русский язык: олимпиадный уровень",
    description: "Сложные задания по орфографии, грамматике и развитию речи",
    grade: "1-2 класс",
    lessons: 24,
    level: 4,
    icon: "📚",
    color: "#10b981",
  },
  {
    title: "Окружающий мир: исследователь",
    description: "Углублённое изучение природы, экспериментов и научных открытий",
    grade: "1-2 класс",
    lessons: 20,
    level: 3,
    icon: "🔬",
    color: "#f59e0b",
  },
  {
    title: "Математика: продвинутый уровень",
    description: "Сложные задачи на логику, комбинаторику и геометрию",
    grade: "3-4 класс",
    lessons: 36,
    level: 6,
    icon: "📐",
    color: "#8b5cf6",
  },
  {
    title: "Английский: олимпиадная подготовка",
    description: "Расширенная лексика, грамматика и навыки понимания текста",
    grade: "3-4 класс",
    lessons: 32,
    level: 5,
    icon: "🌍",
    color: "#ef4444",
  },
  {
    title: "Русский язык: мастер слова",
    description: "Творческие задания, сочинения и работа с текстом олимпиадного уровня",
    grade: "3-4 класс",
    lessons: 30,
    level: 5,
    icon: "✍️",
    color: "#06b6d4",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Наши курсы
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Курсы для подготовки к олимпиадам
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Выберите курс по возрасту и предмету. Все материалы разработаны 
            опытными педагогами-олимпиадниками.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300">
            Смотреть все курсы
          </button>
        </div>
      </div>
    </section>
  );
}
