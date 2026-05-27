import { TrendingUp, MessageCircle, Play } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Мотивирующая система уровней",
    description:
      "Каждый курс разбит на уровни, чтобы ребёнку было интересно проходить материал постепенно. Достижения и награды поддерживают мотивацию.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
  },
  {
    icon: MessageCircle,
    title: "Поддержка преподавателя",
    description:
      "Напишите преподавателю, если не получается решить задачку. Вам ответят и объяснят всё понятным языком.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Play,
    title: "Понятные видеоразборы",
    description:
      "Курсы насыщены интересными и понятными видеоразборами. Каждая тема объясняется простым языком с примерами.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Почему мы
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Преимущества обучения с нами
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Мы создали идеальные условия для подготовки к олимпиадам
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 bg-gradient-to-r ${benefit.gradient} bg-clip-text`} style={{ color: index === 0 ? '#6366f1' : index === 1 ? '#10b981' : '#f59e0b' }} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
