import { useState } from 'react';
import GifGrid from "./components/GifGrid";
import GifSearch from "./components/GifSearch";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["one punch"]);

    const onAddCategory = newCategory => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <main>
            <h1 className="title">GifExpertApp</h1>
            <GifSearch onNewCategory={onAddCategory} />
            {categories.map(category => <GifGrid key={category} category={category} />)}
        </main>
    );
}

export default GifExpertApp;