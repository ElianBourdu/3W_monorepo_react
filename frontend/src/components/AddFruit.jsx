import axios from 'axios';
import { useState } from 'react';

const AddFruit = () => {
 const [fruitName, setFruitName] = useState('');

const handleFruitName = (e) => {
    setFruitName(e.target.value);
}

 const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/agriculteurs/6539036feaea58098bac6392/fruits',{fruits: fruitName}).then(response=>console.log(response))

 }


    return (
        <form onSubmit={handleSubmit}>
            <label > Nom du Fruit :
                <input type="text" value={fruitName} onChange={handleFruitName} />
            </label>
            <button>Ajouter le Fruit</button>

        </form>
    );
}

export default AddFruit;