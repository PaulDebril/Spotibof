export async function getTopArtists(page: number = 1,) {

    const res = await fetch(
        `http://ws.audioscrobbler.com/2.0/?format=json&method=chart.getTopArtists&api_key=62ba5f4a31fc47fdba6cc0639148fbab&page=${page}`,
        {
            method: 'GET',
            redirect: 'follow',
            next: {
                revalidate: 60
            }
        })
        .then(response => response.json())
        .catch(error => console.log('error', error));

    if (res.error) {
        return {
            message: res.message,
            status: 'error'
        }
    }

    return res.artists.artist;
}