import { BookOpen } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />
            <span className="text-xl font-bold text-[var(--color-foreground)]">
              ОбразованиеПлюс
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#courses"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
            >
              Курсы
            </a>
            <a
              href="#benefits"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#about"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
            >
              О нас
            </a>
          </nav>
          <button className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Начать обучение
          </button>
        </div>
      </div>
    </header>
  );
}
