import React from 'react';
import login from '../../assets/login.jpg'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="heromin-h-screen flex justify-center">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
                    <img className='rounded-md relative' src={login} alt="" />
                    <div className="text-center absolute mt-36 ml-32 text-white lg:text-left">
                        <h1 className="text-5xl font-bold">Login now</h1>
                    </div>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p><small>Don't Have An Account ? <Link className='font-bold underline text-primary' to='/register'>Registration</Link></small></p>
                            <p className='text-red-500 mt-4'><small>error</small></p>
                        <div className="form-control">
                            <button className="btn btn-outline hover:text-yellow-500">Login</button>
                        </div>
                        <div className='flex justify-between'>
                            <button className='btn flex gap-2 btn-outline hover:text-yellow-500'><FaGoogle className='text-blue-600'></FaGoogle> Google</button>
                            <button className='btn btn-outline hover:text-yellow-500 flex gap-2'><FaGithub></FaGithub> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;