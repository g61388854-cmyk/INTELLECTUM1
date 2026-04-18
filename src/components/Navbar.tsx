import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Menu, Send, X } from 'lucide-react';

const TELEGRAM_URL = 'https://t.me/ai0090012';

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Prompts', href: '#prompts' },
  { label: 'Method', href: '#method' },
  { label: 'Author', href: '#author' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#overview" className="flex items-center gap-2">
          <Brain className="h-7 w-7 text-white" />
          <span className="font-heading italic text-2xl text-white">INTELLECTUM</span>
        </a>

        <div className="hidden md:flex items-center gap-2 liquid-glass rounded-full px-1.5 py-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-white/80 font-body hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-semibold font-body"
          >
            <Send className="h-3.5 w-3.5" />
            Telegram
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden liquid-glass rounded-full p-2.5 text-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 liquid-glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white/80 font-body hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 w-full flex items-center justify-center gap-1 bg-white text-black rounded-full px-4 py-2.5 text-sm font-semibold font-body"
            >
              <Send className="h-4 w-4" />
              Telegram @ai0090012
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
