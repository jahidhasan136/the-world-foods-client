import React, { useContext, useState } from 'react';
import userImage from '../../assets/user.png'
import foodWorld from '../../assets/foodworld.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import ActiveLink from '../../pages/ActiveLink/ActiveLink';
import { useEffect } from 'react';

const Header = () => {

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    const [navState, setNavState] = useState(false);

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
            <div className="container mx-auto navbar">
                <div className="flex-1">
                    <img className='w-28' src={foodWorld} alt="" />
                </div>
                <div className="flex-none gap-5">
                    <div className='flex gap-5 font-bold'>
                        <ActiveLink className='btn btn-ghost font-bold' to="/">Home</ActiveLink>
                        <ActiveLink className='btn btn-ghost font-bold' to="/blog">Blog</ActiveLink>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            user ?
                                <div className="dropdown dropdown-hover relative text-black">
                                    {
                                        user ? <img src={user?.photoURL} tabIndex={0} className="w-10 rounded-full" /> :
                                            <img src={userImage} tabIndex={0} className="w-10 rounded-full" />
                                    }
                                    <ul tabIndex={0} className="dropdown-content absolute transition-all duration-300 right-0 top-10 menu p-5 shadow bg-base-100">
                                        <li>{user?.displayName}</li>
                                        <li>
                                            <button onClick={handleLogout} className='btn btn-ghost mt-4'>logout</button>
                                        </li>
                                    </ul>
                                </div> :
                                <Link className='btn btn-ghost' to="/login">login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;