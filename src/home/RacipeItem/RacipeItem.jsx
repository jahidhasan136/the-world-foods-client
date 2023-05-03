import React from 'react';
import racipeBackImage from '../../assets/racipeback.jpg'
import { Rating } from '@mui/material';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const RacipeItem = ({ item }) => {

    const { name, cooking_method, ingredients, rating } = item

    return (
        <div className="card bg-base-100 shadow-xl image-full mb-5 h-[500px]">
            <figure><img className='image-full w-full' src={racipeBackImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl mb-8">{name}</h2>
                <p>{cooking_method}</p>
                <p><span className='font-bold'>ingredients:</span> <br /> {ingredients}</p>
                <div className='flex justify-between items-center'>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                    />
                    <button className='btn gap-2 text-yellow-500'><FaRegHeart className='text-lg'></FaRegHeart> favourit</button>
                </div>
            </div>
        </div>
    );
};

export default RacipeItem;