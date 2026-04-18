import { ArrowUpRight, Copy } from 'lucide-react';
import { useState } from 'react';

type Prompt = {
  tag: string;
  title: string;
  desc: string;
  excerpt: string;
  image?: string;
};

const prompts: Prompt[] = [
  {
    tag: 'UI / Landing',
    title: 'Premium Landing Architect',
    desc: 'Собирает премиум-лендинг с типографикой, liquid-glass и точными анимациями — один промпт, готовый React-проект на выходе.',
    excerpt:
      'Build a premium landing page using React, TypeScript, Tailwind, Framer Motion and a custom "liquid glass" morphism effect…',
  },
  {
    tag: 'Brand / Copy',
    title: 'Voice Distiller',
    desc: 'Превращает сырое описание бренда в голос: манифест, тон, словарь запретных слов и 10 готовых заголовков.',
    excerpt:
      'Act as a senior brand strategist. Given the raw description below, produce a voice system with manifesto, tone rules…',
  },
  {
    tag: 'Photo / Portrait',
    title: 'Identity-Locked Portrait',
    desc: 'Чёрно-белый аналоговый портрет с 1:1 сохранением лица из референса. Жёсткий identity-lock, контраст, плёночное зерно, киношный грейдинг.',
    excerpt:
      'Ultra-photorealistic B&W portrait based strictly on the reference. CRITICAL: facial identity 1:1 — exact eyes, nose, lips, bone structure, asymmetry, skin texture. Chest-up, profile, single directional soft-contrasty light, black turtleneck, analog film grain, no stylization.',
    image: '/prompts/identity-lock.jpg',
  },
  {
    tag: 'Code / Agent',
    title: 'Refactor Sentinel',
    desc: 'Находит слабые места в кодовой базе, предлагает точечный рефакторинг без ломающих изменений и пишет PR-описание.',
    excerpt:
      'You are a senior engineer doing a surgical refactor. Do not introduce new abstractions. Output: diff plan, risks…',
  },
  {
    tag: 'Marketing',
    title: 'Launch Funnel Writer',
    desc: 'Генерит воронку запуска: лид-магнит, welcome-письмо, 3 прогревочных поста и продающее письмо — в едином тоне.',
    excerpt:
      'Role: conversion copywriter. Produce a 5-step launch funnel targeting {ICP}. Keep voice consistent across assets…',
  },
  {
    tag: 'Photo / Casting',
    title: 'High-Fashion Casting',
    desc: 'Editorial casting-test с белым или чёрным seamless-фоном. Голый свет, фронтальный взгляд, дермо-макро детализация кожи, хай-фэшн кастинг-эстетика.',
    excerpt:
      'Ultra-high-res portrait on pure seamless studio background. Head and shoulders, straight gaze, no rotation. Medium-format film look, 85mm f/4, ISO 100, soft diffused frontal light. Dermatological macro skin detail — pores, iris fibers, dry lips, tendons. Editorial casting, no retouch, no makeup.',
    image: '/prompts/editorial-casting.jpg',
  },
];

function PromptCard({ p }: { p: Prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(p.excerpt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="liquid-glass rounded-2xl p-7 flex flex-col h-full">
      <div className="flex items-center justify-between gap-4">
        <span className="liquid-glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-body font-medium text-white/80">
          {p.tag}
        </span>
        <button
          onClick={handleCopy}
          aria-label="Copy prompt"
          className="text-white/50 hover:text-white transition-colors"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>

      {p.image && (
        <div className="mt-5 liquid-glass-strong rounded-xl overflow-hidden aspect-[4/5]">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="mt-5 text-2xl md:text-3xl font-heading italic text-white leading-[0.95]">
        {p.title}
      </h3>
      <p className="mt-3 text-white/60 font-body font-light text-sm leading-relaxed">
        {p.desc}
      </p>

      <div className="mt-5 liquid-glass-strong rounded-xl p-4">
        <pre className="text-white/70 font-body text-[12px] leading-relaxed whitespace-pre-wrap">
          {p.excerpt}
        </pre>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-white/40 font-body">
          {copied ? 'Скопировано' : 'Полный промпт по запросу'}
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-white/80 hover:text-white text-xs font-body"
        >
          Открыть
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Prompts() {
  return (
    <section id="prompts" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6">
              <span className="text-xs font-medium text-white font-body">Библиотека</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-xl">
              Авторские промпты. Без воды.
            </h2>
          </div>
          <p className="text-white/60 font-body font-light text-sm md:text-base max-w-sm leading-relaxed">
            Шесть инструментов, которые я использую в работе каждый день. Ниже — превью.
            Полная версия и контекст применения — в письме.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((p) => (
            <PromptCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
