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
                <Link to='/'><p className="btn btn-ghost text-xl">Woman's Cloth</p></Link>
            </div>
            <div className="navbar-end gap-5">
                {user ?
                    <>
                    <p>{user.email}</p>
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