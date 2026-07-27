"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  itemId: string;
  label: string;
  className: string;
  wrapperClassName?: string;
  messageClassName?: string;
};

export default function CheckoutButton({
  itemId,
  label,
  className,
  wrapperClassName = "flex flex-col items-end gap-2",
  messageClassName = "max-w-[260px] text-right text-xs text-red-400",
}: CheckoutButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleClick() {
    setStatus("loading");
    setMessage(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Não foi possível iniciar o pagamento.");
        return;
      }

      window.location.href = data.url;
    } catch {
      setStatus("error");
      setMessage("Não foi possível conectar ao pagamento. Tente novamente.");
    }
  }

  return (
    <div className={wrapperClassName}>
      <button type="button" onClick={handleClick} disabled={status === "loading"} className={className}>
        {status === "loading" ? "Redirecionando…" : label}
      </button>
      {status === "error" && message && <p className={messageClassName}>{message}</p>}
    </div>
  );
}
