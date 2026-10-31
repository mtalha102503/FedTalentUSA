"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Navigation finished — hide the bar
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      // Only internal links, not new-tab or same-page anchors
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        a.target !== "_blank" &&
        !e.metaKey &&
        !e.ctrlKey
      ) {
        setLoading(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1">
      <div className="h-full w-full origin-left animate-pulse bg-blue-600" />
    </div>
  );
}
