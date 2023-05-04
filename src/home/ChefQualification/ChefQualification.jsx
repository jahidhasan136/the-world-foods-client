import React from 'react';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

const ChefQualification = () => {
    return (
        <div className='mt-20 grid justify-center'>
            <h2 className='font-bold text-5xl lg:text-center'>Educational Qualification</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Zhang Wei</h2>
                        <p>Degree: Bachelor of Culinary Arts</p>
                        <div className="card-actions rating justify-end">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
                    <figure><img className='w-full' src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Liu Ming</h2>
                        <p>Degree: Master of Chinese Cuisine</p>
                        <div className="card-actions rating justify-end">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
                    <figure><img className='w-full' src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wang Ying</h2>
                        <p>Degree: Doctor of Gastronomy</p>
                        <div className="card-actions rating justify-end">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefQualification;