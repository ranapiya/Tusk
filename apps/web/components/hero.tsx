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
        
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl font-sentient text-white"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Tusk
        </h1>
        <Link href={"/validator"}>
        <Button>
          get started
        </Button></Link>

        
       
       
        
       
      </div>
    </div>
  );
}
