"use client";

import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Navbar />
      {children}
    </NextUIProvider>
  );
}
