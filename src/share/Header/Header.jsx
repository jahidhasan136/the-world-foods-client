import React from 'react';
import user from '../../assets/user.png'
import foodWorld from '../../assets/foodworld.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="rounded-lg bg-base-200">
            <div className="container mx-auto navbar">
                <div className="flex-1">
                    <img className='w-28' src={foodWorld} alt="" />
                </div>
                <div className="flex-none">
                    <div className='flex gap-5'>
                        <Link className='btn btn-ghost font-bold' to="/">Home</Link>
                        <a className='btn btn-ghost font-bold' href="">Blog</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li tabIndex={0}>
                                <img className='w-16' src={user} alt="" />
                                <Link to="/login">Login</Link>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;