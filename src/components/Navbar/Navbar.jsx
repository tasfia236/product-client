import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('logOut'))
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <p className="btn btn-ghost text-xl">Woman's Cloth</p>
            </div>
            <div className="navbar-end gap-5">
                {user ?
                    <>
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <a onClick={handleLogout} className='btn'>Logout</a>
                    </>
                    :
                    <>
                        <Link to='/signup'><a className='btn'>Sign Up</a></Link>
                        <Link to='/signin'><a className="btn">Sign In</a></Link>
                    </>
                }
            </div>
        </div >
    );
};

export default Navbar;