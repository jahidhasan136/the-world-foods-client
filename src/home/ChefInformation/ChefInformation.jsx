import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const ChefInformation = ({ chefInformation }) => {

    const { id, name, years_of_experience, likes, picture, racipe } = chefInformation
    console.log(chefInformation)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className=" w-full" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p><span className="font-medium">Experience:</span> {years_of_experience} years</p>
                <div className="flex card-actions justify-between">
                    <p><span className="font-medium">Racipe:</span> {racipe}</p>
                    <p className="flex items-center gap-1 flex-grow-0"><FaThumbsUp className="text-blue-500 cursor-pointer" /> {likes}</p>
                </div>
                <div className="card-actions mt-3 flex justify-between">
                    <button className="btn btn-outline">Purches</button>
                    <button className="btn btn-outline">
                        <Link to={`/chef/${id}`}>View Recipes</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChefInformation;