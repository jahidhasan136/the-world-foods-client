import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="container mx-auto navbar rounded-lg bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl font-bold">Food World</a>
            </div>
            <div className="flex-none gap-2">
                <div className='px-5 flex gap-5'>
                    <a className='btn btn-ghost font-bold' href="">Home</a>
                    <a className='btn btn-ghost font-bold' href="">Blog</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
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