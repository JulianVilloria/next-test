"use client";

import ReactPlayer from "react-player";
import { useSearchParams } from "next/navigation";

export default function ReactPlayerClient() {
  const searchParams = useSearchParams();
  const youtubeUrl = searchParams.get("youtubeUrl");

  return <ReactPlayer url={youtubeUrl ?? ""} />;
}
