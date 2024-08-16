import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <p className="btn btn-ghost text-xl">Woman's Cloth</p>
            </div>
            <div className="navbar-end gap-5">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <Link to='/signup'><a className='btn'>Sign Up</a></Link>
                <Link to='/signin'><a className="btn">Sign In</a></Link>
            </div>
        </div>
    );
};

export default Navbar;