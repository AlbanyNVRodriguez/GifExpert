import { useEffect, useState } from "react";
import getGifs from "../helpers/getGif";

export const useFetchGifs = (category) => {
    
    const [gifs, setGifs] = useState([]);

    const allGifs = async () => {
        let res = await getGifs(category);
        setGifs(res);
    };

    useEffect(() => {
        allGifs();
    }, []);

    return {
        gifs
    }
}
