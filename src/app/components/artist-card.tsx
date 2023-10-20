"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArtistCard({ item }: { item: any }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        zIndex: 99999,
      }}
      className="cursor-pointer"
    >
      <Link
        href={{
          pathname: "/video",
          query: { youtubeUrl: item.youtubeUrl },
        }}
      >
        <Card className="py-4 opacity-0 transform-gpu card">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{item.name}</p>
            <small className="text-default-500">
              Tracks: {item.total_tracks}
            </small>
            <h4 className="font-bold text-large">{item.artists?.at(0).name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible place-content-center py-2">
            <Image
              alt="Card Image"
              className="object-cover rounded-xl"
              src={item.images[1].url}
              width={item.images[1].width + 100}
              height={item.images[1].width}
            />
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
}
