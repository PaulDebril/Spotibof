
import { getTopAlbums, getTopArtists, getArtistInfo } from "@/lib/services";

interface AlbumsFromArtistListProps {
    mbid: string;
}

export default async function AlbumsFromArtistList({
    mbid,
}: AlbumsFromArtistListProps) {
    const data = await getTopAlbums(mbid);
    const ArtistInfo = await getArtistInfo(mbid);


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
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', border: '1px solid #ddd', padding: '20px', margin: '20px auto', width: '80%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: '10px 0', color: '#000', fontSize: '24px', fontWeight: 'bold' }}>{ArtistInfo.name}</p>
            <p style={{ margin: '10px 0', fontSize: '18px', color: '#007BFF' }}>Streamable: {ArtistInfo.streamable}</p>
            <p style={{ margin: '10px 0', fontSize: '16px', color: '#555' }}>Auditeurs: {ArtistInfo.stats.listeners}</p>
            <p style={{ margin: '10px 0', fontSize: '14px', color: '#666', textAlign: 'justify' }}>Biographie: {ArtistInfo.bio.summary}</p>
        </div>


            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', justifyContent: 'center' }}>
                {data.map((album: any) => (
                    <li key={album.mbid} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img alt="" src={album.image[2]['#text']} style={{ width: '150px', height: '150px' }} />
                        <p style={{ textAlign: 'center' }}>{album.name} </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}