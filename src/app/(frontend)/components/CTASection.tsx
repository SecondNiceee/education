import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
              Готовы подготовить ребёнка к олимпиаде?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto text-pretty">
              Начните обучение уже сегодня. Наши курсы помогут вашему ребёнку 
              развить логическое мышление и подготовиться к любым испытаниям.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-indigo-900/20 transition-all duration-300 inline-flex items-center gap-2 group">
              Начать обучение
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
