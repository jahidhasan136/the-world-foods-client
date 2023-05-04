import React from 'react';
import { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Registration = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        console.log(name, photo, email, password, confirm)

        createUser(email, password)
        .then(result => {
            const signUp = result.user
            console.log(signUp)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="heromin-h-screen flex justify-center my-24">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
                    <div className="text-center text-white lg:text-left">
                        <h1 className="text-5xl font-bold">Login now</h1>
                    </div>
                    <Form className="card-body" onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="write your name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="wite your email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="write your password" className="input input-bordered" required/>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm" placeholder="write your password" className="input input-bordered" required/>

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