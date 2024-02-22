import { getTopArtists } from "@/lib/services";
import { artist } from "@/types";
import Link from "next/link";
import { ArtistsCards } from "./artists/artists-cards";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { listenNowAlbums } from "../app/data/albums";

export default async function ArtistsList() {
  const data = await getTopArtists();

  if (!data) {
    return (
      <main>
        <h1>Top Artists</h1>
        <p>Loading...</p>
      </main>
    );
  }

  if (data.status == "error") {
    return (
      <main>
        <h1>Top Artists</h1>
        <p>Error: {data.message}</p>
      </main>
    );
  }

  return (
    <main>
      <ul>
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {data.map((artist: artist) => (
                <ArtistsCards
                  album={listenNowAlbums[0]}
                  key={artist.name}
                  artist={artist}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </ul>
    </main>
  );
}
