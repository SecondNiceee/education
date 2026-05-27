import { Trophy } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              ОлимпКласс
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#courses"
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Курсы
            </a>
            <a
              href="#benefits"
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Преимущества
            </a>
            <a
              href="#about"
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              О нас
            </a>
          </nav>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
            Начать обучение
          </button>
        </div>
      </div>
    </header>
  );
}
