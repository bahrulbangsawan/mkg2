import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { faqContent } from "@/data/landing-content";

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="bg-background py-16 sm:py-24" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <h2 className="font-semibold text-3xl text-foreground leading-tight sm:text-4xl lg:text-5xl">
            {faqContent.headline}
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {faqContent.description}
          </p>
          <a
            className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            href="https://wa.me/6281318000611"
            rel="noopener noreferrer"
            target="_blank"
          >
            {faqContent.cta}
          </a>
        </div>

        {/* Accordion */}
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {faqContent.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                className={`overflow-hidden rounded-3xl border ${
                  isOpen ? "border-border bg-muted" : "border-border bg-white"
                }`}
                key={item.id}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  type="button"
                >
                  <span className="pr-4 font-semibold text-foreground text-lg sm:text-xl">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="size-6 shrink-0 text-foreground" />
                  ) : (
                    <ChevronDown className="size-6 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
