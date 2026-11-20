import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n';

/**
 * Section heading used by every section, so they all read as one set:
 *   <SectionHeading eyebrow="บริการ" title="บริการ" highlight="ครบวงจร" subtitle="..." />
 * `highlight` is drawn in the orange gradient after `title` (pass `highlightFirst` to put it first);
 * a space goes between them in English, and in Thai only next to Latin text.
 * `dark` switches text colours for use on .section-dark. `align="left"` for side-by-side layouts.
 */
export function SectionHeading({ eyebrow, title, highlight, highlightFirst = false, subtitle, dark = false, align = 'center', className = '' }) {
  const { lang } = useLang();
  // Thai runs words together, but still spaces before/after Latin text ("เลือก KB SOLAR")
  const first = highlightFirst ? highlight : title;
  const second = highlightFirst ? title : highlight;
  const latinEdge = /[A-Za-z0-9]$/.test(String(first || '')) || /^[A-Za-z0-9]/.test(String(second || ''));
  const gap = lang === 'en' || latinEdge ? ' ' : '';
  const center = align === 'center';
  const hl = highlight ? <span className="text-kb-gradient">{highlight}</span> : null;
  return (
    <motion.div
      className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-10 lg:mb-14 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-4 ${
          dark ? 'bg-white/10 text-orange-300 border border-white/10' : 'bg-orange-50 text-kb-orange-dark border border-orange-100'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-kb-orange" />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${dark ? 'text-white' : 'text-kb-dark'}`}>
        {highlightFirst && hl}{highlightFirst && title && hl ? gap : ''}{title}{!highlightFirst && title && hl ? gap : ''}{!highlightFirst && hl}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'} ${center ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/**
 * Number that counts up the first time it scrolls into view.
 * Accepts strings like "150,000", "4-6", "70", "12.5": the last number in the string counts,
 * the rest is kept as written (so "4-6" counts 4-0 → 4-6). Non-numeric values render as-is.
 */
export function CountUp({ value, duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const str = String(value);
  const match = str.match(/(\d[\d,]*\.?\d*)(?!.*\d)/);
  const [shown, setShown] = useState(match && !reduce ? str.replace(match[1], '0') : str);

  useEffect(() => {
    if (!match || reduce || !inView) {
      if (reduce || !match) setShown(str);
      return;
    }
    const target = parseFloat(match[1].replace(/,/g, ''));
    const decimals = (match[1].split('.')[1] || '').length;
    const comma = match[1].includes(',');
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      const n = target * eased;
      const txt = comma ? n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
                        : n.toFixed(decimals);
      setShown(str.replace(match[1], txt));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, str, reduce, duration]);

  return <span ref={ref} className={className}>{shown}</span>;
}
