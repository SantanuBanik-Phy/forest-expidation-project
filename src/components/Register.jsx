import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser,setUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState({})
    const handleRegister = e => {
        e.preventDefault();
      
        const form = new FormData(e.target

        );

        const name = form.get('name');
        if (name.length < 5) {
            setError({...error, name: 'Name must be at least 5 characters long' })
            return

        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);
                // create user
                createUser(email, password)
                .then(result => {
                    setUser(result.user)
                    updateUserProfile({displayName: name ,photoURL: photo})
                    then(() =>{
                        navigate('/');
                    })
                })
                .catch(error => {
                    console.error(error)
                })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>

               <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
                <h1 className='text-center font-bold text-2xl'>Register Account</h1>
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
          {
            error.name && <p className="text-red-500">{error.name}</p>
          }
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Your photo url" className="input input-bordered" required />
        </div>

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
        <div className="form-control mt-6">
          <button className="btn text-white bg-[#403F3F]">Register</button>
        </div>
      </form>
     
    </div>
            
            
             </div>
    );
};

export default Register;