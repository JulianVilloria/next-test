import spotifyAuth from "@/app/auth/spotifyAuth";
import CardContainer from "./card-container";
const ytsr = require("ytsr");

async function fetchNewReleases(token: string) {
  const res = await fetch(
    "https://api.spotify.com/v1/browse/new-releases?country=AR",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
}

export default async function NewReleases() {
  const credentials = await spotifyAuth();
  const newReleases = await fetchNewReleases(credentials.access_token);
  newReleases.albums.items.splice(8);

  const youtubeUrls = newReleases.albums.items.map(async (item: any) => {
    const filters = await ytsr.getFilters(item.name);
    const filter = filters.get("Type").get("Video");
    const search = await ytsr(filter.url, {
      pages: 1,
      gl: "AR",
      hl: "ES",
      limit: 1,
    });
    const youtubeUrl = search.items?.at(0)?.url;

    return { ...item, youtubeUrl };
  });

  const items = await Promise.all(youtubeUrls);

  return (
    <>
      <CardContainer items={items} />
    </>
  );
}
