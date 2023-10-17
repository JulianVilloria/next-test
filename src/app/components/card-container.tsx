"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import ArtistCard from "./artist-card";
import { useEffect } from "react";

export default function CardContainer({ items }: { items: any }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".card",
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        clipPath: [
          "polygon(45% 0, 40% 3%, 31% 8%, 25% 12%, 18% 19%, 9% 27%, 0 33%, 0 0)",
          "polygon(45% 0, 100% 0, 75% 24%, 56% 43%, 38% 62%, 20% 80%, 0 100%, 0 0)",
          "polygon(45% 0, 100% 0, 100% 33%, 76% 47%, 39% 73%, 0 100%, 0 53%, 0 0)",
          "polygon(45% 0, 100% 0, 100% 51%, 86% 62%, 55% 84%, 28% 100%, 0 100%, 0 0)",
          "polygon(45% 0, 100% 0, 100% 51%, 100% 75%, 100% 100%, 28% 100%, 0 100%, 0 0)",
        ],
      },
      {
        duration: 2,
        ease: "linear",
        delay: stagger(0.2, { startDelay: 0.1 }),
      }
    );
  }, []);

  return (
    <>
      <motion.div ref={scope} className="grid grid-cols-4 gap-4 p-24">
        {items &&
          items.map((item: any) => <ArtistCard key={item.id} item={item} />)}
      </motion.div>
    </>
  );
}
