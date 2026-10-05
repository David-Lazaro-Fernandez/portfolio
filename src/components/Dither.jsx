"use client";

import { useEffect, useRef, useState } from "react";
import DitherField, { DEFAULTS, REBUILD } from "./DitherField";

const STORAGE_KEY = "dither-params";
// Set to true to show the tuning panel (in development, or with ?dither in the URL).
const SHOW_CONTROLS = false;

// One row for each value: [key, label, min, max, step].
const CONTROLS = [
  ["Grain", [
    ["cell", "Cell (px)", 2, 32, 1],
    ["dot", "Dot (px)", 0.5, 4, 0.25],
    ["alpha", "Opacity", 0, 1, 0.01],
  ]],
  ["Gradient", [
    ["densityEdge", "Edge density", 0, 1, 0.01],
    ["densityCenter", "Center density", 0, 1, 0.01],
    ["fadeCurve", "Fade curve", 0.2, 12, 0.1],
  ]],
  ["Air", [
    ["airRadius", "Radius (px)", 20, 400, 5],
    ["airStrength", "Strength", 0, 8, 0.1],
    ["airIdle", "Idle push", 0, 1, 0.05],
    ["airVelocityGain", "Speed gain", 0, 2, 0.05],
    ["maxDisplacement", "Max travel (px)", 0, 200, 2],
  ]],
  ["Spring", [
    ["spring", "Spring", 0.01, 0.4, 0.01],
    ["damping", "Damping", 0.5, 0.99, 0.01],
  ]],
];

function load() {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") };
  } catch {
    return { ...DEFAULTS };
  }
}

function save(values) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  } catch {}
}

// The dither layer. When SHOW_CONTROLS is true, it also shows the tuning panel.
// The panel keeps the values in localStorage, thus a reload does not reset them.
export default function Dither() {
  const params = useRef(DEFAULTS);
  const rebuild = useRef(null);
  const [values, setValues] = useState(DEFAULTS);
  const [tuning, setTuning] = useState(false);

  useEffect(() => {
    const show =
      SHOW_CONTROLS && (process.env.NODE_ENV !== "production" || new URLSearchParams(location.search).has("dither"));
    setTuning(show);
    if (!show) return;
    const saved = load();
    params.current = saved;
    setValues(saved);
    rebuild.current?.();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--dither-alpha", String(values.alpha));
  }, [values.alpha]);

  function update(key, value) {
    const next = { ...params.current, [key]: value };
    params.current = next;
    setValues(next);
    save(next);
    if (REBUILD.has(key)) rebuild.current?.();
  }

  function reset() {
    params.current = { ...DEFAULTS };
    setValues(params.current);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    rebuild.current?.();
  }

  return (
    <>
      <DitherField params={params} rebuildRef={rebuild} />
      {tuning && <DitherControls values={values} onChange={update} onReset={reset} />}
    </>
  );
}

function DitherControls({ values, onChange, onReset }) {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = `export const DEFAULTS = ${JSON.stringify(values, null, 2).replace(/"(\w+)":/g, "$1:")};`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <aside
      aria-label="Dither settings"
      className="absolute top-4 right-4 z-[60] w-64 rounded-xl border border-hairline bg-elevated/95 font-mono text-xs text-body shadow-lg backdrop-blur"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-3 py-2.5 text-ink uppercase"
      >
        Dither
        <span className="text-mute">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-hairline px-3 pb-3">
          {CONTROLS.map(([group, rows]) => (
            <fieldset key={group} className="mt-3">
              <legend className="mb-1 text-mute uppercase">{group}</legend>
              {rows.map(([key, label, min, max, step]) => (
                <label key={key} className="block py-1">
                  <span className="flex justify-between">
                    <span>{label}</span>
                    <span className="text-ink tabular-nums">{values[key]}</span>
                  </span>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={values[key]}
                    onChange={(e) => onChange(key, Number(e.target.value))}
                    className="mt-1 w-full accent-[var(--color-ink)]"
                  />
                </label>
              ))}
            </fieldset>
          ))}

          <div className="mt-3 flex gap-2">
            <button type="button" onClick={copy} className="flex-1 rounded-md border border-hairline px-2 py-1.5 text-ink hover:bg-hairline-soft">
              {copied ? "Copied" : "Copy values"}
            </button>
            <button type="button" onClick={onReset} className="rounded-md border border-hairline px-2 py-1.5 text-ink hover:bg-hairline-soft">
              Reset
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
