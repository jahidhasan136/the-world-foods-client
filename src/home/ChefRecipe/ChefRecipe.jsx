import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {

    const chefRacipe = useLoaderData()
    console.log(chefRacipe)

    const { id, name, picture, racipe, years_of_experience, likes, bio } = chefRacipe

    return (
        <div>
            <div className="bg-base-200 my-10">
                <img className="w-56 rounded-full" src={picture} alt="" />
                <h3>{name}</h3>
                <p>Racipe: {racipe}</p>
                <p>Experience: {years_of_experience}</p>
                <p>{likes}</p>
                <p>{bio}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ChefRecipe;