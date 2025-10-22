"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState<boolean>(false);
  return (
    <div className="flex flex-col h-svh justify-center items-center relative">
      <GL hovering={hovering} />

      <div className="text-center relative z-10">
        <Pill 
          className="mb-6 text-white"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          BETA RELEASE
        </Pill>
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl font-sentient text-white"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          DomaLens
        </h1>
        <p 
          className="font-mono text-sm sm:text-base  text-balance mt-10 max-w-[440px] mx-auto text-white"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Where domain traits meet market intelligence.
        </p>
        
        <div className="mt-6 max-w-[520px] mx-auto">
          <p 
            className="font-mono text-xs sm:text-sm text-white/80 text-balance leading-relaxed"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Stay Ahead of the curve, track domain , and make data-driven decisions 
            with our comprehensive suite of AI-powered tools and bots.
          </p>
        </div>

        <Link className="contents max-sm:hidden" href="/dashboard">
          <Button
            className="mt-12 rounded-2xl px-6 py-4"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Access Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
