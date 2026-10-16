// templates/<slug>/ds-base.js — loads the Databricks design system base for this template.
(() => {
  const base = '../..';
  for (const p of ['colors_and_type.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  // Optional compiled component bundle (this DS is CSS + slides; bundle may be empty).
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => {/* no components in this design system — safe to ignore */};
  document.head.appendChild(s);
})();