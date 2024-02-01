import AlbumsFromArtistList from "@/components/AlbumsFromArtistList";

export default function ArtistPage({ params }: { params: { mbid: string } }) {
    return (
        <>
            <AlbumsFromArtistList mbid={params.mbid}/>
        </>
    )
}