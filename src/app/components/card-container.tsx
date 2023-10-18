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
        filter: ["blur(10px)", "blur(0px)"],
        clipPath: [
          "polygon(0% 0%, 0% 0%, -200% 100%, 0% 100%)",
          "polygon(0% 0%, 250% 0%, 100% 100%, 0% 100%)",
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
