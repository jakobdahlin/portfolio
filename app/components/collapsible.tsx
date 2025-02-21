"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Collapsible({ title, children, defaultOpen = false, className = "" }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`w-full ${className}`}> {/* Ensure className is applied */}
      <button
        className="flex w-full items-center justify-between rounded-lg 
        border border-neutral-700 px-4 py-3 text-left text-white hover:bg-zinc-800 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>

      <div className={`w-full transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="w-full px-6 py-4 rounded-b-lg text-netural-700">{children}</div>
      </div>
    </div>
  );
}
