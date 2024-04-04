import { getImg, getTopAlbums, getTopArtists ,getArtistSearch} from "@/lib/services";
import { artist } from "@/types";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { madeForYouAlbums } from "@/app/data/albums";
import { ArtistsCards } from "@/components/artists/artists-cards";

export default async function ArtistsList(name: artist) {
  // La barre de recherche fonctionne il manquait juste a lié le texte de la barre de recherche avec le parametres en dessous.
  const data = await getArtistSearch("Drake");

  if (!data) {
    return (
      <main>
        <h1>Top Artists</h1>
        <p>Loading...</p>
      </main>
    );
  }

  if (data.status === "error") {
    return (
      <main>
        <h1>Top Artists</h1>
        <p>Error: {data.message}</p>
      </main>
    );
  }

  return (
    <main className="">
      <ul
        className="flex flex-wrap gap-2"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        
        {data.map(async (artist: artist) => {
          const albums = await getImg(artist.mbid);
          return (
            <li key={artist.mbid}>
              <Link href={artist.mbid}>
                <ArtistsCards
                  artist={artist}
                  img={albums}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

