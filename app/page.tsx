import ArtistsList from "../components/artists/artists-list";
import { ScrollArea } from "../components/ui/scroll-area";
import { madeForYouAlbums } from "./data/albums";

export default function Home() {
  return (
    <>
      <ArtistsList />
    </>
  );
}
