import ArtistsList from "../components/artists/artists-list";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ScrollArea } from "../components/ui/scroll-area";
import { madeForYouAlbums } from "./data/albums";

export default function Home() {
  return (
    <>
      <Header />
      <ArtistsList />
      <Footer />
    </>
  );
}
