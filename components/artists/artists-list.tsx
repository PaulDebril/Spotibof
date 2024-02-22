import { madeForYouAlbums } from "../../app/data/albums";
import { ScrollArea } from "../ui/scroll-area";
import { ArtistsCards } from "./artists-cards";

export default function ArtistsList() {
  return (
    <>
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {madeForYouAlbums.map((album) => (
              <ArtistsCards
                key={album.name}
                album={album}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
