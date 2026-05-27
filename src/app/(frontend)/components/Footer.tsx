import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="text-lg font-bold text-[var(--color-background)]">
              ОбразованиеПлюс
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--color-muted-foreground)]">
            <a href="#" className="hover:text-[var(--color-background)] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-[var(--color-background)] transition-colors">
              Условия использования
            </a>
            <a href="#" className="hover:text-[var(--color-background)] transition-colors">
              Контакты
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--color-muted-foreground)]/20 text-center text-sm text-[var(--color-muted-foreground)]">
          2025 ОбразованиеПлюс. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
