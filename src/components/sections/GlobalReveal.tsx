
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const selector = [
      "main > section",
      "main section",
      "main article",
      "main .grid > *",
      "main [data-reveal]",
    ].join(", ");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );

    const uniqueElements = Array.from(new Set(elements));

    uniqueElements.forEach((element) => {
      element.classList.add("ca-auto-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ca-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
       rootMargin: "0px 0px -60px 0px",
      }
    );

    uniqueElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      uniqueElements.forEach((element) => {
        element.classList.remove(
          "ca-auto-reveal",
          "ca-revealed"
        );
      });
    };
  }, [pathname]);

  return null;
}
