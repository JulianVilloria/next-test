"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ArtistCard({
  item,
  youtubeUrl,
}: {
  item: any;
  youtubeUrl: string;
}) {
  return (
    <>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{item.name}</p>
          <small className="text-default-500">
            Tracks: {item.total_tracks}
          </small>
          <h4 className="font-bold text-large">{item.artists[0].name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible place-content-center py-2">
          <Link
            href={{
              pathname: "/video",
              query: { youtubeUrl },
            }}
          >
            <Image
              alt="Card Image"
              className="object-cover rounded-xl"
              src={item.images[1].url}
              width={item.images[1].width + 100}
              height={item.images[1].width}
            />
          </Link>
        </CardBody>
      </Card>
    </>
  );
}
