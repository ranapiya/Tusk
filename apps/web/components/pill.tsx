import { cn } from "@/lib/utils";
import { px } from "./utils";

export const Pill = ({ 
  children, 
  className, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  children: React.ReactNode, 
  className?: string,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void
}) => {
  const polyRoundness = 6
  const hypotenuse = polyRoundness * 2
  const hypotenuseHalf = polyRoundness / 2 - 1.5

  return (
    <div
      style={{
        "--poly-roundness": px(polyRoundness),
      } as React.CSSProperties}
      className={cn("bg-[#262626]/50 transform-gpu font-medium text-foreground/50 backdrop-blur-xs font-mono text-sm inline-flex items-center justify-center px-3 h-8  border border-border [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties} className="absolute inline-block w-[var(--h)] top-[var(--hh)] left-[var(--hh)] h-[2px] -rotate-45 origin-top -translate-x-1/2 bg-border" />
      <span style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties} className="absolute w-[var(--h)] top-[var(--hh)] right-[var(--hh)] h-[2px] bg-border rotate-45 translate-x-1/2" />
      <span style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties} className="absolute w-[var(--h)] bottom-[var(--hh)] left-[var(--hh)] h-[2px] bg-border rotate-45 -translate-x-1/2" />
      <span style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties} className="absolute w-[var(--h)] bottom-[var(--hh)] right-[var(--hh)] h-[2px] bg-border -rotate-45 translate-x-1/2" />

      <span className="relative inline-block size-2.5 rounded-full bg-primary mr-2 shadow-glow shadow-primary/50">
        {/* Spark effects - blinking */}
        <span className="absolute -top-1 -left-1 w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '0.8s' }} />
        <span className="absolute -top-0.5 -right-1 w-0.5 h-0.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.6s' }} />
        <span className="absolute -bottom-1 -left-0.5 w-0.5 h-0.5 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.7s' }} />
        <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '0.9s' }} />
        <span className="absolute top-0.5 -left-2 w-0.5 h-0.5 bg-red-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '0.5s' }} />
        <span className="absolute -top-0.5 right-0.5 w-0.5 h-0.5 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '0.8s' }} />
      </span>

      {children}
    </div>
  );
};
