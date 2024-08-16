import React from 'react';
import { Helmet } from 'react-helmet';

const Login = () => {
    return (
<div className="">
            <Helmet>
                <title>Liberty Tours | LogIn</title>
            </Helmet>
            <h2 className="card-title text-4xl pb-10 px-96 mx-24 font-bold">Register now!</h2>
            <div className="p-12 min-h-screen bg-base-200 mx-[37%]">
                <div className="card glass w-96">
                    <figure>
                        <img
                            src={cover}
                            className='w-full h-[50%]'
                            alt="clothes!" />
                    </figure>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control">
                            <button onClick={ HandleGoogleSignIn } className="btn text-white bg-red-600">Google login</button>
                        </div>
                        <div className="form-control">
                            <button onClick={ HandleGitHubSignIn } className="btn text-white bg-black">GitHub login</button>
                        </div>
                    </form>
                    <p className="pl-5">
                        New Here? Please <Link to='/signup'> <button className="btn btn-link">Register</button></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;