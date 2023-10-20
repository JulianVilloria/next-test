"use client";

import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex justify-center align-middle h-screen dark bg-background">
      <Spinner className="scale-150" color="danger" size="lg" />
    </div>
  );
}
