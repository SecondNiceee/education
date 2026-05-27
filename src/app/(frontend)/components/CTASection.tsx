import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-foreground)] mb-6 text-balance">
          Готовы улучшить успеваемость вашего ребёнка?
        </h2>
        <p className="text-lg text-[var(--color-primary-foreground)]/80 mb-8 max-w-2xl mx-auto text-pretty">
          Присоединяйтесь к тысячам семей, которые уже видят результаты. Начните
          бесплатное обучение прямо сейчас — регистрация займёт меньше минуты.
        </p>
        <button className="bg-[var(--color-primary-foreground)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          Начать бесплатно
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
