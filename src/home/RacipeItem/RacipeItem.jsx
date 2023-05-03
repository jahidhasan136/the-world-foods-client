import React from 'react';
import racipeBackImage from '../../assets/racipeback.jpg'

const RacipeItem = ({ item }) => {

    const {name, cooking_method, ingredients, rating} = item

    return (
        <div className="card bg-base-100 shadow-xl image-full mb-5">
            <figure><img src={racipeBackImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{cooking_method}</p>
            </div>
        </div>
    );
};

export default RacipeItem;