import React from 'react';
import login from '../../assets/login.jpg'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {

    const { logIn, googleLogin, githubLogin } = useContext(AuthContext)

    const singIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const login = result.user
                console.log(login)
            })
            .catch(error => {
                console.error(error)
            })


    }


    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const google = result.user
                console.log(google)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithub = () => {
        githubLogin()
            .then(result => {
                const github = result.user
                console.log(github)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="heromin-h-screen flex justify-center">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
                    <img className='rounded-md relative' src={login} alt="" />
                    <div className="text-center absolute mt-36 ml-32 text-white lg:text-left">
                        <h1 className="text-5xl font-bold">Login now</h1>
                    </div>
                    <div className="card-body">
                        <Form onSubmit={singIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p><small>Don't Have An Account ? <Link className='font-bold underline text-primary' to='/register'>Registration</Link></small></p>
                            <p className='text-red-500 mt-4'><small>error</small></p>
                            <div className="form-control">
                                <button className="btn btn-outline hover:text-yellow-500">Login</button>
                            </div>
                        </Form>
                        <div className='flex justify-between'>
                            <button onClick={handleGoogle} className='btn flex gap-2 btn-outline hover:text-yellow-500'><FaGoogle className='text-blue-600'></FaGoogle> Google</button>
                            <button onClick={handleGithub} className='btn btn-outline hover:text-yellow-500 flex gap-2'><FaGithub></FaGithub> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;