import React from 'react';
import { useLoaderData } from 'react-router-dom';
import racipeBackImage from '../../assets/racipeback.jpg'
import RacipeItem from '../RacipeItem/RacipeItem';
import { FaThumbsUp } from 'react-icons/fa';

const ChefRecipe = () => {

    const chefRacipe = useLoaderData()
    console.log(chefRacipe)

    const { id, name, picture, racipe, years_of_experience, likes, bio, racipe_list } = chefRacipe

    return (
        <div className='container mx-auto  mt-32 lg:flex lg:justify-between'>
            <div className="bg-base-200 md:mb-10 lg:w-[400px] md:rounded-xl lg:rounded-full relative">
                <div className='flex justify-center'>
                    <img className="w-56 rounded-full absolute -mt-20" src={picture} alt="" />
                </div>
                <div className='lg:absolute mt-40 p-5 grid gap-3'>
                    <h3 className='font-bold text-2xl mb-5'>{name}</h3>
                    <p><span className='font-bold'>Racipe:</span> {racipe}</p>
                    <p><span className='font-bold'>Experience:</span> {years_of_experience} years</p>
                    <p className='flex items-center gap-2'><span className='font-bold'>likes:</span> <FaThumbsUp className='text-blue-500 cursor-pointer'></FaThumbsUp> {likes}</p>
                    <p className='text-justify'><span className='font-bold'>Description</span> <br /> <span className='text-gray-600'>{bio}</span></p>
                </div>
            </div>
            <div className='lg:w-[1000px] md:mx-auto lg:mx-0'>
                {
                    racipe_list.map((item, index) => <RacipeItem key={index} item={item}></RacipeItem>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;