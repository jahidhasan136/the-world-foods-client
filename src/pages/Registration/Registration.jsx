import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';

const Registration = () => {

    const handleSignup = event => {
        event.preventDefault()
        const from = event.target
        const name = from.name.value
        const photo = from.photo.value
        const email = from.email.value
        const password = from.password.value

        console.log(name, photo, email, password)
    }

    return (
        <div className="heromin-h-screen flex justify-center my-24">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
                    {/* <img className='rounded-md relative' src={login} alt="" /> */}
                    <div className="text-center absolute mt-36 ml-32 text-white lg:text-left">
                        <h1 className="text-5xl font-bold">Login now</h1>
                    </div>
                    <Form className="card-body" onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="write your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="wite your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="write your password" className="input input-bordered" />
                            
                        </div>
                        <p><small>Already Have An Account ? <Link className='font-bold underline text-primary' to='/login'>Login</Link></small></p>
                            <p className='text-red-500 mt-5'><small>error</small></p>
                        <div className="form-control">
                            <button className="btn btn-outline hover:text-yellow-500">Register</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Registration;