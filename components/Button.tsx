import React from "react";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  yellow = false,
  ghost = false,
  clipped = true,
  className = "",
  href,
}: {
  children: React.ReactNode;
  yellow?: boolean;
  ghost?: boolean;
  clipped?: boolean;
  className?: string;
  href?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 ${clipped ? "clip-corner" : ""} ${
    yellow
      ? "bg-[#e3c541] text-[#1b3a1f] hover:bg-[#ead566]"
      : ghost
      ? "border-2 border-[#1b3a1f] bg-transparent text-[#1b3a1f] hover:bg-[#1b3a1f] hover:text-white"
      : "bg-[#1b3a1f] text-white hover:bg-[#305e2f]"
  } ${className}`;

  const content = (
    <>
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return <button className={classes}>{content}</button>;
}