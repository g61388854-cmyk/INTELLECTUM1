import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Выбери промпт',
    desc: 'Дизайн-лендинг, продающий пост, UI-концепт или кодовая сессия — найди инструмент под свою задачу.',
  },
  {
    num: '02',
    title: 'Адаптируй под идею',
    desc: 'Каждый промпт разложен на блоки. Меняешь суть, сохраняешь структуру — получаешь предсказуемый результат.',
  },
  {
    num: '03',
    title: 'Запускай',
    desc: 'Копируй в Claude, GPT, Gemini или Midjourney. Результат уровня студии — без часов редактуры.',
  },
];

export default function StartSection() {
  return (
    <section
      id="method"
      className="relative overflow-hidden py-32 px-6 md:px-16"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
      />
      <div className="absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">
        <div className="md:w-1/2 md:sticky md:top-32">
          <div className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6">
            <span className="text-xs font-medium text-white font-body">Метод</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Три шага до результата.
          </h2>
          <p className="mt-5 text-white/60 font-body font-light text-sm md:text-base max-w-md leading-relaxed">
            Ты не изучаешь prompt engineering с нуля. Ты берёшь готовую архитектуру,
            которая уже прошла сотни итераций — и применяешь к своей задаче.
          </p>
          <a
            href="#prompts"
            className="mt-8 liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium inline-flex items-center gap-2"
          >
            К библиотеке
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="md:w-1/2 flex flex-col gap-8">
          {steps.map((s) => (
            <div key={s.num} className="liquid-glass rounded-2xl p-8">
              <div className="text-white/30 font-heading italic text-5xl">{s.num}</div>
              <h3 className="mt-3 text-xl font-body font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-white/60 font-body font-light text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
