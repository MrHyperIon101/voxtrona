"use client";

import * as React from "react";
import clsx from "clsx";

type SectionProps = React.PropsWithChildren<{
  className?: string;
  containerClassName?: string;
  vignette?: boolean;
  id?: string;
}>;

export default function Section({
  children,
  className,
  containerClassName,
  vignette = false,
  id,
}: SectionProps) {
  return (
    <section id={id} className={clsx("relative", className)}>
      {vignette && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.5)_100%)]" />
      )}
      <div className={clsx("relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
