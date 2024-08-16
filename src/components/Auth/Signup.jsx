import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.jpeg'
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUser } = useContext(AuthContext) || {};

    const handleregister = e => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = { email, password, displayName }
        console.log(data);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Navigate('/')
                Swal.fire({
                    title: "User Successfully Registered",
                    icon: "success",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            })
            .catch(error => {
                Swal.fire({
                    title: `error registering, ${error.code}`,
                    icon: "warning",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                console.error(error);
            })
    }

    return (
        <div className="">
            <Helmet>
                <title>Liberty Tours | Registration</title>
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
                    <form onSubmit={handleregister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <p className="pl-5">
                            Already have an account? <Link to='/login'> <button className="btn btn-link">LogIn</button></Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;