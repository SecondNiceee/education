import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Бесплатное обучение для всех
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight text-balance">
              Улучшите успеваемость{" "}
              <span className="text-[var(--color-primary)]">вашего ребёнка</span>{" "}
              в школе
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--color-muted-foreground)] max-w-2xl text-pretty">
              Бесплатные онлайн-курсы по всем школьным предметам для учеников с
              1 по 6 класс. Интерактивные уроки, понятные объяснения и
              практические задания помогут вашему ребёнку стать отличником.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Выбрать курс
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto border-2 border-[var(--color-border)] text-[var(--color-foreground)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-secondary)] transition-colors">
                Узнать больше
              </button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-foreground)]">
                  10 000+
                </div>
                <div className="text-sm text-[var(--color-muted-foreground)]">
                  учеников
                </div>
              </div>
              <div className="w-px h-12 bg-[var(--color-border)]" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-foreground)]">
                  50+
                </div>
                <div className="text-sm text-[var(--color-muted-foreground)]">
                  курсов
                </div>
              </div>
              <div className="w-px h-12 bg-[var(--color-border)]" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-foreground)]">
                  100%
                </div>
                <div className="text-sm text-[var(--color-muted-foreground)]">
                  бесплатно
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-3xl -rotate-6" />
              <div className="relative bg-[var(--color-card)] rounded-3xl shadow-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {"📚"}
                  </div>
                  <p className="text-xl font-semibold text-[var(--color-foreground)]">
                    Знания — сила!
                  </p>
                  <p className="text-[var(--color-muted-foreground)] mt-2">
                    Откройте мир обучения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
