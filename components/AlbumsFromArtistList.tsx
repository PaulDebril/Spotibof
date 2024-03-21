
import { getTopAlbums, getTopArtists } from "@/lib/services";

interface AlbumsFromArtistListProps {
    mbid: string;
}

export default async function AlbumsFromArtistList({
    mbid,
}: AlbumsFromArtistListProps) {
    const data = await getTopAlbums(mbid);

    if (!data) {
        return (
            <main>
                <p>Loading...</p>
            </main>
        );
    }

    if (data.status == "error") {
        return (
            <main>
                <p>Error: {data.message}</p>
            </main>
        );
    }

    return (
        <main>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', justifyContent: 'center' }}>
                {data.map((album: any) => (
                    <li key={album.mbid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img alt="" src={album.image} style={{ width: '150px', height: '150px' }} />
                        <p style={{ textAlign: 'center' }}>{album.name} </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}