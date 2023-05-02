import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefSection = () => {

    const [chef, setChef] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }, [])    

    return (
        <div>

        </div>
    );
};

export default ChefSection;