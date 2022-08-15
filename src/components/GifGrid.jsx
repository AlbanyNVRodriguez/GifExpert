import { useFetchGifs } from '../hooks/useFetchGifs';
import GifElement from "./GifElement";


const GifGrid = ({ category }) => {

    const {gifs} = useFetchGifs(category);

    return (
        <div className="gifGrid">
            <h3>{category}</h3>
            {gifs.length < 1 ? "cargando..." : gifs.map( el => <GifElement key={el.id} {...el}/>) }
        </div>
    );
}

export default GifGrid;