import { ArrowUpRight, Send } from 'lucide-react';
import HlsVideo from './HlsVideo';

const TELEGRAM_URL = 'https://t.me/ai0090012';

export default function CtaFooter() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: 250, background: 'linear-gradient(to bottom, #000, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: 250, background: 'linear-gradient(to top, #000, transparent)' }}
      />

      <div className="relative z-10 px-6 md:px-16 py-40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85]">
              Больше промптов — в Telegram.
            </h2>
            <p className="mt-6 text-white/60 font-body font-light text-sm md:text-base max-w-md leading-relaxed">
              Публикую новые авторские промпты, разборы и эксперименты в канале.
              Подпишись — там всё свежее и без воды.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded-full px-6 py-3 font-body text-sm font-medium inline-flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                @ai0090012
              </a>
              <a
                href="#prompts"
                className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium inline-flex items-center gap-2"
              >
                К промптам
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            © {new Date().getFullYear()} INTELLECTUM. Все промпты — авторские.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-xs font-body hover:text-white/60"
            >
              Telegram
            </a>
            {['Privacy', 'Terms'].map((l) => (
              <a
                key={l}
                href="#contact"
                className="text-white/40 text-xs font-body hover:text-white/60"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
