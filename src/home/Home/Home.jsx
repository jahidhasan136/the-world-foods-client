import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../../assets/3071125.jpg';
import banner2 from '../../assets/5907476.jpg';
import ChefSection from '../ChefSection/ChefSection';
import Footer from '../../share/Footer/Footer';
import ChefQualification from '../ChefQualification/ChefQualification';
import BestSpecialties from '../../pages/BestSpecialties/BestSpecialties';

const Home = () => {

    const carouselItems = [
        {
            id: 1,
            image: banner1,
            caption: 'Banner 1',
            description: 'This is the first banner.',
        },
        {
            id: 2,
            image: banner2,
            caption: 'Banner 2',
            description: 'This is the second banner.',
        },
        // {
        //   id: 3,
        //   image: banner3,
        //   caption: 'Banner 3',
        //   description: 'This is the third banner.',
        // },
    ];

    return (
            <div  className="container mx-auto pt-40 px-4 md:px-8 lg:px-16 xl:px-20">
                <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop interval={6000}>
                    {carouselItems.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.caption} className="bg-cover rounded-md h-[600px] w-full" />
                        </div>
                    ))}
                </Carousel>
                <ChefSection></ChefSection>
                <ChefQualification></ChefQualification>
                <BestSpecialties></BestSpecialties>
            </div>
    );
};

export default Home;