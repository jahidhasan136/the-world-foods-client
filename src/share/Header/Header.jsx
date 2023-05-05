import React, { useContext, useState } from 'react';
import userImage from '../../assets/user.png'
import foodWorld from '../../assets/foodworld.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import ActiveLink from '../../pages/ActiveLink/ActiveLink';
import { useEffect } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {

    const { user, logout } = useContext(AuthContext)
    const [navState, setNavState] = useState(false);
    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }


    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <div className={`fixed w-full z-50 transition-all duration-200 ease-in-out ${navState ? 'bg-[#00000070] text-white' : 'rounded-lg bg-base-200 z-10 w-full fixed'}`}>
            <div className="relative container md:mx-auto navbar">
                <div className="flex-1">
                    <img className='w-28' src={foodWorld} alt="" />
                </div>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true
                                ?
                                <IoClose className="w-7 h-7"></IoClose>
                                :
                                <IoMenu className="w-7 h-7"></IoMenu>
                        }
                    </span>
                </div>

                {/* desktop responsive */}

                <div className="md:flex gap-5 hidden">
                    <div className='md:flex gap-5 font-bold'>
                        <ActiveLink className='btn btn-ghost font-bold' to="/">Home</ActiveLink>
                        <ActiveLink className='btn btn-ghost font-bold' to="/blog">Blog</ActiveLink>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            user ?
                                <div className="md:dropdown dropdown-hover relative md:text-black">
                                        {
                                            user ? <img src={user?.photoURL} tabIndex={0} className="w-10 rounded-full" /> :
                                                <img src={userImage} tabIndex={0} className="w-10 rounded-full" />
                                        }
                                    <ul tabIndex={0} className="dropdown-content absolute transition-all duration-300 right-0 top-10 menu p-5 shadow md:bg-base-100">
                                        <li>{user?.displayName}</li>
                                        <li>
                                            <button onClick={handleLogout} className='btn btn-ghost mt-4'>logout</button>
                                        </li>
                                    </ul>
                                </div> 
                                :

                                <Link className='btn btn-ghost' to="/login">login</Link>
                        }
                    </div>
                </div>

                        {/* mobile responsive  */}

                <div className={`flex-col gap-5 absolute  bg-[#000000a5] top-0 px-8 items-center pt-28 w-64 h-screen text-white flex md:hidden transition-all duration-300 ease-in-out ${open ? 'left-0' : '-left-64'}`}>
                    <div className='md:flex grid gap-5 font-bold'>
                        <ActiveLink className='btn btn-ghost font-bold' to="/">Home</ActiveLink>
                        <ActiveLink className='btn btn-ghost font-bold' to="/blog">Blog</ActiveLink>
                    </div>
                    <div className='flex items-center gap-6'>
                        {
                            user ?
                                <div className="grid gap-5">
                                        {
                                            user ? <img src={user?.photoURL} tabIndex={0} className="w-10 mx-auto rounded-full" /> :
                                                <img src={userImage} tabIndex={0} className="w-10 rounded-full mx-auto" />
                                        }
                                    <ul className='text-center'>
                                        <li>{user?.displayName}</li>
                                        <li>
                                            <button onClick={handleLogout} className='btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:text-white mt-4'>logout</button>
                                        </li>
                                    </ul>
                                </div> 
                                :

                                <Link className='btn btn-ghost' to="/login">login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;