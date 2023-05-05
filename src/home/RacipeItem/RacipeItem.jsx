import React, { useState } from 'react';
import racipeBackImage from '../../assets/racipeback.jpg'
import { Rating } from '@mui/material';
import { FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RacipeItem = ({ item }) => {


    const [favourite, setFavourite] = useState(false)

    const { name, cooking_method, ingredients, rating } = item


    const handleFavourite = () => {
        if (!favourite) {
            toast("favourit done")
        }
        setFavourite(true)
    }

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
                    <div>
                        <button onClick={handleFavourite} className={favourite ? 'btn rounded gap-2 bg-gray-700 hover:bg-gray-700  cursor-default text-yellow-500' : 'btn bg-black rounded gap-2 text-yellow-500'} ><FaRegHeart className='text-lg'></FaRegHeart> favourit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RacipeItem;