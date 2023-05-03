import React from 'react';
import { useLoaderData } from 'react-router-dom';
import racipeBackImage from '../../assets/racipeback.jpg'
import RacipeItem from '../RacipeItem/RacipeItem';

const ChefRecipe = () => {

    const chefRacipe = useLoaderData()
    console.log(chefRacipe)

    const { id, name, picture, racipe, years_of_experience, likes, bio, racipe_list } = chefRacipe

    return (
        <div className='container mx-auto flex justify-between'>
            <div className="bg-base-200 mt-44 w-[400px] rounded-full relative">
                <div className='flex justify-center'>
                    <img className="w-56 rounded-full absolute -mt-28" src={picture} alt="" />
                </div>
                <h3>{name}</h3>
                <p>Racipe: {racipe}</p>
                <p>Experience: {years_of_experience}</p>
                <p>{likes}</p>
                <p>{bio}</p>
            </div>
            <div className='w-[700px]'>
                {
                    racipe_list.map((item, index) => <RacipeItem key={index} item={item}></RacipeItem>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;