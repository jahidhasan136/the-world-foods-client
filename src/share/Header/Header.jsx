import React from 'react';
import user from '../../assets/user.png'
import Home from '../../home/Home/Home';

const Header = () => {
    return (
        <div className="container mx-auto navbar rounded-lg bg-sky-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl font-bold">Food World</a>
            </div>
            <div className="flex-none">
                <div className='flex gap-5'>
                    <a className='btn btn-ghost font-bold' href="">Home</a>
                    <a className='btn btn-ghost font-bold' href="">Blog</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <img className='w-16' src={user} alt="" />
                            <ul className="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;