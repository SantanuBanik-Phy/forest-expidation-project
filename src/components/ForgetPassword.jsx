
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
    const { passwordResetEmail } = useContext(AuthContext);
    const location = useLocation();
    const { email } = location.state || {};
    const [resetEmail, setResetEmail] = useState(email || '');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await passwordResetEmail(resetEmail);
            setMessage('Password reset email sent. Check your inbox.');
            // Redirect to Gmail after successful password reset email
            window.location.href = `https://mail.google.com/mail/u/0/#inbox`;
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen ">
            <div className="flex flex-col justify-center items-center ">
                <div className="text-center mt-24 mb-10">
                    <h1 className="md:text-5xl text-3xl font-bold">Reset Your Password</h1>
                    <p className="mt-8">Enter your email address below to receive a password reset link.</p>
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
                        {message && <p className="text-green-500">{message}</p>}
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;