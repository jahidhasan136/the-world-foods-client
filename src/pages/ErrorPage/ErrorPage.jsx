import React from 'react';
import errorImage from '../../assets/error.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
         
        <div className='grid justify-center'>
            <img className='w-[700px]' src={errorImage} alt="" />
            <Link className='btn' to="/">Back to home</Link>
        </div>
    );
};

export default ErrorPage;