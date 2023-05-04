import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefInformation from '../ChefInformation/ChefInformation';

const ChefSection = () => {

    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('https://the-world-of-food-server-nurmorshed7987-gmailcom.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 gap-5 mt-20">
            {
                chef.map(chefInformation => <ChefInformation key={chefInformation.id} chefInformation={chefInformation}></ChefInformation>)
            }
        </div>
    );
};

export default ChefSection;