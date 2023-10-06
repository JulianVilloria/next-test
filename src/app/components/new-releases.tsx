import spotifyLogin from "@/app/auth/callbacks/spotify";
import ArtistCard from "./artists-card";

async function fetchNewReleases(token: any) {
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
  const auth = await spotifyLogin();
  const newReleases = await fetchNewReleases(auth.access_token);
  console.log(newReleases);

  return (
    <>
      {newReleases.albums.items.map((item: any) => (
        <ArtistCard key={item.id} item={item} />
      ))}
    </>
  );
}
