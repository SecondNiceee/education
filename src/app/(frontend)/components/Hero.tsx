import { ArrowRight, Trophy, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Trophy className="w-4 h-4" />
              Подготовка к олимпиадам
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
              Подготовьте ребёнка к{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">олимпиадам</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Качественные курсы для учеников 1-4 классов. Интерактивные уроки, 
              понятные видеоразборы и поддержка преподавателей помогут вашему 
              ребёнку достичь высоких результатов.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                Выбрать курс
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                Узнать больше
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">1 место</div>
                    <div className="text-xs text-slate-500">Олимпиада по математике</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Уровень 5</div>
                    <div className="text-xs text-slate-500">Достигнут!</div>
                  </div>
                </div>
              </div>
              
              {/* Main card */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 shadow-2xl shadow-indigo-500/30">
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">
                    {"🏆"}
                  </div>
                  <p className="text-xl font-bold text-white mb-2">
                    К победе!
                  </p>
                  <p className="text-indigo-100 text-sm">
                    Начни путь к олимпиаде сегодня
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
