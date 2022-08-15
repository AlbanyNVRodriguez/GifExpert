import { useState } from 'react';


const GifSearch = ({ onNewCategory }) => {

    const [searchValue, setSearchValue] = useState("");

    const handlerSearch = ({ target }) => setSearchValue(target.value);

    const handlerForm = (e) => {
        e.preventDefault();

        let newCategory = searchValue.trim();

        if (newCategory.length < 1) return;
        
        onNewCategory(newCategory);
        setSearchValue("");
    };

    return (
        <form onSubmit={handlerForm}>
            <input
                type="search"
                className="gifSearch"
                name="gifSearch"
                placeholder="Buscar..."
                onChange={handlerSearch}
                value={searchValue}
            />
        </form>
    );
}

export default GifSearch;