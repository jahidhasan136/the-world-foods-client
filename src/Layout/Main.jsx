import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../share/Header/Header';
import Footer from '../share/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { ClipLoader } from 'react-spinners';

const Main = () => {

    const { loader } = useContext(AuthContext)
    let content;
    if (loader) {
        content = <ClipLoader color="#36d7b7" />
    }
    else if (!loader) {
        content = <Outlet></Outlet>
    }

    return (
        <div>
            <Header></Header>
            {content}
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;