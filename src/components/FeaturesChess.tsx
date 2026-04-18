import { ArrowUpRight } from 'lucide-react';

type Row = {
  heading: string;
  body: string;
  cta: string;
  video: string;
  reverse?: boolean;
};

const rows: Row[] = [
  {
    heading: 'Промпты, собранные под реальные задачи, а не под демо.',
    body: 'Каждый промпт из библиотеки прошёл сотни прогонов на моих проектах — лендингах, запусках, визуалах. То, что не работает стабильно, в библиотеку не попадает.',
    cta: 'Посмотреть кейсы',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
  },
  {
    heading: 'Архитектура, которая учится под твой контекст.',
    body: 'Каждый промпт разложен на слоты: роль, контекст, ограничения, формат вывода. Подставляешь свои переменные — получаешь результат, который звучит как ты, а не как усреднённый ассистент.',
    cta: 'Разобрать метод',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4',
    reverse: true,
  },
];

export default function FeaturesChess() {
  return (
    <section id="technology" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6">
            <span className="text-xs font-medium text-white font-body">Технология</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-lg">
            Инженерная точность. Человеческий тон.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {rows.map((r) => (
            <div
              key={r.heading}
              className={`flex flex-col ${r.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
            >
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.95]">
                  {r.heading}
                </h3>
                <p className="mt-5 text-white/60 font-body font-light text-sm md:text-base leading-relaxed max-w-md">
                  {r.body}
                </p>
                <a
                  href="#prompts"
                  className="mt-7 liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body text-sm font-medium inline-flex items-center gap-2"
                >
                  {r.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex-1 liquid-glass rounded-2xl overflow-hidden w-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-72 md:h-96 object-cover"
                  src={r.video}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
