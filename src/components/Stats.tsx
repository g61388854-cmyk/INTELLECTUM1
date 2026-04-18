import HlsVideo from './HlsVideo';

const stats = [
  { value: '140+', label: 'Авторских промптов' },
  { value: '96%', label: 'Успешных прогонов' },
  { value: '3 500', label: 'Часов итераций' },
  { value: '12', label: 'Категорий задач' },
];

export default function Stats() {
  return (
    <section id="author" className="relative overflow-hidden py-32 px-6 md:px-16">
      <HlsVideo
        src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: 200, background: 'linear-gradient(to bottom, #000, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: 200, background: 'linear-gradient(to top, #000, transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6">
            <span className="text-xs font-medium text-white font-body">По цифрам</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Результат, а не эксперименты.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="liquid-glass rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                {s.value}
              </div>
              <div className="text-white/60 font-body font-light text-sm mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
