"use client";

import { useState, type ReactNode } from "react";

type BrowserFrameProps = {
  domain: string;
  children: ReactNode;
};

export default function BrowserFrame({ domain, children }: BrowserFrameProps) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-4 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setDevice("desktop")}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
            device === "desktop"
              ? "bg-white text-neutral-950"
              : "border border-white/15 text-neutral-300 hover:bg-white/10"
          }`}
        >
          Desktop
        </button>
        <button
          type="button"
          onClick={() => setDevice("mobile")}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
            device === "mobile"
              ? "bg-white text-neutral-950"
              : "border border-white/15 text-neutral-300 hover:bg-white/10"
          }`}
        >
          Celular
        </button>
      </div>

      <div
        className={`mx-auto overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl shadow-black/50 transition-[max-width] duration-300 ${
          device === "mobile" ? "max-w-sm" : "max-w-5xl"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-white/10 bg-neutral-800 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-neutral-950/60 px-3 py-1 text-xs text-neutral-400">
            <span aria-hidden>🔒</span>
            <span className="truncate">{domain}</span>
          </div>
        </div>
        <div className="max-h-[70vh] overflow-y-auto bg-white">{children}</div>
      </div>
    </div>
  );
}
