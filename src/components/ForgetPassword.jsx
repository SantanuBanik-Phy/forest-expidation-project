
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
    const location = useLocation();
    const { email } = location.state || {}; 
    const [resetEmail, setResetEmail] = useState(email || '');

    const handleResetPassword = (event) => {
        event.preventDefault();
        const mailtoUrl = `mailto:${resetEmail}?subject=Password Reset Request`;
        window.location.href = mailtoUrl;
    };

    return (
        <div className="min-h-screen ">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-center mt-24 mb-10">
          <h1 className="md:text-5xl text-3xl font-bold">Register now!</h1>
          <p className="mt-8">Enter   
 your email address below to receive a password reset link.</p>
        </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleResetPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-green-500">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;