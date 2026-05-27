import { CourseCard } from "./CourseCard";

const courses = [
  {
    title: "Математика для начинающих",
    description:
      "Изучение чисел, сложение, вычитание и простые задачи в игровой форме",
    grade: "1-2 класс",
    lessons: 24,
    students: 3420,
    icon: "🔢",
    color: "#2563eb",
  },
  {
    title: "Русский язык: основы",
    description: "Алфавит, чтение, письмо и первые правила русского языка",
    grade: "1-2 класс",
    lessons: 32,
    students: 4150,
    icon: "📝",
    color: "#10b981",
  },
  {
    title: "Окружающий мир",
    description: "Природа, животные, растения и удивительные факты о нашем мире",
    grade: "1-3 класс",
    lessons: 28,
    students: 2890,
    icon: "🌍",
    color: "#f59e0b",
  },
  {
    title: "Математика: умножение и деление",
    description: "Таблица умножения, деление и решение составных задач",
    grade: "3-4 класс",
    lessons: 36,
    students: 5230,
    icon: "✖️",
    color: "#8b5cf6",
  },
  {
    title: "Английский язык для детей",
    description: "Базовая лексика, простые диалоги и весёлые песенки",
    grade: "2-4 класс",
    lessons: 40,
    students: 6100,
    icon: "🇬🇧",
    color: "#ef4444",
  },
  {
    title: "Русский язык: грамматика",
    description: "Части речи, склонение, спряжение и правописание",
    grade: "3-4 класс",
    lessons: 45,
    students: 4780,
    icon: "📖",
    color: "#06b6d4",
  },
  {
    title: "Математика: дроби и проценты",
    description: "Обыкновенные и десятичные дроби, проценты и пропорции",
    grade: "5-6 класс",
    lessons: 38,
    students: 3950,
    icon: "📊",
    color: "#ec4899",
  },
  {
    title: "История древнего мира",
    description: "Путешествие от первобытного общества до великих цивилизаций",
    grade: "5-6 класс",
    lessons: 42,
    students: 2340,
    icon: "🏛️",
    color: "#84cc16",
  },
  {
    title: "Биология: живой мир",
    description: "Строение клетки, растения, животные и экосистемы",
    grade: "5-6 класс",
    lessons: 35,
    students: 2870,
    icon: "🧬",
    color: "#14b8a6",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4 text-balance">
            Популярные курсы для школьников
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto text-pretty">
            Выберите курс по возрасту и интересам вашего ребёнка. Все материалы
            разработаны опытными педагогами.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity">
            Смотреть все курсы
          </button>
        </div>
      </div>
    </section>
  );
}
