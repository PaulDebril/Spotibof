
import {getTopAlbums, getTopArtists} from "@/lib/services";

interface AlbumsFromArtistListProps {
    mbid: string
}

export default async function AlbumsFromArtistList({mbid}: AlbumsFromArtistListProps) {
    const data = await getTopAlbums(mbid)

    if (!data) {
        return <main>
            <p>Loading...</p>
        </main>
    }

    if (data.status == "error") {
        return <main>
            <p>Error: {data.message}</p>
        </main>
    }

    return <main>
        <ul>
            {data.map((album: any) => (
                <li key={album.mbid}>
                    <p>{album.name}</p>
                </li>
            ))}
        </ul>
    </main>
}