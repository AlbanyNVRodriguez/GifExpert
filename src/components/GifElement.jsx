const GifElement = ({img, slug, title}) => {
    return ( 
        <figure className="gifFigure">
            <img  src={img} alt={slug}/>
            <figcaption>{title}</figcaption>
        </figure>
    );
}

export default GifElement;