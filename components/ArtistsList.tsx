import {getTopArtists} from "@/lib/services";
import {artist} from "@/types";

export default async function ArtistsList() {
    const data = await getTopArtists()

    if (!data) {
        return <main>
            <h1>Top Artists</h1>
            <p>Loading...</p>
        </main>
    }

    if (data.status == "error") {
        return <main>
            <h1>Top Artists</h1>
            <p>Error: {data.message}</p>
        </main>
    }

    return <main>
        <ul>
            {data.map((artist: artist) => (
                <li key={artist.mbid}>
                    <a href={artist.mbid}>{artist.name}</a>
                </li>
            ))}
        </ul>
    </main>
}