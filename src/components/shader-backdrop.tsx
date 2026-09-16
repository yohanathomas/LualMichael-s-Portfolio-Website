import { Suspense, lazy, useEffect, useState } from "react";

const ShaderGradient = lazy(() => import("./shader-gradient"));

/**
 * Fixed, full-viewport animated shader backdrop.
 * Renders only after hydration (WebGL is browser-only).
 */
export function ShaderBackdrop() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setReady(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 bg-background pointer-events-none"
    >
      {ready ? (
        <Suspense fallback={null}>
          <ShaderGradient />
        </Suspense>
      ) : null}
      <div className="absolute inset-0 bg-background/35" />
    </div>
  );
}
