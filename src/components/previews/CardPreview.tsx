import type { ComponentType } from "react";

type CardPreviewProps = {
  Preview: ComponentType;
  domain: string;
};

export default function CardPreview({ Preview, domain }: CardPreviewProps) {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-100 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="ml-1 truncate text-[9px] text-neutral-400">{domain}</span>
      </div>
      <div className="pointer-events-none flex-1 overflow-hidden">
        <div style={{ width: "400%", transform: "scale(0.25)", transformOrigin: "top left" }}>
          <Preview />
        </div>
      </div>
    </div>
  );
}
