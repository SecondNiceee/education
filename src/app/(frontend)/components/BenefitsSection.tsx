import { CheckCircle, Zap, Award, Heart } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Проверенные материалы",
    description:
      "Все курсы разработаны в соответствии со школьной программой и проверены опытными педагогами",
  },
  {
    icon: Zap,
    title: "Интерактивные уроки",
    description:
      "Увлекательные видео, тесты и задания делают обучение интересным и эффективным",
  },
  {
    icon: Award,
    title: "Сертификаты",
    description:
      "По завершении курса ребёнок получает сертификат, который мотивирует продолжать обучение",
  },
  {
    icon: Heart,
    title: "Индивидуальный темп",
    description:
      "Ребёнок может учиться в удобное время и проходить материал в своём ритме",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4 text-balance">
            Почему родители выбирают нас
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto text-pretty">
            Мы создаём лучшие условия для обучения вашего ребёнка
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[var(--color-muted-foreground)]">
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
