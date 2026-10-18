import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

export function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} />
      <div className="prose-essay mx-auto max-w-3xl px-5 [&>p:first-of-type]:first-letter:float-none [&>p:first-of-type]:first-letter:text-[1em]">{children}</div>
    </>
  );
}
