"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function ArtistCard({ item }: { item: any }) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{item.name}</p>
        <small className="text-default-500">Tracks: {item.total_tracks}</small>
        <h4 className="font-bold text-large">{item.artists[0].name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card Image"
          className="object-cover rounded-xl"
          src={item.images[1].url}
          width={item.images[1].width}
          height={item.images[1].width}
        />
      </CardBody>
    </Card>
  );
}
