// components/ui/tabs.jsx
"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export function Tabs({ className, orientation = "vertical", ...props }) {
  return (
    <TabsPrimitive.Root
      orientation={orientation}
      className={cn("flex flex-col xl:mt-12", className)}
      {...props}
    />
  );
}

export function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      className={cn(
        "flex w-full gap-4 data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex w-full items-center justify-center",
        "h-12 rounded-xl px-6 text-base font-medium tracking-wide",
        "bg-[#27272c] text-white/90 transition-all",
        "data-[state=active]:bg-accent data-[state=active]:text-primary",
        "hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent/50",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}
