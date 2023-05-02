import React from 'react';
import banner from '../../assets/banner.jpg'
import ChefSection from '../ChefSection/ChefSection';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-10 lg:flex items-center gap-10'>
                <div>
                    <h1 className='text-7xl font-bold mb-5'>Enjoy food all over the world</h1>
                    <p className='text-justify text-gray-500'>The flavor of your food is what most customers focus on when they are deciding what to eat. The way you engineer your menu can help build anticipation, and a good menu description could even convince a hesitant customer to try something new. With this in mind, it's important to be precise and thorough when choosing words to describe your food's flavor.</p>
                </div>
                <img className='w-[500px]' src={banner} alt="" />
            </div>
            <ChefSection></ChefSection>
        </div>
    );
};

export default Home;