export default async function getGifs(category) {
    let limit = 5;
    let language = `es`;
    const apiKey = `Ac1VxFCOdHMic5ChkegaEHvwfinCm7yX`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}&lang=${language}`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(gif => ({
        title: gif.title,
        slug: gif.slug,
        id: gif.id,
        img: gif.images.fixed_height_small.url
    }));

    return gifs;
}