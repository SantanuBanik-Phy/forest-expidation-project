import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {signIn, setUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [error,setError] = useState({})

    const handleLogin = e => {
        e.preventDefault();
       
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                setUser(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(err => {
                setError({...error, signIn: err.code});
            })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>

               <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <h1 className='text-center font-bold text-2xl'>Log in your Account</h1>
      <form onSubmit={handleLogin} className="card-body">
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
          {
            error.signIn && <p className="text-red-600">{error.signIn}</p>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-[#403F3F]">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Do not have an account? <Link className="text-blue-600 font-bold" to="/auth/register">Register</Link></p>
    </div>
            
            
             </div>
     
    );
};

export default Login;