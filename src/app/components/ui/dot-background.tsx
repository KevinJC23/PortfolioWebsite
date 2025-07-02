import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface DotBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function DotBackgroundDemo({ children, className }: DotBackgroundProps) {
  return (
    <div className={ cn("relative w-screen min-h-screen bg-white dark:bg-black overflow-x-hidden", className) }>
      <div
        className={cn(
          "absolute inset-0 min-h-screen",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      
      { /* Radial gradient for the container to give a faded look */ }
      { /* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */ }
      { /* Content Area */ }
      <div className="relative z-10 min-h-screen">
        { children }
      </div>
    </div>
  );
}